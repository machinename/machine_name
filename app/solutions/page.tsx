import { Button } from '@mui/material';
import styles from '../styles/page.module.css';

export default function Solutions() {
    const CONTACT_Email = "info@machinename.dev";
    const SUBJECT = encodeURIComponent("Inquiry");
    const BODY = encodeURIComponent("Hello, I would like to know more about your services.");
    const MAIL_TO_LINK = `mailto:${CONTACT_Email}?subject=${SUBJECT}&body=${BODY}`;

    return (
        <div className={styles.wrapper}>
            <div className={styles.containerGrid}>
                <div className={styles.gridItem}>
                    <h2 className={styles.h2}>AI & Machine Learning</h2>
                    <p>Unlock Valuable Insights: Leverage AI algorithms to uncover hidden patterns and trends in your data, leading to better decision-making and increased efficiency.</p>
                </div>
                <div className={styles.gridItem}>
                    <h2 className={styles.h2}>Cloud Intergation</h2>
                    <p>Scalability On-Demand: Easily scale your resources up or down to meet fluctuating demand, ensuring optimal performance and cost-efficiency.</p>
                </div>
                <div className={styles.gridItem}>
                    <h2 className={styles.h2}>Full Stack Development</h2>
                    <p>End-to-End Expertise: Benefit from a holistic approach to development, ensuring seamless integration between front-end and back-end systems..</p>
                </div>
                <div className={styles.gridItem}>
                    <h2 className={styles.h2}>Test Automation</h2>
                    <p>Improved Quality: Catch bugs and errors early in the development cycle, leading to a more reliable and stable product.</p>
                </div>
            </div>
            <div>
                <p>See how our experts can transform your small business</p>
                <Button color='secondary' sx={{ borderRadius: '0'}} variant="contained" href={MAIL_TO_LINK} rel="noopener noreferrer" target="_blank">CONTACT</Button>
            </div>
        </div>
    );
};