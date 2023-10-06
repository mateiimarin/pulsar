import { doc, getDoc, setDoc, collection, getDocs} from 'firebase/firestore'

// Methods for handling the the user's app database

export const getCollections = async (projectId) => {
    const { $db } = useNuxtApp();
    if($db) {
        const collectionRef = await getDoc(doc($db, `projects/${projectId}/db`, 'collections'));
        return collectionRef.data().collections;
    }
}

export const getCollectionDocuments = async (collectionName, projectId) => {
    const { $db } = useNuxtApp();
    if($db) {
        const querySnapshot = await getDocs(collection($db, `projects/${projectId}/db/collections/${collectionName}`));
        const collectionDocuments = querySnapshot.docs.map(doc => doc.data());
        return collectionDocuments;
    }
}

