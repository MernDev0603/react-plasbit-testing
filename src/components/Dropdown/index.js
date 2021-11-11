import React, { useRef } from "react";
import { Link } from 'react-router-dom';

import "./dropdown.css";
import { useDetectOutsideClick } from "../../hook/useCustomHook";

function getIcon(icon) {
    return require('assets/img/' + icon).default
}

function Dropdown(props) {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    return (
        <div>
            <div className="menu-container">
                <li onClick={() => setIsActive(!isActive)} className="menu-trigger">
                    <a href="#" style={{ color: props.color }}>{props.menu.title}<span> &#9660;</span></a>
                </li>
                <nav
                    ref={dropdownRef}
                    className={`menu ${isActive ? "active" : "inactive"}`}
                >
                    <ul>
                        {props.menu.subMenus.map((subMenu, index) => (
                            <li key={index}>
                                <Link to={subMenu.link}>
                                    <img src={getIcon(subMenu.icon)} alt="" />
                                    <span>{subMenu.title}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export { Dropdown }