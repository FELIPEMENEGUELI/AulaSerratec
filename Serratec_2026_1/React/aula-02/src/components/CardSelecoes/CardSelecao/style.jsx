import styled from "styled-components";

export const Card = styled.div`
  width: 200px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  background-color: #fff;
`;

export const Header = styled.div`
  background-color: ${props => props.cor || ''};
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const Escudo = styled.span`
  font-size: 45px;
`;

export const NomePais = styled.span`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 1px;
`;

export const Body = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Info = styled.p`
  margin: 0;
  font-size: 14px;
  color: #333;
`;

export const Footer = styled.div`
  background-color: #f5f5f5;
  text-align: center;
  padding: 8px;
  font-size: 12px;
  color: #888;
  letter-spacing: 2px;
`;

export const ListaJogadores = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Jogador = styled.li`
  font-size: 13px;
  color: #555;
  padding: 4px 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

export const ButtonDefault = styled.button`
  padding: 5px 20px;
  height: 30px;
  border-radius: 8px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BotaoCard = styled(ButtonDefault)`
  background-color: #007BFF;
`;
