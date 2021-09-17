import styles from './Help.module.scss'
function Help() {
	return (
        <section className={styles.help}>
            <div className="container">
                <div className={styles.help_inner}>
                    <h3 className={styles.help_title}>
                        We Are Here to Help
                    </h3>
                    <p className={`text white ${styles.help_text}`}>
                        Support is just a few taps away. You can also get
                        your question answered by using our <a href="#">help library</a>
                    </p>
                    <a href="#" className="btn contact_btn">
                        Contact us
                    </a>
                </div>
            </div>
        </section>
    );
}

export {Help};