import React, { useState, useRef } from 'react'

export const Card = (props) => {
    const [active, setActive] = useState("");
    const [height, setHeight] = useState("0px");

    const content = useRef(null);

    function toggleAccordion() {
        setActive(active === "" ? "active" : "");
        setHeight(
            active === "active" ? "0px" : `${content.current.scrollHeight}px`
        );
    }

    return (
        <div className="card_container">
            <img src={require(`assets/img/card/${props.card.img}`).default} alt="" />
            <div className="right_container">
                <div className="card_title text_white">{props.card.title}</div>
                <div className="detail_container">
                    <div className="details">
                        <div className="detail text_white">
                            {(props.isLimit == "limit") &&
                                <>
                                    <span>Daily ATM withdrawal </span>
                                    <span>{props.card.withdrawal} <span>per withdrawal</span></span>
                                </>
                            }
                            {(props.isLimit == "fee") &&
                                <>
                                    <span> Card Load from Plasbit Wallet</span>
                                    <span>{props.card.withdrawal1} <span>%</span></span>
                                </>
                            }
                        </div>
                        <div className="detail text_white">
                            {(props.isLimit == "limit") &&
                                <>
                                    <span>Card daily Load Limit</span>
                                    <span>{props.card.load} <span>per day</span></span>
                                </>
                            }
                            {(props.isLimit == "fee") &&
                                <>
                                    <span> Currency exchange</span>
                                    <span>{props.card.load1} <span>%</span></span>
                                </>
                            }
                        </div>
                        <div className="detail text_white">
                            {(props.isLimit == "limit") &&
                                <>
                                    <span>POS purchases per day LImit</span>
                                    <span>{props.card.spending} <span>per day</span></span>
                                </>
                            }
                            {(props.isLimit == "fee") &&
                                <>
                                    <span> Card monthly fee</span>
                                    <span>{props.card.spending1} <span>$</span></span>
                                </>
                            }
                        </div>
                        <div className="detail_content" ref={content} style={{ maxHeight: `${height}` }}>
                            {(props.isLimit == "limit") &&
                                <>
                                    <div className="detail">
                                        <span>Daily ATM withdrawal </span>
                                        <span>{props.card.withdrawal} <span>per withdrawal</span></span>
                                    </div>
                                    <div className="detail">
                                        <span>Daily ATM withdrawal </span>
                                        <span>{props.card.withdrawal} <span>per withdrawal</span></span>
                                    </div>
                                    <div className="detail">
                                        <span>Daily ATM withdrawal </span>
                                        <span>{props.card.withdrawal} <span>per withdrawal</span></span>
                                    </div>
                                    <div className="detail">
                                        <span>Daily ATM withdrawal </span>
                                        <span>{props.card.withdrawal} <span>per withdrawal</span></span>
                                    </div>
                                    <div className="detail">
                                        <span>Daily ATM withdrawal </span>
                                        <span>{props.card.withdrawal} <span>per withdrawal</span></span>
                                    </div>
                                    <div className="detail">
                                        <span>Daily ATM withdrawal </span>
                                        <span>{props.card.withdrawal} <span>per withdrawal</span></span>
                                    </div>
                                    <div className="detail">
                                        <span>Daily ATM withdrawal </span>
                                        <span>{props.card.withdrawal} <span>per withdrawal</span></span>
                                    </div>
                                    <div className="detail">
                                        <span>Daily ATM withdrawal </span>
                                        <span>{props.card.withdrawal} <span>per withdrawal</span></span>
                                    </div>
                                </>
                            }
                            {(props.isLimit == "fee") &&
                                <>
                                    <div className="detail">
                                        <span> Card Load from Plasbit Wallet</span>
                                        <span>{props.card.withdrawal1} <span>%</span></span>
                                    </div>
                                    <div className="detail">
                                        <span> Card Load from Plasbit Wallet</span>
                                        <span>{props.card.withdrawal1} <span>%</span></span>
                                    </div>
                                    <div className="detail">
                                        <span> Card Load from Plasbit Wallet</span>
                                        <span>{props.card.withdrawal1} <span>%</span></span>
                                    </div>
                                    <div className="detail">
                                        <span> Card Load from Plasbit Wallet</span>
                                        <span>{props.card.withdrawal1} <span>%</span></span>
                                    </div>
                                    <div className="detail">
                                        <span> Card Load from Plasbit Wallet</span>
                                        <span>{props.card.withdrawal1} <span>%</span></span>
                                    </div>
                                    <div className="detail">
                                        <span> Card Load from Plasbit Wallet</span>
                                        <span>{props.card.withdrawal1} <span>%</span></span>
                                    </div>
                                    <div className="detail">
                                        <span> Card Load from Plasbit Wallet</span>
                                        <span>{props.card.withdrawal1} <span>%</span></span>
                                    </div>
                                    <div className="detail">
                                        <span> Card Load from Plasbit Wallet</span>
                                        <span>{props.card.withdrawal1} <span>%</span></span>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                    <div className="actions">
                        <button className="btn text_white" onClick={toggleAccordion}>Details</button>
                        <a href="signup" className="btn text_white active">Order Now</a>
                    </div>
                </div>
            </div>
        </div>
    )
}