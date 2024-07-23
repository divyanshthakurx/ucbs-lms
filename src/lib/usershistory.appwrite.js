import { ID, Query } from "appwrite";
import { databases } from "./appwrite";

const database_id = '66431d5a00229c5bbd1f';
const collection_id = '66855041001f550300d9';

export const createUBHistory = async (userid, IB, RB) => {
    const currentDate = new Date();
    const curDate = currentDate.toISOString();
    let result = await databases.createDocument(
        database_id,
        collection_id,
        ID.unique(),
        {
            date: curDate,
            user: userid,
            issued_book: IB,
            returned_book: RB
        }
    );
    return result;
}

export const listUBHistory = async () => {
    const result = await databases.listDocuments(
        database_id,
        collection_id,
        [Query.limit(5000)]
    );
    return result;
}