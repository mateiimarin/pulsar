import { db } from '../utils/firebase'
 
export default defineEventHandler( async (event) => {

  const body = await readBody(event);

  const collectionRef = db.collection(`projects/${body.projectId}/db/collections/${body.collectionName}`);
  collectionRef.add(body.documentData);
})