import React, { useEffect } from 'react'

export const CardMobile = (props) => {

    useEffect(() => {

        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot_cardmobile");
        let slideIndex = 1;

        let prev = document.querySelector(".prev");
        let next = document.querySelector(".next");
        let dot_1 = document.querySelector(".dot_1");
        let dot_2 = document.querySelector(".dot_2");
        let dot_3 = document.querySelector(".dot_3");
        prev.addEventListener("click", () => plusSlides(-1));
        next.addEventListener("click", () => plusSlides(1));
        dot_1.addEventListener("click", () => currentSlide(1));
        dot_2.addEventListener("click", () => currentSlide(2));
        dot_3.addEventListener("click", () => currentSlide(3));

        showSlides(slideIndex);

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        function showSlides(n) {
            let i;
            if (n > slides.length) { slideIndex = 1 }
            if (n < 1) { slideIndex = slides.length }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
        }
    })
    return (
        <div className="slideshow-container">
            <div className="text_center dots" >
                <span className="dot_cardmobile dot_1"></span>
                <span className="dot_cardmobile dot_2"></span>
                <span className="dot_cardmobile dot_3"></span>
            </div>
            {props.cards.map((card, index) => (
                <div className="mySlides fade text_center" key={index}>
                    <img src={require(`assets/img/card/${card.img}`).default} alt="" />
                    <div className="card_title text_white">{card.title}</div>
                    {(props.isLimit == "limit") &&
                        <div className="details">
                            <div className="detail">
                                <div>Daily ATM withdrawal </div>
                                <div>{card.withdrawal} <span>per withdrawal</span></div>
                            </div>
                            <div className="detail">
                                <div>Card daily Load Limit</div>
                                <div>{card.load} <span>per day</span></div>
                            </div>
                            <div className="detail">
                                <div>POS purchases per day LImit</div>
                                <div>{card.spending} <span>per day</span></div>
                            </div>
                        </div>
                    }
                    {(props.isLimit == "fee") &&
                        <div className="details">
                            <div className="detail">
                                <div> Card Load from Plasbit Wallet</div>
                                <div>{card.withdrawal1} <span>%</span></div>
                            </div>
                            <div className="detail">
                                <div> Currency exchange</div>
                                <div>{card.load1} <span>%</span></div>
                            </div>
                            <div className="detail">
                                <div> Card monthly fee</div>
                                <div>{card.spending1} <span>$</span></div>
                            </div>
                        </div>
                    }
                </div>
            ))}

            <a className="prev">&#10094;</a>
            <a className="next">&#10095;</a>
        </div>
    )
}