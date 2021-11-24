import React from 'react'

import { getImg } from '../../../hook/useCustomHook'
import './Third.css'

export const DashboardThird = () => {
    return (
        <div className="dashboard_third">
            <div className="card">
                <div className="font_25 font_bold light_blue mb_20">My Card</div>
                <img src={getImg('dashboard/dashboard/card.png')} />
            </div>
            <div className="details ml_10">
                <div className="font_25 font_bold light_blue mb_20">Card Details</div>
                <div className="box">
                    <div>
                        <img src={getImg('dashboard/dashboard/card_details.png')} />
                        <div className="font_30 font_600 mt_20">$10,000</div>
                        <div className="font_20 font_600 light_blue mt_10">Current Card Balance</div>
                    </div>
                </div>
                <button className="btn active mt_20">View Card Details</button>
            </div>
            <div className="description ml_10">
                <div className="box">
                    <img src={getImg('dashboard/dashboard/card_currency.png')} />
                    <div className="ml_10">
                        <div className="font_18 font_600">Card Currency</div>
                        <div className="font_30 font_600">USD</div>
                    </div>
                </div>
                <div className="box">
                    <img src={getImg('dashboard/dashboard/card_limit.png')} />
                    <div className="ml_10">
                        <div className="font_18 font_600">Card Load Limit</div>
                        <div className="font_30 font_600">$5,000</div>
                    </div>
                </div>
                <div className="box">
                    <img src={getImg('dashboard/dashboard/monthly_mantinace.png')} />
                    <div className="ml_10">
                        <div className="font_18 font_600">Monthly Mantinance</div>
                        <div className="font_30 font_600">$10</div>
                    </div>
                </div>
                <div className="box">
                    <img src={getImg('dashboard/dashboard/card_type.png')} />
                    <div className="ml_10">
                        <div className="font_18 font_600">Card Type</div>
                        <div className="font_30 font_600">Virtual</div>
                    </div>
                </div>
                <div className="box">
                    <img src={getImg('dashboard/dashboard/valid_till.png')} />
                    <div className="ml_10">
                        <div className="font_18 font_600">Valid Till</div>
                        <div className="font_30 font_600">01/11</div>
                    </div>
                </div>
            </div>
        </div>
    )
}