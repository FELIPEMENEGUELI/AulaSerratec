interface Lista {
  id: number;
  nome: string;
  time: string;
}

export interface IListProps {
  listaAlunos: Lista[]
}

export interface PropsInfoCard {
  nome: string;
  time: string;
}