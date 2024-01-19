import axios from "axios";

const url = "";

const endpoints = {
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