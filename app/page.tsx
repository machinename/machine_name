import styles from './styles/page.module.css'; 
import ChatBot from './components/ChatBot';

export default function Home() {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.h1}>MACHINE NAME</h1>
            <ChatBot/>
        </div>
    );
}
