import styles from './configurations.module.css';

/* eslint-disable-next-line */
export interface ConfigurationsProps {}

export function Configurations(props: ConfigurationsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Configurations!</h1>
    </div>
  );
}

export default Configurations;
