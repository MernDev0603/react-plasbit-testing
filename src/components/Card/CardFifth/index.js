import React from 'react'

import './Fifth.css'

const getImg = (img) => {
    return require(`assets/img/card/${img}`).default
}

export const CardFifth = () => {
    return (
        <section className="card_fifth" style={{ backgroundImage: `url(${getImg('fifth-bg.png')})` }}>
            <div className="card_container">
                <div className="left_content">
                    <div className="card_title">
                        Order your virtual or <br />
                        plastic card right now
                    </div>
                    <a href="/card" className="btn bg_white text_blue">Order Now</a>
                </div>
                <img className="mobile_none" src={getImg('hand.png')} alt="" />
            </div>
        </section>
    )
}