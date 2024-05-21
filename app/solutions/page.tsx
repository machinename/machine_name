import { Button } from '@mui/material';
import styles from '../styles/page.module.css';
import { ArrowForward } from '@mui/icons-material';

import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();


// App component with references and sections for Home, Experience, and Projects
export default function Solutions() {
    const contactEmail = "info@machinename.dev";
    const subject = encodeURIComponent("Inquiry");
    const body = encodeURIComponent("Hello, I would like to know more about your services.");
    const mailtoLink = `mailto:${contactEmail}?subject=${subject}&body=${body}`;

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


                    <a href={mailtoLink}>
                        <Button className={styles.button} color='secondary'sx={{ borderRadius: '0' }}variant="contained" endIcon={ <ArrowForward />}>
                            Contact
                        </Button>
                    </a>
           
            </div> 
        </div> 
    );
};