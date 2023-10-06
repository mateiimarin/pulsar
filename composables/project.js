import { doc, getDoc } from 'firebase/firestore'
import { ref as storageRef, getBlob } from 'firebase/storage'


export const getCurrentProjectData = async (projectId) => {

    const { $db, $storage } = useNuxtApp();
    const currentProject = useCurrentProject();
    const currentProjectFile = useCurrentProjectFile();
    console.log('jwefoj')
    
    const nodes = useNodes();
    const connections = useConnections();
    const variables = useVariables();

    if($db && $storage) {
        const currentProjectRef = await getDoc(doc($db, 'projects', projectId));
        currentProject.value = currentProjectRef.data();
    
        nodes.value = currentProjectRef.data().nodes;
        connections.value = currentProjectRef.data().connections;
    
        const variablesMap = new Map();
        currentProjectRef.data().variables.forEach((variable) => {
            variablesMap.set(variable.key, variable.value);
        })

        console.log(variablesMap)
        variables.value = variablesMap;
        console.log(variables.value)
    
        const fileBlob = await getBlob(storageRef($storage, `projects/${projectId}.html`));
        fileBlob.text().then((value) => {
            console.log(value)
            let start = value.indexOf('<body>') + 6;
            let end = value.indexOf('</body>');
            console.log(value.substring(start, end))
            currentProjectFile.value = value.substring(start, end);
            console.log(currentProjectFile.value)
        });
    }
}
