'use client'
import styles from '../styles/page.module.css';
import { Box,  Button , Divider, IconButton, Menu, MenuItem } from '@mui/material';
import { ArrowDropDown, ArrowDropUp, Chat, ChatOutlined, ChatRounded, DarkMode, GitHub, PhotoCamera } from '@mui/icons-material';
import Link from 'next/link';
import { useState } from 'react';


export default function AppBar() {


    const [anchorElProducts, setAnchorElProducts] = useState<null | HTMLElement>(null);


    const handleMenuOpenProducts = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElProducts(event.currentTarget);
    };

    const handleMenuCloseProducts = () => {
        setAnchorElProducts(null);
    };


    return (
        <Box className={styles.appBar} sx={{ backgroundColor: 'background.default' }}>
            <div className={styles.appBarStart}>
                <Link href="/">
                <Button
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',  
                        borderRadius: '0',
                    
                        minWidth: '160px', 
                        minHeight: '40px', 
                        backgroundImage: `url(/logo.svg)`, 
                        backgroundSize: 'cover',
                        backgroundPosition: 'center', 
                        
                        '&:hover': {
                        filter: 'brightness(0.8)', 
                        }
                        ,
                    }}
                    />
                </Link>

                <Link href="/solutions" >
                    <Button sx={{ borderRadius: '0' ,    minWidth: '50px', 
                        minHeight: '40px',  }}>
                        SOLUTIONS
                    </Button>
                </Link>

      

                {/* <Button
                    variant="contained"
                    onClick={() => { }}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        borderRadius: '0' 
            
                    }}
                    >
                    <Image
                        src="logo.svg"
                        alt="Button Icon"
                        width={50} 
                        height={50}
                    />
                
                    </Button> */}


                <div onMouseLeave={handleMenuCloseProducts}>
                    <Button  sx={{ borderRadius: '0',     minWidth: '50px', 
                        minHeight: '40px',  }} onClick={handleMenuOpenProducts} endIcon={
                    Boolean(anchorElProducts) ?  < ArrowDropUp /> : < ArrowDropDown />
                    }>PRODUCTS</Button>
                    <Menu
                        anchorEl={anchorElProducts}
                        open={Boolean(anchorElProducts)}
                        onClose={handleMenuCloseProducts}
                      
                    >
                        <MenuItem  >
                            <Link href="/mini_ml" onClick={handleMenuCloseProducts}  className={styles.dropdownLink}  >
                                MINI ML
                            </Link>
                        </MenuItem>
                    </Menu>
                </div>

                     
                <Link href="/about" >
                    <Button sx={{ borderRadius: '0',     minWidth: '50px', 
                        minHeight: '40px',  }}>
                        ABOUT
                    </Button>
                </Link>



                {/* <div onMouseLeave={handleMenuCloseSolutions}>
                    <Button  sx={{ borderRadius: '0' }} onClick={handleMenuOpenSolutions} endIcon={
                    Boolean(anchorElSolutions) ?  < ArrowDropUp /> : < ArrowDropDown />
                    }>SOLUTIONS</Button>
                    <Menu
                        anchorEl={anchorElSolutions}
                        open={Boolean(anchorElSolutions)}
                        onClose={handleMenuCloseSolutions}
                      
                    >
                        <MenuItem  >
                            <Link href="/ai_machine_learning" onClick={handleMenuCloseSolutions}  className={styles.dropdownLink}  >
                                AI & MACHINE LEARNING
                            </Link>
                        </MenuItem>
                        <MenuItem  >
                            <Link href="/app_development" onClick={handleMenuCloseSolutions}  className={styles.dropdownLink}  >
                                APP DEVELOPMENT
                            </Link>
                        </MenuItem>
                        <MenuItem  >
                            <Link href="/automation" onClick={handleMenuCloseSolutions}  className={styles.dropdownLink}  >
                                AUTOMATION
                            </Link>
                        </MenuItem>
         
                    </Menu>
                </div> */}

         
            </div>

            {/* Right section of the header containing IconButton */}
            <div className={styles.appBarEnd}>                    
  
            </div>
        </Box>
    ); 
}
