import React, { useRef } from "react";
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
                    <a>{props.menu.title}</a>
                </li>
                <nav
                    ref={dropdownRef}
                    className={`menu ${isActive ? "active" : "inactive"}`}
                >
                    <ul>
                        {props.menu.subMenus.map((subMenu, index) => (
                            <li key={index}>
                                <a href="#">
                                    <img src={getIcon(subMenu.icon)} />
                                    <span>{subMenu.title}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export { Dropdown }