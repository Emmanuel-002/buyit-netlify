import styles from './Login.module.css'

const Login = () =>{
   return(
        <div className={styles.login_form}>
            <h2>Login Form</h2>
            <form action='/'>
                <div className={styles.login_input}>
                    <label htmlFor='email'>E-mail</label> <br />
                    <input type='email' id='email' required />
                </div>
                <div className={styles.login_input}>
                    <label htmlFor='password'>Password</label> <br />
                    <input type='password' id='password' required />
                </div>
                <input type='submit' value="Login" />
                <a href='/'>forgot your account?</a>
            </form>
        </div>
    )
}
export default Login