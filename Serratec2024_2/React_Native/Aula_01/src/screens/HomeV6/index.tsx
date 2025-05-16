import { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import ImageDefault from '../../assets/serratec2.jpg';
import { ModalCustomer } from "../../components/Modal";
import { ServiceGetCharacters } from "../../services/ServiceGetCharacters";
import { styles } from "./style";

interface ResponseApi {
  id: number;
  name: string;
  images: string[];
}

export const HomeV6 = () => {

  const [characters, setCharacters] = useState<ResponseApi[]>([]);
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(true);

  const messageModal = "Dados da api carregados com sucesso!!!"

  const loadApi = async () => {
    setIsloading(true);
    
    const response = await ServiceGetCharacters();
    
    if (response && response.status === 200) {
      setOpenModal(true);
      setCharacters(response.data.characters)
    } else {
      console.log("Deu errado")
    }

    setIsloading(false);
  }

  useEffect(() => {
    loadApi();
  }, [])

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text style={styles.name}>Carregando dados da api...</Text>
      ) : (
        <FlatList
          data={characters}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) =>
            <View style={styles.boxCard}>
              <View style={styles.boxInfo}>
                <Text style={styles.name}>{item.name}</Text>
              </View>
              {item.images ? (
                <Image style={styles.avatar}
                  source={{ uri: item.images[0] }}
                  alt="Avatar de perfil" />
              ) : (
                <Image style={styles.avatar}
                  source={ImageDefault}
                  alt="Avatar de perfil" />
              )}
            </View>
          }
        />
      )}

      {openModal && 
        <ModalCustomer 
          openModal={openModal} 
          message={messageModal}
          setOpenModal={setOpenModal}
        />
      }

    </View>
  )
}