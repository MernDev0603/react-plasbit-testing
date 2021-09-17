import Typewriter from 'typewriter-effect'

import styles from './Manage.module.scss'
import manage_bg from 'assets/img/manage.png'
import check from 'assets/img/check.svg'
function Manage() {
    return (
        <section className={styles.manage} style={{ background: `url(${manage_bg})` }}>
            <div className="container">
                <div className={styles.manage_inner}>
                    <div className={styles.manage_content}>
                        <h2 className={`title white ${styles.manage_title}`}>
                            PlasBit gives you a way to <br />
                            <span className={styles.typewriter_span}>
                                <Typewriter
                                    options={{
                                        autoStart: true,
                                        loop: true,
                                    }}
                                    onInit={(typewriter) => {
                                        typewriter
                                            .pauseFor(500)
                                            .typeString("Manage")
                                            .pauseFor(2000)
                                            .deleteAll()
                                            .pauseFor(500)
                                            .typeString("Control")
                                            .pauseFor(2000)
                                            .deleteAll()
                                            .pauseFor(500)
                                            .typeString("Hold")
                                            .pauseFor(2000)
                                            .start();
                                    }}
                                />
                            </span>
                            {' '}all your crypto
                            currency in one place
                        </h2>
                        <p className="text white">
                            <li>
                                <img src={check} alt="check" />
                                Secure storage - We store the vast majority of the digital assets in secure offline storage.
                            </li>
                            <li>
                                <img src={check} alt="check" />
                                Secure storage - We store the vast majority of the digital assets in secure offline storage.
                            </li>
                        </p>
                        <a href="#" className="btn">Learn more</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export { Manage };