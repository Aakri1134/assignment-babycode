import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase";

export function createUser(email : string, password : string) {
    return createUserWithEmailAndPassword(auth, email, password)
}

export function signIn(email : string, password : string) {
    return signInWithEmailAndPassword(auth, email, password)
}

export async function signInGoogle() {
    const provider = new GoogleAuthProvider()
    const res = await signInWithPopup(auth, provider)
    return res
}

export function signOut ( ) {
    return auth.signOut()
}