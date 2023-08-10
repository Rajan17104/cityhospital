import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export const signupAPI = (values) => {
    console.log(values);

    try {
        return new Promise((resolve, reject) => {
            createUserWithEmailAndPassword(auth, values.email, values.password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    onAuthStateChanged(auth, (user) => {
                        sendEmailVerification(auth.currentUser)
                            .then(() => {
                                resolve({ message: "Email verification sent", user: user });
                            })
                            .catch((error) => {
                                const errorCode = error.code;
                                const errorMessage = error.message;
                                reject({message : errorCode});
                            });
                    })
                })
                .catch((error) => {
                    const errorCode = error.code;
                    if (errorCode.localeCompare('auth/email-already-in-use') === 0) {
                        reject({ message: 'Already user registered.' })
                    } else if (errorCode.localeCompare('auth/wrong-password') === 0) {
                        reject({ message: 'password is wrong' })
                    }
                });
        })

    } catch (error) {
        console.log(error);
    }

}

export const loginAPI = (values) => {
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                if (user.emailVerified) {
                    resolve({message: "You are successfully login"});
                    // localStorage.setItem("loginstatus", 'true');
                    // navigate('/');
                } else {
                    reject({message: "Your Email is not Verified..."});
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                reject({message: errorCode});
            });
    })
}

export const forgetAPI = (values) => {
    return new Promise((resolve, reject) => {
        sendPasswordResetEmail(auth, values.email)
            .then(() => {
                resolve({message: "Password reset link sent to your email id."});
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                reject({message: errorCode});
            });
    })
}