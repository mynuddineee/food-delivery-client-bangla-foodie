import {getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut} from "firebase/auth";
import { useEffect, useState } from "react";
import foodiesAuthentication from "../Firebase/firebase.init";


foodiesAuthentication();

export const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () =>{

     return signInWithPopup(auth, googleProvider)

    .then( result => {

        setUser(result.user);
    })

        .finally( () => setIsLoading(false));

    }
    const logOut = () =>{

        setIsLoading(true);
        signOut(auth)
        .then(() => { })
        .finally( () => setIsLoading(false));
    }

    useEffect( () => {

       const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
              
              setUser(user);
              
            } 
            else {
                setUser({})
            }
            setIsLoading(false);
            
          });
            return () => unsubscribe;

    }, [])

    return{
        user,
        logOut,
        isLoading,
        signInUsingGoogle
        
    }
    
}

export default useFirebase;