import { get, ref } from "@firebase/database";
import { db } from "../firebase";

export const getDataFromDB = async (path: string) => {
  try {
    let data;
    await get(ref(db, path)).then(snapshot => {
      if (snapshot.exists()) {
        data = snapshot.val();
      }
    });

    return data;
  } catch (e) {
    console.log(e);
  }
};
