import { FlatList } from "react-native"
import { InfoCard } from "./InfoCard";
import { IListProps } from "../../hooks/type";

export const Card = ({listApi, openCard}: IListProps) => {

  return (
    <>
      <FlatList
        data={listApi}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => 
          <InfoCard
            name={item.name}
            id={item.id}
            images={item.images}
            debut={item.debut}
            openCard={() => openCard(item)}
          />
        }
      />
    </>
  )
}
