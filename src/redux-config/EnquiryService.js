import axios from "axios"

const getEnquiry = async () =>{
    const response = await axios.get("/api/v1/enquiry/list")
    return response.data
    // console.log(response.data)
}

const addEnquiry = async (formData) => {
    const response = await axios.post("/api/v1/enquiry/enquiry-form", formData)
    return response.data
    // console.log(formData)
}

const EnquiryService = {
    getEnquiry,
    addEnquiry
}

export default EnquiryService