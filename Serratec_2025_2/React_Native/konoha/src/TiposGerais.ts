export interface IPropsButton {
  title: string | number;
  age?: number;
  backgroundColor?: string;
}

export interface IPropsButton {
  name?: string;
}

type PropsButton1 = {
  title: string;
  age?: number;
  backgroundColor?: string;
}

type PropsButton2 = {
  names?: string;
}

interface Pessoa {
  name: string;
}

interface Aluno extends Pessoa, PropsButton1, PropsButton2 {
  time: string;
}

type AllInterfaces = PropsButton2 & PropsButton1;

type Person = {
  nome: string;
  age: string;
  city: string;
  date: string;
}

type ConceitoPick = Pick<Person, 'age' | 'city'>
type ConceitoOmit = Omit<Person, 'age' | 'nome'>

type ConceitoRecord = Record<'nome' | 'age' | 'city' | 'date', string>
type ConceitoRecord1 = Record<'nomes' | 'ages' | 'citys' | 'dates', number>
