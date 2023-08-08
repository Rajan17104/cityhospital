import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification } from "firebase/auth";
import { auth } from "../../firebase";



export const singupApi = (values) => {
    console.log(values);
    try {

        createUserWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);

                onAuthStateChanged(auth, (user) => {
                    sendEmailVerification(auth.currentUser)
                        .then(() => {
                            console.log('Email verification sent');
                        })
                        // .catch((error) => {
                        //     const errorCode = error.code;
                        //     const errorMessage = error.message;
                        //     console.log(errorCode, errorMessage);
                        // });
                })
            })

            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }catch (error) {
        console.log(error);
    }
}