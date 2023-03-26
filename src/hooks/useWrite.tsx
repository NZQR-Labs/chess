/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { doc, setDoc } from "firebase/firestore";
import React from "react"; 
import {firestore} from "../firebase-web/firebase";

export const useWriteDoc = (collection: string, document: string, setter: any) => {
  const [error, setError] = React.useState<string>("");

  const writeDoc = async (data: any) => {
    try {
      const docRef = doc(firestore, collection, document);
      await setDoc(docRef, data);
    }
    catch (e) {
      setError("Couldnt write to doc");
    }
    return;
  };

  return { error, writeDoc };
};