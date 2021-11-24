import React from 'react';

import { getImg } from '../../../hook/useCustomHook';
import './Second.css';
import { PieChart } from '../PieChart';

const coins = [
    { coinName: 'Bitcoin', icon: 'slide-1.svg', amount: "0.1123 BTC", price: 6032.83, percent: 20 },
    { coinName: 'Ethereum', icon: 'slide-2.svg', amount: "2.2124 ETH", price: 8613.44, percent: 30 },
    { coinName: 'Litecoin', icon: 'slide-1.svg', amount: "50.2300 LTC", price: 100.83, percent: 25 },
    { coinName: 'Cardano', icon: 'slide-2.svg', amount: "1000.6732 ADA", price: 230.44, percent: 15 },
    { coinName: 'USDC', icon: 'slide-1.svg', amount: "1000.0000 USDC", price: 1000.00, percent: 10 }
]

export const DashboardSecond = () => {
    return (
        <div className="dashboard_second mt_20">
            <div className="wallet">
                <div className="font_25 font_bold light_blue mb_20">My Card</div>
                {coins.map((coin, index) => (
                    <div className="row" key={index}>
                        <div className="coin">
                            <img src={getImg(coin.icon)} alt="icon" />
                            <div className="font_20 font_600 ml_10">{coin.coinName}</div>
                        </div>
                        <div className="font_15 font_bold">{coin.amount}</div>
                        <div className="font_20 font_bold">${coin.price}</div>
                    </div>
                ))}
            </div>
            <div className="chart">
                <div className="font_25 font_bold light_blue mb_20">Asset Allocation</div>
                <div className="pie_chart mt_50">
                    <PieChart coins={coins} />
                </div>
            </div>
        </div>
    )
}