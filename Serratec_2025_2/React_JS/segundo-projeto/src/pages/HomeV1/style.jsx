import styles from 'styled-components';

export const CardContainer = styles.div`
  background-color: #ddd;
  border-radius: 10px;
  padding: 10px 20px;
  width: 180px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
`;

export const Name = styles.span`
  font-size: 20px;
`;

export const Image = styles.img`
  width: 100%;
  height: 150px;
  border-radius: 10px;
`;