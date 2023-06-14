import {db} from '../../firebase-config/config.js'
import { doc, getDoc, updateDoc } from "firebase/firestore";


const controllers = {
    getAllUsers: async() => {

    },
    getUserById: async (id) => {
        try{
            // console.log(id);
            const docRef = doc(db, "users", id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                return docSnap.data();
            } else {
                console.log("No such document!");
            }
        } catch (err){
            console.error(err)
            return err;
        }
    },
    createUser: async(obj) => {

    },
    updateUser: async(id,prop)=>{
        // console.log('inside controllers', prop)
        try{
        const userRef = doc(db, "users", id)
        await updateDoc(userRef, prop);
        } catch (err){
            console.error(err)
            return err;
        }
    },
    deleteUser: async (id) => {

    }
}

export default controllers;