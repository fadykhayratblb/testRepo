import styles from './constatnts.module.css';

/* eslint-disable-next-line */
export interface ConstatntsProps {}

export function Constatnts(props: ConstatntsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Constatnts!</h1>
    </div>
  );
}

export default Constatnts;
