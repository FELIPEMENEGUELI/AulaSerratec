import { Api } from "./api";

export const GetUsers = async () => {
  const endpointUser = import.meta.env.VITE_URL_USERS;

  try {
    const respostaApi = await Api.get(`${endpointUser}`);
    return respostaApi;

  } catch (error) {
    return error;
  }
};
