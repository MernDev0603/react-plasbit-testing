import { useResize } from '../../hook/useCustomHook'

import './Manage.css'
import manage_bg from 'assets/img/manage.png'
import check from 'assets/img/check.svg'
function Manage() {
    const { isMobile } = useResize()
    return (
        <section className="manage" style={{ background: `url(${manage_bg})` }}>
            <div className="container">
                <div className="manage_inner">
                    <div className="manage_content">
                        <h2 className="title manage_title white manage_title">
                            PlasBit gives you a way {isMobile ? <br /> : ' '} to {' '}
                            <span className="typewriter_span">
                                Hold
                                {/* <Typewriter
                                    options={{
                                        autoStart: true,
                                        loop: true,
                                    }}
                                    onInit={(typewriter) => {
                                        typewriter
                                            .pauseFor(500)
                                            .typeString("Manage")
                                            .pauseFor(2000)
                                            .deleteAll()
                                            .pauseFor(500)
                                            .typeString("Control")
                                            .pauseFor(2000)
                                            .deleteAll()
                                            .pauseFor(500)
                                            .typeString("Hold")
                                            .pauseFor(2000)
                                            .start();
                                    }}
                                /> */}
                            </span>
                            {' '}all your{isMobile ? <br /> : ' '}
                            crypto {isMobile ? ' ' : 'currency'} in one place
                        </h2>
                        <p className="text white">
                            <li>
                                <img src={check} alt="check" />
                                Secure storage - We store the vast majority of the digital assets in secure offline storage.
                            </li>
                            <li>
                                <img src={check} alt="check" />
                                Secure storage - We store the vast majority of the digital assets in secure offline storage.
                            </li>
                        </p>
                        <a href="/wallet" className="btn">Learn more</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export { Manage };