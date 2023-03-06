/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { doc, onSnapshot } from "firebase/firestore";
import React, {useEffect} from "react"; 
import {firestore} from "../firebase-web/firebase";

export const useSubscription = (collection: string, document: string, setter: any) => {
  const [error, setError] = React.useState(null);

  useEffect(() => {
    const unsub = onSnapshot(doc(firestore, collection, document), (doc) => {
      const data = doc.data();
      setter(data);
    });
    return () => {
      unsub();
    };
  
  }, [setter, collection, document]);

  return { error };
};