import { View, ScrollView } from 'react-native';
import { styles } from './style';
import { CardTask } from '../../components/CardTask';

export const Home = () => {
  
  return (
    <View style={styles.container}>
      <CardTask 
        title='Desenvolvimento Web'
        description='É uma materia voltada para o desenvolvimento de aplicações web.'
        tecnologias='Tecnologias: React, Angular, Nextjs, Vue'
      />

      <CardTask 
        title='Desenvolvimento backend'
        description='É uma materia voltada para o desenvolvimento de apis.'
        tecnologias='Tecnologias: C#, Java, python'
      />

      {/* <ScrollView>
        <View style={styles.cardTask}>
          <Text style={styles.title}>Desenvolvimento Devops</Text>

          <Text style={styles.description}>
            É uma materia voltada para o desenvolvimento de arquitetura.
          </Text>

          <Text style={styles.textDefault}>
            Tecnologias: AzureDevops, Portal Azure, Kubernets, Docker, Dockerfile, yaml  
          </Text>

          <TouchableOpacity style={styles.buttonAction}>
            <Text style={styles.textButton}>Inscreva-se</Text>

            <Icon 
              name="arrow-forward" 
              size={width < 767 ? 20 : 40} 
              color="white" 
            />
          </TouchableOpacity>
        </View>

        <View style={styles.cardTask}>
          <Text style={styles.title}>Desenvolvimento de testes automatizados</Text>

          <Text style={styles.description}>
            É uma materia voltada para o desenvolvimento de testes automatizados.
          </Text>

          <Text style={styles.textDefault}>
            Tecnologias: Robot, Jmeter, Playright
          </Text>

          <TouchableOpacity style={styles.buttonAction}>
            <Text style={styles.textButton}>Inscreva-se</Text>

            <Icon 
              name="arrow-forward" 
              size={width < 767 ? 20 : 40} 
              color="white" 
            />
          </TouchableOpacity>
        </View> 

        <View style={styles.cardTask}>
          <Text style={styles.title}>Desenvolvimento de analista de negocios</Text>

          <Text style={styles.description}>
            É uma materia voltada para o desenvolvimento pessoal para requisitos de projetos.
          </Text>

          <Text style={styles.textDefault}>
            Tecnologias: Kanban, AzureDevops, Jira
          </Text>

          <TouchableOpacity style={styles.buttonAction}>
            <Text style={styles.textButton}>Inscreva-se</Text>

            <Icon 
              name="arrow-forward" 
              size={width < 767 ? 20 : 40} 
              color="white" 
            />
          </TouchableOpacity>
        </View> 
      </ScrollView> */}
    </View>
  )
}
