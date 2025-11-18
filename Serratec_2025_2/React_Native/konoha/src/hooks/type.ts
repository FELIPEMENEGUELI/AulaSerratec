export interface IPropsResponseAPI {
  debut: { anime: string };
  id: number | string;
  name: string;
  images: string[];
}

export interface IListProps {
  listApi: IPropsResponseAPI[]
}
