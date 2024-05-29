import { Button } from '@mui/material';
import styles from '../styles/page.module.css'

export default function MiniML() {
  const DOWNLOAD_URL = "https://machinename.dev/mini_ml";
  return (
    <div className={styles.wrapperTwo}>
      <h1 className={styles.h1}>Mini ML</h1>
      <div>
        <p>Create and run ML algorithms straight from your mobile device</p>
        <Button color='secondary' sx={{ borderRadius: '0'}} variant="contained" href={DOWNLOAD_URL}rel="noopener noreferrer"target="_blank">DOWNLOAD</Button>
      </div>
    </div>
  );
};