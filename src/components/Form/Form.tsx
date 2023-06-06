import React, { useRef } from 'react';
import styles from './Form.module.css';

interface FormProps {
  addMessageHandler: (message: string) => void;
}

const Form: React.FC<FormProps> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputRef.current) {
      const message = inputRef.current.value;
      props.addMessageHandler(message);
      inputRef.current.value = '';
    }
  };

  return (
    <div>
      <form className={styles.form} onSubmit={onSubmitHandler}>
        <input className={styles.input} type='text' placeholder='Enter Your Message' ref={inputRef} />
        <button className={styles.button}>Send</button>
      </form>
    </div>
  );
};

export default Form;
