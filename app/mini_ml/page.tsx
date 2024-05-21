import styles from '../styles/page.module.css'
import { Button } from '@mui/material';
export default function MiniML(): JSX.Element {
  return (
      <div className={styles.wrapper}>
         <div className={styles.containerTwoA}>
         <h2 className={styles.h2}>Mini ML</h2>
         <div>
            <p className={styles.p}>
              Create and run ML algorithms<br/>
              straight from your mobile device
            </p>

            <Button color='secondary' sx={{ borderRadius: '0'}} variant="contained">DOWNLOAD</Button>
          </div>
         

         </div>
 
      </div>
  );
};