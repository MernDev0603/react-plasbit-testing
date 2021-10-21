import { useResize } from 'hook/useCustomHook'

import logo from 'assets/img/logo-footer.svg'
import social_1 from 'assets/img/social-1.svg'
import social_2 from 'assets/img/social-2.svg'
import social_3 from 'assets/img/social-3.svg'
import { AccordionFooter } from 'components/AccordionFooter'
import './Footer.css'

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
    },
    {
        'title': 'Security',
        'subMenus': [
            { 'title': 'Our Security', 'icon': 'about.svg' },
            { 'title': 'Certifications & Assessments', 'icon': 'careers.svg' }
        ]
    },
    {
        'title': 'Starter guide',
        'subMenus': [
            { 'title': 'Cryptocurrency Basics', 'icon': 'about.svg' },
            { 'title': 'Advanced Cryptocurrency', 'icon': 'careers.svg' },
            { 'title': 'FAQ', 'icon': 'privacy.svg' }
        ]
    }
]

function Footer() {

    const { isMobile } = useResize()
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer_top">
                    <a href="/">
                        <img src={logo} alt="logo" />
                    </a>
                    <div className="footer_social">
                        <a href="/">
                            <img src={social_1} alt="telegram" />
                        </a>
                        <a href="/">
                            <img src={social_2} alt="linkedin" />
                        </a>
                        <a href="/">
                            <img src={social_3} alt="twitter" />
                        </a>
                    </div>
                </div>
                <div className="footer_content">
                    {!isMobile && menus.map((menu, index) => (
                        <div className="footer_item" key={index}>
                            <h3 className="footer_title">
                                {menu.title}
                            </h3>
                            <nav>
                                <ul>
                                    {menu.subMenus.map((subMenu, index) => (
                                        <li key={index}>
                                            <a href="/">
                                                {subMenu.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    ))}
                    {isMobile && menus.map((menu, index) => (
                        <AccordionFooter menu={menu} key={index} />
                    ))}
                </div>
                <div className="policy">
                    PlasBit Payments Europe AG is authorised by the Financial Market Authority of Liechtenstein under the Electronic Money Act 2011, Firm Reference 252199, for the issuing of electronic money.
                    <br />
                    Terms & Conditions ( <a href="/">EU</a> | <a href="/">Non-EU</a> ) | Privacy Policy ( <a href="/">EU</a> | <a href="/">Non-EU</a> )
                    <br />
                    @copyright 2020 -2022 Plasbit LTD - All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}

export { Footer };