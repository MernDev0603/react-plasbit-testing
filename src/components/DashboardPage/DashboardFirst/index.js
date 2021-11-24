import React from 'react'

import { getImg } from '../../../hook/useCustomHook'
import { Card } from '../Card'
import './First.css'

const coins = [
    { coinName: 'Bitcoin Cash', icon: 'slide-1.svg', price: 51003.83, percent: '+2,06' },
    { coinName: 'Ethereum', icon: 'slide-2.svg', price: 4613.44, percent: '-2,06' },
]

export const DashboardFirst = () => {
    return (
        <div className="dashboard_first">
            <div className="left mb_30">
                <div className="font_30 font_bold">Dashboard</div>
                <div className="font_18 font_600">An overview of your portfolio and the crypto markets.</div>
                <div className="banner" style={{ backgroundImage: `url(${getImg('dashboard/dashboard/banner.png')})` }}>
                    {/* <img src={getImg('dashboard/banner.png')} alt="banner" /> */}
                    <div className="font_40 white">
                        Get more control over<br />
                        your Crypto Wallet &<br />
                        exchange cryptocurrencies
                    </div>
                    <button className="btn light_blue">Explore More</button>
                </div>
            </div>
            <div className="right">
                {coins.map((obj) => (
                    <Card
                        key={obj.coinName}
                        icon={obj.icon}
                        coinName={obj.coinName}
                        price={obj.price}
                        percent={obj.percent}
                    />
                ))}
            </div>
        </div>
    )
}