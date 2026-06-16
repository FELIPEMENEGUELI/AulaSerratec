interface UserV1 {
  nome: string;
}

interface UserV1 {
  trabalho: string;
}

const data: UserV1 = {
  nome: '',
  trabalho: ''
} 

interface UserV2 {
  idade: number;
}

interface ExtendsInterfaces extends UserV1, UserV2 {}

type User = {
  nome: string; 
}

type UserTypes = {
  idade: number;  
}

type TodosTipos = User & UserTypes;

type Usuario = {
  nome: string;
  idade: number | string;
  trabalho: string;
}

type OmitindoInformacao = Omit<Usuario, 'trabalho'>
type PegandoInformacao = Pick<Usuario, 'nome'>
