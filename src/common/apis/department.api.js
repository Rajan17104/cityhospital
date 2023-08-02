import { addRequest, deleteRequest, getRequest, updateRequest } from "../request"


export const getDepartmentApiData = () => {
    return getRequest('department')
}

export const addDepartmentApiData = (data) => {
    return addRequest('department' , data)
}   

export const deleteDepartmentApiData = (id) => {
    return deleteRequest('department/' + id)
}   

export const updateDepartmentApiData = (data) => {
    return updateRequest('department/' + data.id , data)
}   