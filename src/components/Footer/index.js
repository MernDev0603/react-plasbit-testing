import styles from './Footer.module.scss'
import logo from 'assets/img/logo-2.png' 
import social_1 from 'assets/img/social-1.svg' 
import social_2 from 'assets/img/social-2.svg' 
import social_3 from 'assets/img/social-3.svg' 
function Footer() {
	return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footer_top}>
                    <a href="#">
                        <img src={logo} alt="logo"/>
                    </a>
                    <div className={styles.footer_social}>
                        <a href="#">
                            <img src={social_1} alt="telegram"/>
                        </a>
                        <a href="#">
                            <img src={social_2} alt="linkedin"/>
                        </a>
                        <a href="#">
                            <img src={social_3} alt="twitter"/>
                        </a>
                    </div>
                </div>
                <div className={styles.footer_content}>
                    <div className={styles.footer_item}>
                        <h3 className={styles.footer_title}>
                            Services
                        </h3>
                        <nav>
                            <ul>
                                <li>
                                    <a href="#">
                                        Card
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Wallet
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Calculator
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className={styles.footer_item}>
                        <h3 className={styles.footer_title}>
                            Company
                        </h3>
                        <nav>
                            <ul>
                                <li>
                                    <a href="#">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Careers
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Privacy
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Cardholder Agreement
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Legal
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Contact Us
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className={styles.footer_item}>
                        <h3 className={styles.footer_title}>
                            security
                        </h3>
                        <nav>
                            <ul>
                                <li>
                                    <a href="#">
                                        Our Security
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Certifications & Assessments
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className={styles.footer_item}>
                        <h3 className={styles.footer_title}>
                            Starter guide
                        </h3>
                        <nav>
                            <ul>
                                <li>
                                    <a href="#">
                                        Cryptocurrency Basics
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Advanced Cryptocurrency
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        FAQ
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className={styles.policy}>
                    PlasBit Payments Europe AG is authorised by the Financial Market Authority of Liechtenstein under the Electronic Money Act 2011, Firm Reference 252199, for the issuing of electronic money.
                    <br/>
                    Terms & Conditions ( <a href="#">EU</a> | <a href="#">Non-EU</a> ) | Privacy Policy ( <a href="#">EU</a> | <a href="#">Non-EU</a> )
                    <br/>
                    © Copyright 2020 PlasBit - All Rights Reserved. Designed by <a href="#">Webcapitan TEAM</a>
                </div>
            </div>
        </footer>
    );
}

export {Footer};