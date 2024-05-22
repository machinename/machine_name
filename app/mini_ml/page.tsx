import { ArrowForward } from '@mui/icons-material';
import styles from '../styles/page.module.css'
import { Button } from '@mui/material';

export default function MiniML() {
  const DOWNLOAD_URL = "https://machinename.dev/mini_ml";
  return (
    <div className={styles.wrapperTwo}>
      <h2 className={styles.h2}>Mini ML</h2>

      <div className={styles.container}>
        <p className={styles.p1}>
          Create and run ML algorithms straight from your mobile device
        </p>
        <Button color='secondary' sx={{ borderRadius: '0'}} variant="contained" 
                    href={DOWNLOAD_URL}
                    rel="noopener noreferrer"
                    target="_blank"
        endIcon={ <ArrowForward/> }>DOWNLOAD</Button>
      </div>
    </div>
  );
};