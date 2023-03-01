/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import firebaseAdmin from "firebase-admin";

import {firebaseConfig} from "./firebaseConfig";

const server = firebaseAdmin.apps.length === 0 ? firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(firebaseConfig),
}) : firebaseAdmin.app();

const db = server.firestore();

const x = { server, db };

export default x;