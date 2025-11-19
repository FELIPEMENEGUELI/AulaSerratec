export interface IPropsResponseAPI {
  debut: { anime: string };
  id: number | string;
  name: string;
  images: string[];
  openCard: () => void;
}

export interface IListProps {
  listApi: IPropsResponseAPI[];
  openCard: (value: IPropsResponseAPI) => void;
}
