import styles from './Footer.module.css';

const Footer = () =>{
    const date = new Date()
    return(
        <footer>
            <h2>
                Shop with brand for amazing e-commerce experience
            </h2>
            <div className={styles.footer_main}>
                <div className={styles.contacts}>
                    <h3>Contacts</h3>
                    <p>08000000001</p>
                    <p>08000000002</p>
                    <p>07000000003</p>
                    <p><a href="https://brand@gmail.com" target="_blank">brand@gmail.com</a></p>
                    <p>Flat 10 Block A My location, Nigeria</p>
                </div>
                <div className={styles.quicklinks}>
                    <h3>Quick links</h3>
                    <a href="#" target="_blank">Shop</a><br />
                    <a href="#" target="_blank">Account</a><br />
                    <a href="#" target="_blank">Blog</a><br />
                </div>
                <div className={styles.form}>
                <h3>Message</h3>
                    <div className={styles.message}>
                        <form action='/' method='POST'>
                            <div>
                                <input type="text" placeholder="First Name"/>
                            </div>
                            <div>
                                <input type="text" placeholder="Last Name"/>
                            </div>
                            <div>
                                <input type="tel" placeholder="Phone Number"/>
                            </div>
                            <div>
                                <input type="email" placeholder="Email"/>
                            </div>
                            <div>
                                <textarea placeholder="Message"/>
                            </div>
                            <div>
                                <input type="submit" value="Submit"></input>
                            </div>
                        </form>
                </div>
            </div>
        </div>
        <div className={styles.footer_bottom}>
            <div>
                <a href="https://facebook.com" target="_blank"><img src="images/facebookIcon.png" /></a>
                <a href="https://instagram.com" target="_blank"><img src="images/instagramIcon.jpg" /></a>
                <a href="https://twitter.com" target="_blank"><img src="images/twitterIcon.png" /></a>
                <a href="https://web.whatsapp.com" target="_blank"><img src="images/whatsappIcon.png" /></a>
            </div>
            <div>
                Company Name &copy; reserved {date.getFullYear()}
            </div>
        </div>
        </footer>
    )

}
export default Footer;