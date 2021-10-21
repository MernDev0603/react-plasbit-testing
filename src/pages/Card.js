import "slick-carousel/slick/slick.css";
// import { useResize } from '../hook/useCustomHook'

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CardFirst } from '../components/Card/CardFirst';
import { CardSecond } from '../components/Card/CardSecond';
import { CardThird } from '../components/Card/CardThird';
import { CardFourth } from '../components/Card/CardFourth';
import { CardFifth } from '../components/Card/CardFifth';
import { Cookies } from '../components/Cookies';

export const Card = () => {

    // const { isMobile } = useResize()

    return (
        <div className="App">
            <Header />
            <main>
                <CardFirst />
                <CardSecond />
                <CardThird />
                <CardFourth />
                <CardFifth />
            </main>
            <Footer />
            <Cookies />
        </div>
    );
}