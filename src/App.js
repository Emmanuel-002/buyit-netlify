import styles from './Components/Header/Header.module.css'
import {useState} from 'react'
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';
import Product from './Components/Product/Product';
import NewArrival from './Components/Product/NewArrivals';
import Footer from './Components/Footer/Footer';

function App() {
  const [loginState,setLoginState] = useState(false)
    const [signUpState,setSignUpState] = useState(false)
    const [homePageState,setHomePageState] = useState(true)


    const loginHandler=()=>{
        setLoginState(true)
        setSignUpState(false)
        setHomePageState(false)
    }
    const signUpHandler = () =>{
        setSignUpState(true)
        setLoginState(false)
        setHomePageState(false)
    }
  return(
    <div>
      <header>
            <div className={styles.headerLeft}>
                <div className={styles.logo}>
                <img src='images/logo.jpg' alt='Logo'></img>
                </div>
                <h2>Brand</h2>
            </div>
            <div className={styles.headerRight}>
                <button onClick={loginHandler}>Sign in</button>
                <button onClick={signUpHandler}>Sign up</button>
                {/* <button>My cart</button> */}
            </div>
        </header>
        {signUpState ? <SignUp />:""}
        {loginState ? <Login />:""}
          {homePageState ? <div>
            <NewArrival /> 
            <Product /> 
            <Footer />
          </div> : ""}
    </div>
  )
  
}

export default App;
