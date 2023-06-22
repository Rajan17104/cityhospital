import * as yup from "yup";


export const signUpSchema  = yup.object({
     name: yup.string().min(2).max(20).required("Please enter a name"),
     email: yup.string().email().required("please enter a email"),
     subject: yup.string().max(10).required("please enter a subject"),
     message: yup.string().max(30).required("please enter a message")
})



