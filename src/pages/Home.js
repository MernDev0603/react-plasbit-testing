import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { useResize } from '../hook/useCustomHook'

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Main } from '../components/Main';
import { Store } from '../components/Store';
import { Manage } from '../components/Manage';
import { Shop } from '../components/Shop';
import { Trend } from '../components/Trend';
import { Help } from '../components/Help';

const slider = [
    { coin: '', coinName: 'Neo', date: 'Aug 13, 2021 10:00:00', graphic: 'assets/img/graph-1.png', price: 51.83, precent: '+2,06', volume: '$173,562,475' },
    { coin: '', coinName: 'Bitcoin', date: 'Aug 13, 2021 10:00:00', graphic: '', price: 46153.44, precent: '+2,06', volume: '$173,562,475' },
    { coin: '', coinName: 'Ether', date: 'Aug 13, 2021 10:00:00', graphic: '', price: 3213.88, precent: '+2,06', volume: '$173,562,475' },
    { coin: '', coinName: 'Litecoin', date: 'Aug 13, 2021 10:00:00', graphic: '', price: 175.84, precent: '+2,06', volume: '$173,562,475' },
    { coin: '', coinName: 'XRP', date: 'Aug 13, 2021 10:00:00', graphic: '', price: 1.02916, precent: '+2,06', volume: '$173,562,475' },
    { coin: '', coinName: 'Monero', date: 'Aug 13, 2021 10:00:00', graphic: '', price: 266.97, precent: '+2,06', volume: '$173,562,475' },
    { coin: '', coinName: 'Litecoin', date: 'Aug 13, 2021 10:00:00', graphic: '', price: 175.84, precent: '+2,06', volume: '$173,562,475' },
]

function Home() {

    const { isMobile } = useResize()
    var sliderSettings = {
        infinite: true,
        speed: 1500,
        slidesToShow: 6,
        slidesToScroll: 1,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1420,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <div className="App">
            <Header />
            <main>
                <Main />
                <Store />
                <Manage />
                <Shop />
                <section className="trend">
                    <div className="trend_inner">
                        <div className="container">
                            <div className="trend_top">
                                {isMobile &&
                                    <h2 className="title">
                                        Market <span>Trend</span>
                                    </h2>
                                }
                                {!isMobile &&
                                    <h2 className="title">
                                        Market <span>Trend</span>
                                    </h2>
                                }
                            </div>
                        </div>
                        <Slider {...sliderSettings} className="trend_slider">
                            {slider.map((obj) => (
                                <Trend
                                    key={obj.coinName}
                                    coin={obj.coin}
                                    coinName={obj.coinName}
                                    date={obj.date}
                                    graphic={obj.graphic}
                                    price={obj.price}
                                    precent={obj.precent}
                                    volume={obj.volume}
                                />
                            ))}
                        </Slider>
                    </div>
                </section>

                <Help />
            </main>
            <Footer />
        </div>
    );
}

export { Home };
