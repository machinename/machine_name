import {Button, Divider, Paper} from '@mui/material';
import styles from '../styles/page.module.css';
import { ArrowForward } from '@mui/icons-material';

// // App component with references and sections for Home, Experience, and Projects
// export default function Solutions() {
//     return (
//         <div className={styles.wrapperTwo}>     
//             <div className={styles.containerTwoA}>
//                 <h2 className={styles.h2}>Tailored Tech Solutions</h2>
//                 <div>
//                     <h3 className={styles.h3}>AI & Machine Learning</h3>
//                     <h3 className={styles.h3}>Automation</h3>
//                     <h3 className={styles.h3}>Cloud Intergation</h3>
//                     <h3 className={styles.h3}>Full Stack Development</h3>
//                 </div>
//                 <div>
//                     <p className={styles.p}>See How We Can Transform Your Small Business</p>
//                     <Button className={styles.button} color='secondary'sx={{ borderRadius: '0' }}variant="contained" endIcon={ <ArrowForward />}>
//                     Contact
//                     </Button>
//                 </div> 
//             </div>

//             <div className={styles.containerTwoA}>
//                 <div style={{ display:'flex', flexDirection: 'row', justifyContent: 'space-evenly',
//                     width: '100%', height: '48%', borderRadius: '0'
//                 }}>
//                     <Paper sx={{width: '46%', height: '100%', borderRadius: '0'}}></Paper>
//                     <Paper sx={{width: '46%', height: '100%', borderRadius: '0'}}></Paper>
//                 </div>

//                 <div style={{ display:'flex', flexDirection: 'row', justifyContent: 'space-evenly',
//                     width: '100%', height: '48%', borderRadius: '0'
//                 }}>
//                     <Paper sx={{width: '46%', height: '100%', borderRadius: '0'}}></Paper>
//                     <Paper sx={{width: '46%', height: '100%', borderRadius: '0'}}></Paper>
//                 </div>
//             </div>
//         </div>
//     );
// };

// App component with references and sections for Home, Experience, and Projects
export default function Solutions() {
    return (
        <div className={styles.wrapperThree}>
            <h2 className={styles.h2}>Tailored Tech Solutions</h2>
            <div>
                <h3 className={styles.h3}>AI & Machine Learning</h3>
                <h3 className={styles.h3}>Automation</h3>
                <h3 className={styles.h3}>Cloud Intergation</h3>
                <h3 className={styles.h3}>Full Stack Development</h3>
                </div> 
                <div>
                    <p className={styles.p}>See How We Can Transform Your Small Business</p>
                    <Button className={styles.button} color='secondary'sx={{ borderRadius: '0' }}variant="contained" endIcon={ <ArrowForward />}>
                    Contact
                    </Button>
            </div> 
        </div> 
    );
};