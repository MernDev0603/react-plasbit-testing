import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import { Dropdown } from '../Dropdown'
import logo from 'assets/img/logo.svg'
import logoWhite from 'assets/img/logo-card.svg'
import lang from 'assets/img/lang.svg'
import { useResize } from 'hook/useCustomHook'
import { Accordion } from 'components/Accordion'
import './Header.css'
const menus = [
    {
        'title': 'Service',
        'subMenus': [
            { 'title': 'Card', 'icon': 'card.svg', 'link': '/card' },
            { 'title': 'Wallet', 'icon': 'wallet.svg', 'link': '/wallet' },
            { 'title': 'Calculator', 'icon': 'calculator.svg', 'link': '/card' }
        ]
    },
    {
        'title': 'Company',
        'subMenus': [
            { 'title': 'About', 'icon': 'about.svg', 'link': '/card' },
            { 'title': 'Careers', 'icon': 'careers.svg', 'link': '/card' },
            { 'title': 'Privacy', 'icon': 'privacy.svg', 'link': '/card' },
            { 'title': 'Cardholder Agreement', 'icon': 'cardholder_agreement.svg', 'link': '/card' },
            { 'title': 'Legal', 'icon': 'legal.svg', 'link': '/card' },
            { 'title': 'Contact Us', 'icon': 'contact_us.svg', 'link': '/contactus' },
        ]
    }
]

function Header() {
    const pathName = window.location.pathname;
    const [isActive, setActive] = useState(false);
    const [burger, setburger] = useState(false);
    const [logoImg, setLogoImg] = useState(logo);
    const [color, setColor] = useState('white');
    const [menuColor, setMenuColor] = useState('white');
    const [isDark, setIsDark] = useState(true)
    const { isResponsive, isMobile } = useResize();

    useEffect(() => {
        switch (pathName) {
            case '/card':
                setLogoImg(logoWhite)
                setColor('white')
                setMenuColor('white')
                setIsDark(false)
                break;
            case '/wallet':
                setLogoImg(logo)
                setColor('#283957')
                setMenuColor('#283957')
                setIsDark(true)
                break;
            case '/contactus':
                setLogoImg(logoWhite)
                setColor('white')
                setMenuColor('white')
                setIsDark(false)
                break;
            default:
                setLogoImg(logo)
                setColor('#283957')
                setMenuColor('white')
                setIsDark(true)
                break;
        }
    })

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
                    <Link to="/" className="logo">
                        <img src={logoImg} alt="logo" />
                    </Link>
                    <div className="lang" style={{ color: color }}>
                        <li onClick={toggleClass}>
                            <img src={lang} alt="" />
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
                    <div className="btc" style={{ color: color }}>
                        <span>btc/usd — 45 514.00 $</span>
                        {/* <select>
                            <option>btc/usd — 45 514.00 $</option>
                            <option>btc/usd — 45 514.00 $</option>
                            <option>btc/usd — 45 514.00 $</option>
                        </select> */}
                    </div>
                    <nav className={burger ? "nav_active" : "nav"}>
                        {isMobile && <img onClick={toggleBurger} alt="" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZD0iTTE0LjcgMS4zYy0uNC0uNC0xLS40LTEuNCAwTDggNi42IDIuNyAxLjNjLS40LS40LTEtLjQtMS40IDBzLS40IDEgMCAxLjRMNi42IDhsLTUuMyA1LjNjLS40LjQtLjQgMSAwIDEuNC4yLjIuNC4zLjcuM3MuNS0uMS43LS4zTDggOS40bDUuMyA1LjNjLjIuMi41LjMuNy4zcy41LS4xLjctLjNjLjQtLjQuNC0xIDAtMS40TDkuNCA4bDUuMy01LjNjLjQtLjQuNC0xIDAtMS40eiIgZmlsbD0iIzU2NWQ2ZCIvPjwvc3ZnPg==" />}
                        {!isResponsive && menus.map((menu, index) => (
                            <Dropdown menu={menu} key={index} color={menuColor} />
                        ))}
                        {isResponsive && menus.map((menu, index) => (
                            <Accordion menu={menu} key={index} />
                        ))}
                        <ul className="header_menu">
                            <li>
                                <Link to="/card" style={{ color: menuColor }}>Login</Link>
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
                        <Link to="/card" className={`btn active $"header_btn"`}>Get Started</Link>
                    </nav>
                    <span className="nav_toggle" onClick={toggleBurger}>
                        <span className={`nav_toggle-item ${isDark ? 'dark' : ''}`}></span>
                    </span>
                </div>
            </div>
        </header>
    );
}

export { Header };