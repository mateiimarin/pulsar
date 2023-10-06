import { doc, updateDoc } from "firebase/firestore"
import { ref as storageRef, uploadBytes} from "firebase/storage"

export const publishProject = async (projectId) => {
    const {$db, $storage} = useNuxtApp();

    const nodes = useNodes();
    const connections = useConnections();
    const variables = useVariables();
    const currentProjectFile = useCurrentProjectFile();
    console.log(currentProjectFile.value)

    var variablesArray = [];
    variables.value.forEach((varValue, varKey) => {
        variablesArray.push({key: varKey, value: varValue})
    })

    console.log(typeof nodes.value)
    console.log(typeof connections.value)
    console.log(typeof variablesArray)
    const projectRef = doc($db, "projects", projectId);
    await updateDoc(projectRef, {
        nodes: nodes.value,
        connections: connections.value,
        variables: variablesArray,
    })

    const htmlSkeleton = useHtmlSkeleton();
    var fileString = htmlSkeleton.value[0].head;
    fileString = fileString.replace('{pageTitle}', projectId);
    console.log(currentProjectFile.value)
    fileString = fileString.replace('{htmlContent}', currentProjectFile.value);
    console.log(generateScript(nodes.value, connections.value, variables.value));
    fileString = fileString.replace('{scriptContent}', generateScript(nodes.value, connections.value, variables.value));

    const fileRef = storageRef($storage, `projects/${projectId}.html`);
    const blob = new Blob([fileString], { type: "text/html" });
    uploadBytes(fileRef, blob).then((snapshot) => {
        console.log("uploaded file", fileString)
    })

    //console.log(fileString)

    //generateScript(nodes.value, connections.value, variables.value)
    //console.log(currentProjectFile.value)
}
