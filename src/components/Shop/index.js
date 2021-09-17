import styles from './Shop.module.scss'
import shop from 'assets/img/shop.png' 
import check from 'assets/img/check.svg' 
function Shop() {
	return (
        <section className={styles.shop}>
            <div className="container">
                <div className={styles.shop_inner}>
                    <div className={styles.shop_img}>
                        <img src={shop} alt="woman"/>
                    </div>
                    <div className={styles.shop_content}>
                        <h2 className="title">
                            <span>Shop with PlasBit </span>
                            online & in-person around the word
                        </h2>
                        <p className="text">
                            <li>
                                <img src={check} alt="check"/>
                                Designed for people who want to live life on crypto. View your balance , request a new PIN, and reload instantly.
                            </li>
                            <li>
                                <img src={check} alt="check"/>
                                Turn your crypto into dollars fast for spending with the Plastic Card.
                            </li>
                        </p>
                        <a href="#" className="btn">Learn more</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export {Shop};