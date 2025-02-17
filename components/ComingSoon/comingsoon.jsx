import styles from './Coming.module.css'
import ContactForm from '@components/Button/contactForm'

export default function Coming() {
    return (
        <div className={styles.home}>
            <div className={styles.navBar}>
                <p className={styles.logo}>DHRUVA</p>
            </div>
            <div className={styles.main}>
                <div className={styles.textDiv}>
                    <p className={styles.maintxt}>Coming Soon!</p>
                    <div className={styles.innerTextDiv}>
                        <p className={styles.txt}>
                            Redefining the way technical fest used to be.
                            <br />
                            Technical Fest you would have never attended before,
                            exclusively by Beta Labs IIITK
                        </p>
                    </div>
                    <ContactForm name="Contact Us"></ContactForm>
                </div>
            </div>
            <footer className={styles.footer}>
                <span className={styles.insta}>
                    <a
                        href="https://www.instagram.com/iiitkottayam/?hl=en"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Instagram
                    </a>
                    &nbsp;
                </span>
                <span className={styles.link}>/&nbsp;</span>
                <span className={styles.web}>
                    <a
                        href="https://www.iiitkottayam.ac.in/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Website
                    </a>
                </span>
            </footer>
        </div>
    )
}
