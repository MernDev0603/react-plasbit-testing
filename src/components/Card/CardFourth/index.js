import React from 'react'

import { Accordion } from '../Accordion'
import './Fourth.css'

const faqs = [
    { title: 'How much does the PlasBit Card cost?', content: ["This is content"] },
    { title: 'How do I order a PlasBit Card?', content: ["This is content"] },
    { title: 'How long does shipping take?', content: ["This is content How long does shipping take? How long does shipping take? How long does shipping take? How long does shipping take? How long does shipping take? How long does shipping take? How long does shipping take? How long does shipping take? How long does shipping take? How long does shipping take? How long does shipping take? How long does shipping take? How long does shipping take?"] },
    { title: 'How do I pay using crypto?', content: ["This is content. How do I pay using crypto? How do I pay using crypto? How do I pay using crypto? How do I pay using crypto? How do I pay using crypto? How do I pay using crypto? How do I pay using crypto? How do I pay using crypto?"] }
]

export const CardFourth = () => {
    return (
        <section className="card_fourth text_center">
            <div className="contain">
                <div className="title fourth_title text_blue">
                    FAQs <span className="mobile_none">about the PlasBit Card</span>
                </div>
                {faqs.map((faq, index) => (
                    <Accordion obj={faq} key={index} arrow={true} />
                ))}
            </div>
        </section>
    )
}