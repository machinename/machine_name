import { Button } from '@mui/material';
import styles from '../styles/page.module.css';

export default function Solutions() {
    const CONTACT_Email = "info@machinename.dev";
    const SUBJECT = encodeURIComponent("Inquiry");
    const BODY = encodeURIComponent("Hello, I would like to know more about your services.");
    const MAIL_TO_LINK = `mailto:${CONTACT_Email}?subject=${SUBJECT}&body=${BODY}`;

    return (
        <div className={styles.wrapperTwo}>
            <h1 className={styles.h1}>Tailored Solutions</h1>
            <div>
                <h2 className={styles.h2}>AI & Machine Learning</h2>
                <h2 className={styles.h2}>Cloud Intergation</h2>
                <h2 className={styles.h2}>Full Stack Development</h2>
                <h2 className={styles.h2}>Test Automation</h2>
            </div>
            <Button color='secondary' sx={{ borderRadius: '0'}} variant="contained" href={MAIL_TO_LINK} rel="noopener noreferrer" target="_blank">CONTACT</Button>
        </div>
    );
};