import React from 'react';
import styles from './style.module.css';

export const ButtonComponent = ({ title, status, onChange }) => {

  return (
    <button disabled={status} className={styles.button} onClick={onChange}>
      {status ? 'Carregando...' : title}
    </button>
  )
}
