import styles from './Main.module.scss'
import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect'

import Main_bg from 'assets/img/main.png'
import coin_1 from 'assets/img/coin-1.svg'
import coin_2 from 'assets/img/coin-2.svg'
import coin_3 from 'assets/img/coin-3.svg'
import coin_4 from 'assets/img/coin-4.svg'
import coin_5 from 'assets/img/coin-5.svg'
import cards from 'assets/img/cards.png'
import main_left from 'assets/img/main_left.svg'
import main_right from 'assets/img/main_right.svg'

function Main() {
    const [offsetY, setoffsetY] = useState();
    const handleScroll = () => setoffsetY(window.pageYOffset);
    window.addEventListener('scroll', handleScroll)
    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll)
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);

    return (
        <section className={styles.main}>
            <img className={styles.main_left} src={main_left} />
            <img className={styles.main_right} src={main_right} />
            <div className="container">
                <div className={styles.main_inner}>
                    <div className={styles.main_content}>
                        <h1 className="main_title">
                            Get more out
                            of your Plastic
                            <br />
                            Live on{' '}
                            <span>
                                <Typewriter
                                    options={{
                                        autoStart: true,
                                        loop: true,
                                    }}
                                    onInit={(typewriter) => {
                                        typewriter
                                            .pauseFor(500)
                                            .typeString("Crypto")
                                            .pauseFor(2000)
                                            .deleteAll()
                                            .pauseFor(500)
                                            .typeString("Bitcoin")
                                            .pauseFor(2000)
                                            .deleteAll()
                                            .pauseFor(500)
                                            .typeString("Ether")
                                            .pauseFor(2000)
                                            .deleteAll()
                                            .pauseFor(500)
                                            .typeString("Litecoin")
                                            .pauseFor(2000)
                                            .deleteAll()
                                            .pauseFor(500)
                                            .typeString("XRP")
                                            .pauseFor(2000)
                                            .deleteAll()
                                            .pauseFor(500)
                                            .typeString("Monero")
                                            .pauseFor(2000)
                                            .start();
                                    }}
                                />
                            </span>
                        </h1>
                        <p className="text">
                            Plastic and virtual cards in a selections of currencies.
                            Instantly reload your card with no conversion feet.
                            <br />
                            Order your card now to get started.
                        </p>
                        <div className={styles.main_btns}>
                            <a href="#" className={`btn active ${styles.main_btns_btn}`}>Order card now</a>
                            <a href="#" className={`btn ${styles.main_btns_btn}`}>Learn more</a>
                        </div>
                    </div>
                    <div className={styles.main_img}>
                        <img className={styles.coin_1} style={{ left: `${- offsetY * 0.04}px`, top: `${- offsetY * 0.05}px` }} src={coin_1} alt="coin" />
                        <img className={styles.coin_2} style={{ right: `${60 - offsetY * 0.2}px`, top: `${40 - offsetY * 0.03}px` }} src={coin_2} alt="coin" />
                        <img className={styles.coin_3} style={{ right: `${-40 - offsetY * 0.04}px`, bottom: `${50 - offsetY * 0.1}px` }} src={coin_3} alt="coin" />
                        <img className={styles.coin_4} style={{ left: `${120 - offsetY * 0.06}px`, bottom: `${-30 - offsetY * 0.05}px` }} src={coin_4} alt="coin" />
                        <img className={styles.coin_5} style={{ left: `${- offsetY * 0.02}px`, bottom: `${70 - offsetY * 0.03}px` }} src={coin_5} alt="coin" />

                        <img className={styles.main_image} src={cards} alt="cards" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export { Main };