import React, { useState } from 'react';

import { Dropdown } from '../Dropdown'
import logo from 'assets/img/logo.svg'
import lang from 'assets/img/lang.svg'
import { useResize } from 'hook/useCustomHook'
import { Accordion } from 'components/Accordion'
import './Header.css'
const menus = [
    {
        'title': 'Service',
        'subMenus': [
            { 'title': 'Card', 'icon': 'card.svg' },
            { 'title': 'Wallet', 'icon': 'wallet.svg' },
            { 'title': 'Calculator', 'icon': 'calculator.svg' }
        ]
    },
    {
        'title': 'Company',
        'subMenus': [
            { 'title': 'About', 'icon': 'about.svg' },
            { 'title': 'Careers', 'icon': 'careers.svg' },
            { 'title': 'Privacy', 'icon': 'privacy.svg' },
            { 'title': 'Cardholder Agreement', 'icon': 'cardholder_agreement.svg' },
            { 'title': 'Legal', 'icon': 'legal.svg' },
            { 'title': 'Contact Us', 'icon': 'contact_us.svg' },
        ]
    }
]


function Header() {
    const [isActive, setActive] = useState(false);
    const [burger, setburger] = useState(false);
    const { isResponsive, isMobile } = useResize()

    const toggleClass = () => {
        setActive(!isActive);
    };
    const toggleBurger = () => {
        setburger(!burger);
    };
    return (
        <header className="header">
            <div className={burger ? "shadow_active" : "shadow"} onClick={toggleBurger}></div>
            <div className="container-fluid">
                <div className="header_inner">
                    <a href="#" className="logo">
                        <img src={logo} alt="logo" />
                    </a>
                    <div className="lang">
                        <li onClick={toggleClass}>
                            <img src={lang}></img>
                            EN
                        </li>
                        {/* <ul className={isActive ? "lang_toggle_active" : "lang_toggle"}>
                            <li>
                                <img src={lang}></img>
                                FR
                            </li>
                            <li>
                                <img src={lang}></img>
                                RU
                            </li>
                        </ul> */}
                    </div>
                    <div className="btc">
                        <span>btc/usd — 45 514.00 $</span>
                        {/* <select>
                            <option>btc/usd — 45 514.00 $</option>
                            <option>btc/usd — 45 514.00 $</option>
                            <option>btc/usd — 45 514.00 $</option>
                        </select> */}
                    </div>
                    <nav className={burger ? "nav_active" : "nav"}>
                        {isMobile && <img onClick={toggleBurger} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZD0iTTE0LjcgMS4zYy0uNC0uNC0xLS40LTEuNCAwTDggNi42IDIuNyAxLjNjLS40LS40LTEtLjQtMS40IDBzLS40IDEgMCAxLjRMNi42IDhsLTUuMyA1LjNjLS40LjQtLjQgMSAwIDEuNC4yLjIuNC4zLjcuM3MuNS0uMS43LS4zTDggOS40bDUuMyA1LjNjLjIuMi41LjMuNy4zcy41LS4xLjctLjNjLjQtLjQuNC0xIDAtMS40TDkuNCA4bDUuMy01LjNjLjQtLjQuNC0xIDAtMS40eiIgZmlsbD0iIzU2NWQ2ZCIvPjwvc3ZnPg==" />}
                        {!isResponsive && menus.map((menu, index) => (
                            <Dropdown menu={menu} key={index} />
                        ))}
                        {isResponsive && menus.map((menu, index) => (
                            <Accordion menu={menu} key={index} />
                        ))}
                        <ul className="header_menu">
                            <li>
                                <a href="#">Login</a>
                            </li>
                        </ul>
                        {/* <div className="lang_mob">
                            <li onClick={toggleClass}>
                                <img src={lang} alt="language" />
                                EN
                            </li>
                            <ul className={isActive ? "lang_toggle_active" : "lang_toggle"}>
                                <li>
                                    <img src={lang}></img>
                                    FR
                                </li>
                                <li>
                                    <img src={lang}></img>
                                    RU
                                </li>
                            </ul>
                        </div> */}
                        {/* <div className="btc_mob">
                            <select>
                                <option>btc/usd — 45 514.00 $</option>
                                <option>btc/usd — 45 514.00 $</option>
                                <option>btc/usd — 45 514.00 $</option>
                            </select>
                        </div> */}
                        <a href="#" className={`btn active $"header_btn"`}>Get Started</a>
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