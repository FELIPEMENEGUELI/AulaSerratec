import { useEffect, useState } from "react";
import { Container } from "./style";
import { FaRegHeart, FaMap } from "react-icons/fa";
import { GetUsers } from "../../services/GetUsers";

export const RequestApi = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  async function carregarDadosApi() {
    setIsLoading(true);
    const response = await GetUsers();

    if (response.status === 200) {
      console.log("Retorno api", response.data);
      setUsers(response.data);
      setIsLoading(false);
    } else {
      console.log("Erro ao carregar dados");
      setIsLoading(false);
    }
  }

  useEffect(() => {
    carregarDadosApi();
  }, []);

  return (
    <Container>
      RequestApi <FaRegHeart /> <FaMap />

      {isLoading ? ( 
        "Carregando....." 
      ) : (
        users.map((user) => (
          <CardUser user={user}/>
        ))
      )}
    </Container>
  );
};

const CardUser = ({user}) => {
  return (
    <div
      key={user.id}
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        marginTop: "10px",
      }}>
      <span>name: {user.name}</span>
      <span>email: {user.email}</span>
    </div>
  );
};
