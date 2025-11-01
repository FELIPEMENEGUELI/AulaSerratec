import minhasTagsHtml from 'styled-components';

export const NetoDaThais = minhasTagsHtml.input`
    background-color: ${(educacao) => (educacao.respeitoAsMulheres ? "green" : "red")};
    border-radius: 4px;
    color: #000;
`;