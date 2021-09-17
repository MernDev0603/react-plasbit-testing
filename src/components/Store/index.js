import Typewriter from 'typewriter-effect'

import styles from './Store.module.scss'
import store from 'assets/img/store.png' 
import dots from 'assets/img/dots.svg' 
import check from 'assets/img/check.svg' 
function Store() {
	return (
        <section className={styles.store}>
            <div className="container">
                <div className={styles.store_inner}>
                    <div className={styles.store_img}>
                        <img src={store} alt="plasbit"/>
                        <span className={styles.store_bg} style={{background: `center/cover url(${dots})`}}></span>
                    </div>
                    <div className={styles.store_content}>
                        <h2 className="title">
                            Spend and Store
                            crypto on {' '}
                            <span>
                                your{' '}
                                <Typewriter 
                                    options={{
                                        autoStart: true,
                                        loop: true,
                                    }}
                                    onInit={(typewriter) => {
                                        typewriter.typeString("Wallet")
                                        .pauseFor(2000)
                                        .deleteAll()
                                        .typeString("Card")
                                        .pauseFor(2000)
                                        .deleteAll()
                                        .typeString("Terms")
                                        .pauseFor(2000)
                                        .start();
                                    }}
                                />
                            </span>
                        </h2>
                        <p className="text">
                            <li>
                                <img src={check} alt="check"/>
                                Multi-Coin Support - Manage BTC, BCH,ETH,ETC,LTC, and all your ERC-20 tokens in one place.
                            </li>
                            <li>
                                <img src={check} alt="check"/>
                                Secure storage - Your keys are protected with Secure Enclave and biometric authentication technology.
                            </li>
                        </p>
                        <a href="#" className="btn">Learn more</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export {Store};