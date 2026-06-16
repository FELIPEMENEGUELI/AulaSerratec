export interface PropsCardTask {
  id: number;
  title: string | number;
  description: string;
  tecnologias: string;
  onChangeRemove: (value: number) => void;
}

export interface PropsCardTaskV2 {
  data: {
    title: string | number;
    description: string;
    tecnologias: string;
  }
}