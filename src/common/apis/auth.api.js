import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification } from "firebase/auth";
import { auth } from "../../firebase";



export const singupApi = (values) => {
    console.log(values);
    try {

        return new Promise((resolve, reject) => {
            createUserWithEmailAndPassword(auth, values.email, values.password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);

                    onAuthStateChanged(auth, (user) => {
                        sendEmailVerification(auth.currentUser)
                            .then(() => {
                                resolve({message : 'Email verification sent' , user : user} );
                            })
                            .catch((error) => {
                                const errorCode = error.code;
                                const errorMessage = error.message;
                                reject({errorCode, errorMessage});
                            });
                    })
                })

                .catch((error) => {
                    const errorCode = error.code;
                    if (errorCode.localeCompare('auth/email-already-in-use') === 0) {
                        reject({ payload: 'Already user registered.' })
                    } else if (errorCode.localeCompare('auth/wrong-password') === 0) {
                        reject({ payload: 'password is wrong' })
                    }
                });
        })

    } catch (error) {
        console.log(error);
    }
}