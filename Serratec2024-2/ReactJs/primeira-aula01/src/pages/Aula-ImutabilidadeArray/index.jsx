import { useState } from "react";
import { Container } from './style';

export const AulaImutabilidadeArray = () => {

  const [newPost, setNewPost] = useState("");
  
  const [posts, setPosts] = useState([
    { 
      id: 1, 
      post: 'Primeiro post' 
    },
    { 
      id: 2, 
      post: 'Segundo post' 
    },
  ]);

  const addPost = () => {
    setPosts([
      ...posts, 
      // { id: posts.length, post: 'Marina e muito legal' }
      { id: posts.length, post: newPost}
    ])
  }

  const addNewPost = (e) => {
    setNewPost(e.target.value)
  }

  return (
    <Container>
        Aula-ImutabilidadeArray

        {posts.map(post => (
            <span>{post.post}</span>
        ))}

        <button onClick={addPost}>Adicionar Post</button>

        <input
          placeholder="Digite o novo post"
          value={newPost}
          // onChange={(e) => setNewPost(e.target.value)}
          onChange={addNewPost}
        />
       
    </Container>
  );
};
