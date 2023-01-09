import { get, ref } from "@firebase/database";
import { db } from "../firebase";

export const getDataFromDB = async (path: string) => {
  try {
    let storeList;
    await get(ref(db, path)).then(snapshot => {
      if (snapshot.exists()) {
        storeList = snapshot.val();
      }
    });

    return storeList;
  } catch (e) {
    console.log(e);
  }
};
