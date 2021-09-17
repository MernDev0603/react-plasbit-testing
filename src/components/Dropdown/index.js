import React, { useRef } from "react";
import "./dropdown.css";
import { useDetectOutsideClick } from "../../hook/useDetectOutsideClick";

function Dropdown(props) {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    return (
        <div className="container">
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
                                <a href="#">{subMenu.title}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export { Dropdown }