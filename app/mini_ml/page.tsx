import styles from '../styles/page.module.css'
import { Button } from '@mui/material';
export default function MiniML(): JSX.Element {
  return (
    <div className={styles.wrapperTwo}>
      <h2 className={styles.h2}>Mini ML</h2>
      <div className={styles.container}>
        <p className={styles.p1}>
          Create and run ML algorithms straight from your mobile device
        </p>
        <Button color='secondary' sx={{ borderRadius: '0'}} variant="contained">DOWNLOAD</Button>
      </div>
    </div>
  );
};