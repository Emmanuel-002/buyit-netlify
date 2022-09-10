import styles from './SignUp.module.css'

const SignUp = () =>{
    return(
        <div className={styles.signup_form}>
            <h2>Register</h2>
            <form action='/'>
                <div className={styles.signup_input}>
                    <label htmlFor='firstname'>First Name</label> <br />
                    <input type='text' id='firstname' required />
                </div>
                <div className={styles.signup_input}>
                    <label htmlFor='lastname'>First Name</label> <br />
                    <input type='text' id='lastname' required />
                </div>
                <div className={styles.signup_input}>
                    <label htmlFor='email'>E-mail</label> <br />
                    <input type='email' id='email' required />
                </div>
                <div className={styles.signup_input}>
                    <label htmlFor='password'>Password</label> <br />
                    <input type='password' id='password' required />
                </div>
                <div className={styles.signup_input}>
                    <label htmlFor='password'>Confirm Password</label> <br />
                    <input type='password' id='password' required />
                </div>
                <input type='submit' value="Register" />
            </form>
        </div>
    )
}
export default SignUp