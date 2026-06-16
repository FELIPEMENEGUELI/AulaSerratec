import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { CardTask } from '../../components/CardTask';
import { DadosDoCurso } from '../../data';
import { useState } from 'react';

interface PropsCardTask {
  id: number;
  title: string | number;
  description: string;
  tecnologias: string;
};

export const Home = () => {

  const [cursos, setCursos] = useState<PropsCardTask[]>(DadosDoCurso);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [tecnologia, setTecnologia] = useState<string>('');

  function removerCurso(id: number){
    setCursos(prevState => prevState.filter((curso) => curso.id !== id));
  }

  function limparInputs(){
    setTecnologia('')
    setDescription('')
    setTitle('')
  }

  function adicionarCurso(){

    const novoCurso: PropsCardTask = {
      id: Date.now(),
      title: title,
      description: description,
      tecnologias: tecnologia,
    }

    setCursos([...cursos, novoCurso]);
    limparInputs();
  } 
  
  return (
    <View style={styles.container}>

      <FlatList
        data={cursos}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => 
          <CardTask
            id={item.id}   
            title={item.title}
            description={item.description}
            tecnologias={item.tecnologias}
            onChangeRemove={removerCurso}
          />
        }
      />

      <TextInput 
        value={title}
        onChangeText={setTitle}
        placeholder='Digite o titulo do curso...'
        style={{
          backgroundColor: 'white',
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius: 4,
          width: '100%',
          marginTop: 10
        }}
      />
      
      <TextInput 
        value={description}
        onChangeText={setDescription}
        placeholder='Digite a descrição do curso...'
        style={{
          backgroundColor: 'white',
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius: 4,
          width: '100%',
          marginTop: 10
        }}
      />

      <TextInput 
        value={tecnologia}
        onChangeText={setTecnologia}
        placeholder='Digite as tecnologias do curso...'
        style={{
          backgroundColor: 'white',
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius: 4,
          width: '100%',
          marginTop: 10
        }}
      />

      <TouchableOpacity onPress={adicionarCurso} style={{ backgroundColor: 'green', width: '100%', height: 50, marginBottom: 60, alignItems: 'center' }}>
        <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold' }}>Adicionar curso</Text>
      </TouchableOpacity>

    </View>
  )
}

// DadosDoCurso -----> data(Do FlatList) --------> keyExtractor e renderItem (do FlatList) como: item todos os meus valores de: DadosDoCurso