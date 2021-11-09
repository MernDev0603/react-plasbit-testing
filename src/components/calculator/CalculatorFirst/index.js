
import React, {useRef, useEffect, useState} from 'react'
import axios from "axios";

import './First.css'
import { getImg, useResize } from '../../../hook/useCustomHook'


const setInputFilter = (textbox, inputFilter) => {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function (event) {
        textbox.addEventListener(event, function () {
            if (inputFilter(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            } else {
                this.value = "";
            }
        });
    });
}

export const CalculatorFirst = () => {

    const { isMobile } = useResize();
    const inputBtc = useRef(null);
    const [btcPrice, setBtcPrice] = useState(0);
    const [timePrice, setTimePrice] = useState(0);
    const [currency, setCurrency] = useState('usd');
    const baseURL = `https://api.coingecko.com/api/v3/coins/bitcoin`;

    useEffect(() => {
        setInputFilter(inputBtc.current, function (value) {
            return /^-?\d*[.,]?\d*$/.test(value);
        });
    })

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setTimePrice(response.data.market_data);
        });
        handleBtcAmount();
    });

    const handleCurrency = (e) => {
        setCurrency(e.target.value);
    }

    const handleBtcAmount = () => {
        const amount = inputBtc.current.value;
        console.log('currency_variable', currency);
        console.log('currency', timePrice?.current_price?.currency)
        console.log('usd', timePrice?.current_price?.ngn)
        setBtcPrice(parseFloat(amount * timePrice?.current_price?.currency).toFixed(2));
    }

    return (
        <section className="calculator_first" style={{ backgroundImage: `url(${getImg('calculator/first_bg.png')})` }}>
            <div className="calculator_container">
                <div className="main_title text_white">
                    Bitcoin <span>Calculator</span>
                </div>
                <div className="text text_white">
                    Use PlasBit's Bitcoin calculator to find out exactly how much your Bitcoin is worth in any of the {!isMobile && <br/>}
                    supported global currencies, using accurate, up-to-date exchange rates. Get real-time and {!isMobile && <br />}
                    historical trends in the BTC value for your selected currency.
                </div>
               <div className="card">
                   <div className="bitcoin">
                        <div className="text label text_blue">
                            Amount in bitcoin
                        </div>
                        <div className="input">
                            <input type="text" defaultValue="1" ref={inputBtc} onChange={handleBtcAmount}/>
                            <div className="text suffix">BTC</div>
                            {isMobile && <div className="text_white">=</div>}
                        </div>
                   </div>
                   {!isMobile && <div className="text_white">=</div> }
                   <div className="currency">
                        <div className="text label text_blue">
                            Amount in selected currency
                        </div>
                        <div className="input">
                            <input type="text" value={btcPrice} disabled/>
                            <select className="text suffix" onChange={handleCurrency}>
                                <option value="usd">USD</option>
                                <option value="eur">EUR</option>
                                <option value="gbp">GBP</option>
                                <option value="ngn">NGN</option>
                                <option value="cny">CNY</option>
                                <option value="jpy">JPY</option>
                            </select>
                        </div>
                        <div className="text bottom">
                            <span className={ (currency == "usd") ? "active" : ""}>USD</span>
                            <span className={ (currency == "eur") ? "active" : ""}>EUR</span>
                            <span className={ (currency == "gbp") ? "active" : ""}>GBP</span>
                            <span className={ (currency == "ngn") ? "active" : ""}>NGN</span>
                            <span className={ (currency == "cny") ? "active" : ""}>CNY</span>
                            <span className={ (currency == "jpy") ? "active" : ""}>JPY</span>
                        </div>
                   </div>
               </div>
            </div>
        </section>
    )
}