import React, { useState } from 'react';
import Form from '../Form/Form';
import styles from './Message.module.css';

const Messagelist: React.FC = () => {
  const DummyList: string[] = [];
  const [messageList, updateMessageList] = useState<string[]>(DummyList);

  const addMessage = (message: string) => {
    updateMessageList([...messageList, message]);
  };

  return (
    <div>
      {messageList &&
        messageList.map((message, index) => {
          return (
            <div key={index} className={styles.message}>
              {message}
            </div>
          );
        })}
      <Form addMessageHandler={addMessage} />
    </div>
  );
};

export default Messagelist;
