import styles from './Footer.module.css';

const Footer = () =>{
    return(
        <footer>
            <div className={styles.footer_main}>
                <div className={styles.note}>
                    <h2>
                    Same day delivery for orders pleaced between 8:00am and 4:00pm from Monday to Saturday.
                    </h2>
                </div>
                <div className={styles.contacts}>
                    <h3>Contacts</h3>
                    <p>08060515523</p>
                    <p>08058983817</p>
                    <p>07036210111</p>
                    <p><a href="https://segsey4topplaces@gmail.com" target="_blank">segsey4topplaces@gmail.com</a></p>
                    <p>Flat 7 Block A SOQ NAF Base Yola</p>
                </div>
                <div className={styles.quicklinks}>
                    <h3>Quick links</h3>
                    <a href="#">Shop</a><br />
                    <a href="#">Account</a><br />
                    <a href="#">Blog</a><br />
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
            Created by New Life Global &copy; reserved 2022
            </div>
        </div>
        </footer>
    )

}
export default Footer;