import React from 'react';
import styles from './Textbox.module.css';
import Messagelist from '../Messagelist/Messagelist';

const Textbox: React.FC = () => {
  return (
    <div>
      <h1>Chat App</h1>
      <div className={styles.container}>
        <Messagelist />
      </div>
    </div>
  );
};

export default Textbox;
