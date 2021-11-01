import React, { useState } from 'react'

import { useResize } from '../../../hook/useCustomHook'
import { Card } from './Card'
import { CardMobile } from './CardMobile'
import './Third.css'

const cards = [
    { img: 'card-grey.png', title: 'PlasBit Anonymous', withdrawal: '$2,000', withdrawal1: '5', load: '$10,000', load1: '2.95', spending: '$10,000', spending1: '9.90' },
    { img: 'card-blue.png', title: 'PlasBit Anonymous', withdrawal: '$2,000', withdrawal1: '5', load: '$10,000', load1: '2.95', spending: '$10,000', spending1: '9.90' },
    { img: 'card-black.png', title: 'PlasBit Anonymous', withdrawal: '$2,000', withdrawal1: '5', load: '$10,000', load1: '2.95', spending: '$10,000', spending1: '9.90' },
]

const getImg = (img) => {
    return require(`assets/img/card/${img}`).default
}

export const CardThird = () => {

    const { isMobile } = useResize();
    const [isLimit, setIsLimit] = useState("limit")

    return (
        <section>
            <div className="card_third">
                <div className="title text_center" id="third">
                    <span> Choose the card</span>
                    <div> aligned to your lifestyle </div>
                </div>
                <div className="btn_toggle">
                    <div className={`button text_center ${isLimit === "limit" ? "active" : ""}`} onClick={() => setIsLimit('limit')}>LIMIT</div>
                    <div className={`button text_center ${isLimit === "fee" ? "active" : ""}`} onClick={() => setIsLimit('fee')}>FEES</div>
                </div>
                {!isMobile &&
                    cards.map((card, index) => (
                        <Card card={card} key={index} isLimit={isLimit} />
                    ))
                }
                {isMobile &&
                    <CardMobile cards={cards} isLimit={isLimit} />}
                <div className="policy_container text_center mobile_none">
                    <div className="policy_title text_blue">
                        <span>Cardolder Agreement</span><span>Privacy Policy</span>
                    </div>
                    <div className="plicy_content">
                        Et platonem vituperata vim, sint nulla antiopam vis ut, cu ubiqe ancillae splendide nam. Ludus albucius hendrerit est eu, eam id vivendo resusabo platonem. Elitr utroque nominavi <br />
                        an sea, ad per movet aliquip debitis, postea possim causae per eu. Duis exerci accusamus an quo. Ne mea mucius virtute similique. Novum vivendo gloriatur eu qui, te nam sonet<br />
                        vocent suscipit, te vix illum sadipscing repudiandae.
                    </div>
                </div>
                <div className="step_container">
                    <div className="step">
                        <img src={getImg('step-1.png')} alt="" />
                        <p className="text">Create an Account</p>
                    </div>
                    <div className="dot">
                        <img src={getImg('dot.png')} alt="" />
                    </div>
                    <div className="step">
                        <img src={getImg('step-2.png')} alt="" />
                        <p className="text">Load the Wallet</p>
                    </div>
                    <div className="dot">
                        <img src={getImg('dot.png')} alt="" />
                    </div>
                    <div className="step">
                        <img src={getImg('step-3.png')} alt="" />
                        <p className="text">Order the Card</p>
                    </div>
                </div>
            </div>

        </section>
    )
}