import styles from './Cart.module.css';
// import {useState}  from 'react'
const Header = () =>{

    return(
        <header>
            <div className={styles.headerLeft}>
                <div className={styles.logo}>
                <img src='images/logo.jpg' alt='Logo'></img>
                </div>
                <h2>Brand</h2>
            </div>
            <div className={styles.headerRight}>
                <button>Sign in</button>
                <button>Sign up</button>
                <button>My cart</button>
            </div>
        </header>
    )
}
export default Header