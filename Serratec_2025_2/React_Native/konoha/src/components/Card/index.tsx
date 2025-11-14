import { FlatList } from "react-native"
import { InfoCard } from "./InfoCard";
import { IListProps } from "./type";

export const Card = ({listaAlunos}: IListProps) => {

  return (
    <>
      <FlatList
        data={listaAlunos}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => 
          <InfoCard 
            nome={item.nome}
            time={item.time}
          />
        }
      />
    </>
  )
}