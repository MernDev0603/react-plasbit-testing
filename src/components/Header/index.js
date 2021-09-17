import React, { useState, useEffect } from 'react';

import { Dropdown } from '../Dropdown'
import styles from './Header.module.scss'
import logo from 'assets/img/logo.png'
import lang from 'assets/img/lang.svg'

const menus = [
    {
        'title': 'Service',
        'subMenus': [
            { 'title': 'Card' },
            { 'title': 'Wallet' },
            { 'title': 'Calculator' }
        ]
    },
    {
        'title': 'Company',
        'subMenus': [
            { 'title': 'About' },
            { 'title': 'Careers' },
            { 'title': 'Privacy' },
            { 'title': 'Cardholder Agreement' },
            { 'title': 'Legal' },
            { 'title': 'Contact Us' },
        ]
    }
]

function Header() {
    const [isActive, setActive] = useState(false);
    const [burger, setburger] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };
    const toggleBurger = () => {
        setburger(!burger);
    };
    return (
        <header className={styles.header}>
            <div className={burger ? styles.shadow_active : styles.shadow} onClick={toggleBurger}></div>
            <div className="container-fluid">
                <div className={styles.header_inner}>
                    <a href="#" className={styles.logo}>
                        <img src={logo} alt="logo" />
                    </a>
                    <div className={styles.lang}>
                        <li onClick={toggleClass}>
                            <img src={lang}></img>
                            EN
                        </li>
                        <ul className={isActive ? styles.lang_toggle_active : styles.lang_toggle}>
                            <li>
                                <img src={lang}></img>
                                FR
                            </li>
                            <li>
                                <img src={lang}></img>
                                RU
                            </li>
                        </ul>
                    </div>
                    <div className={styles.btc}>
                        <select>
                            <option>btc/usd — 45 514.00 $</option>
                            <option>btc/usd — 45 514.00 $</option>
                            <option>btc/usd — 45 514.00 $</option>
                        </select>
                    </div>
                    <nav className={burger ? styles.nav_active : styles.nav}>
                        {menus.map((menu, index) => (
                            <Dropdown menu={menu} key={index} />
                        ))}
                        <ul>
                            <li>
                                <a href="#">Login</a>
                            </li>
                        </ul>
                        <div className={styles.lang_mob}>
                            <li onClick={toggleClass}>
                                <img src={lang} alt="language" />
                                EN
                            </li>
                            <ul className={isActive ? styles.lang_toggle_active : styles.lang_toggle}>
                                <li>
                                    <img src={lang}></img>
                                    FR
                                </li>
                                <li>
                                    <img src={lang}></img>
                                    RU
                                </li>
                            </ul>
                        </div>
                        <div className={styles.btc_mob}>
                            <select>
                                <option>btc/usd — 45 514.00 $</option>
                                <option>btc/usd — 45 514.00 $</option>
                                <option>btc/usd — 45 514.00 $</option>
                            </select>
                        </div>
                        <a href="#" className={`btn active ${styles.header_btn}`}>Get Started</a>
                    </nav>
                    <span className="nav_toggle" onClick={toggleBurger}>
                        <span className="nav_toggle-item"></span>
                    </span>
                </div>
            </div>
        </header>
    );
}

export { Header };