import { Button } from '@mui/material';
import styles from '../styles/page.module.css';
import { ArrowForward } from '@mui/icons-material';

// App component with references and sections for Home, Experience, and Projects
export default function About() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.containerTwoA}>
                <h2 className={styles.h2}>Our Mission</h2>
                <div>
                    <h3 className={styles.h3}>
                        Committed to significantly<br/>
                        improving the lives of as many<br/>
                        one product at a time
                    </h3> 
                </div>
                <div></div>
            </div>            
        </div>
    );
};

