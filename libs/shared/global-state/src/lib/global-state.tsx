import styles from './global-state.module.css';

/* eslint-disable-next-line */
export interface GlobalStateProps {}

export function GlobalState(props: GlobalStateProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to GlobalState!</h1>
    </div>
  );
}

export default GlobalState;
