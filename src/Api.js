import axios from "axios";

const url = "https://vitalsyncbackend-c6oszgtd6a-uw.a.run.app";

const endpoints = {
  getMedication: "/api/userPrescriptions",
  getFirstName: "/api/patient/firstName",
  getDoctorPatients: "/api/patient/ofDoctor",
  getDoctorName:"/api/doctor/firstName",
  getAiResponse:"/api/response",
};

export const npiNumberApi = async (number) => {
    let newUrl = `https://clinicaltables.nlm.nih.gov/api/npi_org/v3/search?terms=${number}`
    try {
      const response = await axios.get(newUrl);
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  export const getMedicationApi = async () => {
    let exampleID = "65ab8a02bbdc95ede8711ade"
    let message = url + endpoints.getMedication +"?_id=" + exampleID;
      try{
        const res = await axios.get(message);
        console.log(res.data)
        return res.data;
      } catch (err) {
        console.error({ err });
      }
  }

  export const getAiResponseApi = async (context) => {

    let message = url + endpoints.getAiResponse +"?context=" + context;
      try{
        const res = await axios.get(message);
        console.log(res.data)
        return res.data;
      } catch (err) {
        console.error({ err });
      }
  }

  export const getDoctorPatientApi= async () => {
    let exampleID = "65ab90bb564175621335500b"
    let message = url + endpoints.getDoctorPatients +"?_id=" + exampleID;
      try{
        const res = await axios.get(message);
        console.log(res.data)
        return res.data;
      } catch (err) {
        console.error({ err });
      }
  }

  export const getFirstNameApi = async () => {
    let exampleID = "65ab8a02bbdc95ede8711ade"
    let message = url + endpoints.getFirstName +"?_id=" + exampleID;
      try{
        const res = await axios.get(message);
        console.log(res.data)
        return res.data;
      } catch (err) {
        console.error({ err });
      }
  }

  export const getDoctorNameApi = async () => {
    let exampleID = "65ab90bb564175621335500b"
    let message = url + endpoints.getDoctorName +"?_id=" + exampleID;
      try{
        const res = await axios.get(message);
        console.log(res.data)
        return res.data;
      } catch (err) {
        console.error({ err });
      }
  }
