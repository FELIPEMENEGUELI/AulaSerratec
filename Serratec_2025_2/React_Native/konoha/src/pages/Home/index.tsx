import { ImageBackground, View, Text, Alert, ActivityIndicator } from "react-native";
import Banner from '../../../assets/banner.webp';
import { Card } from "../../components/Card";
import { Api } from "../../services/Api";
import { useEffect, useState } from "react";
import { styles } from "./style";
import { IPropsResponseAPI } from "../../hooks/type";
import { useAuth } from "../../hooks/useAuth";

export const Home = () => {

  const { setIsLoading, isLoading } = useAuth();

  const [dataNaruto, setDataNaruto] = useState<IPropsResponseAPI[]>([]);

  const loadApiNaruto = async () => {
    setIsLoading(true);
    try {

      const response = await Api.get('/akatsuki');
      setDataNaruto(response.data.akatsuki)

    } catch (error) {
      Alert.alert('Erro ao carregar dados da API');

    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  }

  useEffect(() => {
    loadApiNaruto();
  }, [])

  return (
    <View style={styles.container}>
      <ImageBackground source={Banner} style={styles.background}>

        {isLoading ? (
          <View style={styles.loadingApi}>
            <ActivityIndicator size={'large'} color={'orange'} />
          </View>
        ) : dataNaruto.length <= 0 && !isLoading ? (
          <Text style={{ fontSize: 50}}>Nenhuma informação da Akatsuki encontrada!</Text>
        ) : (
          <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
            <Card listApi={dataNaruto} />
          </View>
        )}

      </ImageBackground>
    </View>
  )
}