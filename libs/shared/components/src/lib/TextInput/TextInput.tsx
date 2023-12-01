import styles from './TextInput.module.css';

/* eslint-disable-next-line */
export interface TextInputProps {}

export function TextInput(props: TextInputProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to TextInput!</h1>
    </div>
  );
}

export default TextInput;
