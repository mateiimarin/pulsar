import { db } from '../utils/firebase'
 
export default defineEventHandler( async (event) => {

  const body = await readBody(event);

  const collectionSnapshot = await db.collection(`projects/${body.projectId}/db/collections/${body.collectionName}`).get();
  console.log(collectionSnapshot)
  let collectionArray = [];

  collectionSnapshot.forEach(doc => {
    collectionArray.push(doc.data());
  })
  
  return {
    collectionDocuments: collectionArray,
  }
})