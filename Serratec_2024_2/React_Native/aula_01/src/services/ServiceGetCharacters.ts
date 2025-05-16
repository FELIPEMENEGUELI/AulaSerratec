import axios from "axios";

export const ServiceGetCharacters = async () => {

  const url = "https://narutodb.xyz/api/character";

  try {
    const response = await axios.get(url);
    return response;
  }
  catch (error) {
    console.log("chamou a api e deu erro")
  }
};