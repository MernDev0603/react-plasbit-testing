import './Help.css'
function Help() {
    return (
        <section className="help">
            <div className="container">
                <div className="help_inner">
                    <h3 className="help_title">
                        We Are Here to Help
                    </h3>
                    <p className="text white help_text">
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

export { Help };