import React, { useState, useRef } from "react";
import { Chevron } from "./Chevron";


export const Accordion = (props) => {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("accordion__icon");

    const content = useRef(null);

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(
            setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
        );
        setRotateState(
            setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
        );
    }

    return (
        <div className="accordion_container">
            <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
                <p className="accordion_title">{props.faq.title}</p>
                <Chevron className={`${setRotate}`} width={10} fill={"#fff"} />
            </button>
            <div
                ref={content}
                style={{ maxHeight: `${setHeight}` }}
                className="accordion_content text_white"
            >
                <div className="accordion__text">
                    <div>{props.faq.content}</div>
                </div>
            </div>
        </div>
    );
}
