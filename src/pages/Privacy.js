
import { Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { PrivacyNotice } from '../components/privacy/PrivacyNotice';
import { PrivacyEu } from '../components/privacy/PrivacyEu';
import { PrivacyCookie } from '../components/privacy/PrivacyCookie';
import { PrivacyExercise } from '../components/privacy/PrivacyExercise';

import "./Privacy.css"

export const Privacy = () => {

    const [tab, setTab] = useState(null)

    useEffect(() => {
        const path = window.location.pathname.split('/')[2]
        setTab(path)
    })

    return (
        <div className="App">
            <Header />
            <main>
                <section className="privacy">
                    <div className="tabs">
                        <Link to="/privacy/notice"
                            className={`tab text ${tab == 'notice' ? 'active' : ''}`}
                            onClick={() => setTab('privacy')}>
                            PRIVACY NOTICE
                        </Link>
                        <Link to="/privacy/eu"
                            className={`tab text ${tab == 'eu' ? 'active' : ''}`}
                            onClick={() => setTab('eu')}>
                            EU PRIVACY NOTICE
                        </Link>
                        <Link to="/privacy/cookie"
                            className={`tab text ${tab == 'cookie' ? 'active' : ''}`}
                            onClick={() => setTab('cookie')}>
                            COOKIE NOTICE
                        </Link>
                        <Link to="/privacy/exercise"
                            className={`tab text ${tab == 'exercise' ? 'active' : ''}`}
                            onClick={() => setTab('exercise')}>
                            EXERCISE YOUR RIGHTS
                        </Link>
                    </div>
                    <div className="tabs_content">
                        <Route component={PrivacyNotice} path="/privacy/notice" />
                        <Route component={PrivacyEu} path="/privacy/eu" />
                        <Route component={PrivacyCookie} path="/privacy/cookie" />
                        <Route component={PrivacyExercise} path="/privacy/exercise" />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}