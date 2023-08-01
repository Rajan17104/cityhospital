import { addRequest, deleteRequest, getRequest, updateRequest } from "../request"


export const getDoctorApiData = () => {
    return getRequest('Doctors')
}

export const addDoctorApiData = (data) => {
    return addRequest('Doctors' , data)
}   

export const deleteDoctorApiData = (id) => {
    return deleteRequest('Doctors/' + id)
}   

export const updateDoctorApiData = (data) => {
    return updateRequest('Doctors/' + data.id , data)
}   
