import styles from './Trend.module.scss'

import xrpImg1 from 'assets/img/slide-1.svg' 
import xrpImg2 from 'assets/img/slide-2.svg' 
import xrpImg3 from 'assets/img/slide-3.svg' 
import xrpImg4 from 'assets/img/slide-4.svg' 
import xrpImg5 from 'assets/img/slide-5.svg' 
import xrpImg6 from 'assets/img/slide-6.svg' 
import xrpGraph1 from 'assets/img/graph-1.png' 
import xrpGraph2 from 'assets/img/graph-2.png' 
import xrpGraph3 from 'assets/img/graph-1.png' 
import xrpGraph4 from 'assets/img/graph-2.png' 
import xrpGraph5 from 'assets/img/graph-1.png' 
import xrpGraph6 from 'assets/img/graph-2.png' 


const getImgByCurrencyName = (name) =>{
    switch(name){
        case 'Neo': {
            return xrpImg1;
        }
        case 'Bitcoin': {
            return xrpImg2;
        }
        case 'Ether': {
            return xrpImg3;
        }
        case 'Litecoin': {
            return xrpImg4;
        }
        case 'XRP': {
            return xrpImg5;
        }
        case 'Monero': {
            return xrpImg6;
        }
    }
}

const getGraphByCurrencyName = (graph) =>{
    switch(graph){
        case 'Neo': {
            return xrpGraph1;
        }
        case 'Bitcoin': {
            return xrpGraph2;
        }
        case 'Ether': {
            return xrpGraph3;
        }
        case 'Litecoin': {
            return xrpGraph4;
        }
        case 'XRP': {
            return xrpGraph5;
        }
        case 'Monero': {
            return xrpGraph6;
        }
    }
}

function Trend({coinName, date, price, precent, volume}) {
	return (
        <div className={styles.item}>
            <div className={styles.item_top}>
                <img src={getImgByCurrencyName(coinName)} alt="coin"/>
                <div className={styles.item_top_inner}>
                    <span>{coinName}</span>
                    <p>{date}</p>
                </div>
            </div>
            <div className={styles.item_img}>
                <img src={getGraphByCurrencyName(coinName)} alt="graphic"/>
            </div>
            <div className={styles.info}>
                <p className={styles.price}>${price}</p>
                <span>{precent}%</span>
            </div>
            <button className={`btn ${styles.slider_btn}`}>Buy</button>
            <span className={styles.volume}>24h volume: {volume}</span>
        </div>
    );
}

export {Trend};