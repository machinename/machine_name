'use client'

import { useThemeContext } from './components/ThemeProvider'
import styles from './styles/page.module.css';

// App component with references and sections for Home, Experience, and Projects
export default function Home() {
    const { isDarkTheme } = useThemeContext();
    
    return (
            <div className={styles.wrapper}>
                <h1 className={styles.h1}>MACHINE NAME</h1>
                {/* <div                style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',  
                        borderRadius: '0',
                       
                        minWidth: '400px', 
                        minHeight: '100px', 
                        backgroundImage:  isDarkTheme ? `url(/logo_dark.svg)` : `url(/logo_light.svg)`, 
                        backgroundSize: 'cover',
                        backgroundPosition: 'center', 
                            
                    }}/> */}



                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                                height: '200px',
                                minWidth: '600px',
                                justifyContent: 'center',
                                alignItems: 'center',
                                // background: 'yellow',
                                padding: '2%'
        
                            }}>
                            <div style={{
                                  display: 'flex',
                                  flexDirection:'column',
                                  justifyContent: 'center',
                                  textAlign: 'center',
                                height: '120px',
                                width: '120px',
                                backgroundColor: '#7f7f7f',
                                transform: 'rotate(270deg)',
                               
                            }}>
                                <h1 className={styles.h1}>M</h1>
                            </div>
                            <div style={{width: '6px'}}/>
                            <div style={{
                                 display: 'flex',
                                 flexDirection:'column',
                                 justifyContent: 'center',
                                 textAlign: 'center',
                                height: '84px',
                                width: '84px',
                                backgroundColor: '#7f7f7f',
                            
                            }}>
                                <h2 className={styles.h2}>E</h2>
                            </div>
                            <div style={{width: '6px'}}/>
                            <div style={{  display: 'flex',     
                              flexDirection:'column',
                                  justifyContent: 'center',
                                  textAlign: 'center',
                                height: '120px',
                                width: '120px',
                                backgroundColor: '#7f7f7f',
                          
                            }}>
                                <h1 className={styles.h1}>N</h1>
                            </div>
                            <div style={{width: '6px'}}/>
                            <div style={{  display: 'flex',
                            flexDirection:'column',
                                  justifyContent: 'center',
                                  
                                  textAlign: 'center',
                                height: '84px',
                                width: '84px',
                                backgroundColor: '#7f7f7f',
                            }}>
                                 <h2 className={styles.h2}>E</h2>
                            </div>
                        </div>

            </div>
    );
};

