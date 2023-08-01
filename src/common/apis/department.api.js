import { addRequest, deleteRequest, getRequest, updateRequest } from "../request"


export const getDepartmentApiData = () => {
    return getRequest('Department')
}

export const addDepartmentApiData = (data) => {
    return addRequest('Department' , data)
}   

export const deleteDepartmentApiData = (id) => {
    return deleteRequest('Department/' + id)
}   

export const updateDepartmentApiData = (data) => {
    return updateRequest('Department/' + data.id , data)
}   