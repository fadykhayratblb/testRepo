import styles from './mock.module.css';

/* eslint-disable-next-line */
export interface MockProps {}

export function Mock(props: MockProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Mock!</h1>
    </div>
  );
}

export default Mock;
