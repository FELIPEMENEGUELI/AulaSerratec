import { Api } from "./api/Api.jsx";

export const GetAlunos = async () => {

    try {
        const response = await Api.get('/alunos');
        return response;

    } catch (error) {
        throw new error;        
    }
}

export const EditarAluno = async (id) => {

    try {
        const response = await Api.put(`/alunos/${id}`);
        // const response = await Api.put('/alunos/' + id);
        return response;
        
    } catch (error) {
        throw new error;        
    }
}

export const CadastrarAluno = async (data) => {

    try {
        const response = await Api.post(`/alunos`, data);
        return response;
        
    } catch (error) {
        throw new error;        
    }
}

export const DeletarAluno = async (id) => {

    try {
        const response = await Api.delete(`/alunos/${id}`);
        return response;
        
    } catch (error) {
        throw new error;        
    }
}
