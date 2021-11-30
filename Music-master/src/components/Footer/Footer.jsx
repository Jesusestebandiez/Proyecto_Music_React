import React from 'react'
import "../Footer/Footer.css"
const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="waves">
                    <div className="wave" id="wave1"></div>
                    <div className="wave" id="wave2"></div>
                    <div className="wave" id="wave3"></div>
                    <div className="wave" id="wave4"></div>
                </div>
                <ul className="social-icon">
                    <li className="social-icon__item">
                        <a href="http://www.facebook.com">
                            <img className="menu__link" src="src/assets/facebook.svg" alt="Facebook"></img>
                        </a>
                    </li>
                    <li className="social-icon__item">
                        <a href="http://www.instagram.com">
                            <img className="menu__link" src="instagram.svg" alt="Instagram"></img>
                        </a>
                    </li>
                    <li className="social-icon__item">
                        <a href="http://www.twitter.com">
                            <img className="menu__link" src="https://play-lh.googleusercontent.com/J8k5q78xv4R8Smi4vOE6iUphLvOz0efC-0lzoyGfd0KRUlAv4ekuCtlss6KBN-tMvEw" alt="Twitter"></img>
                        </a>
                    </li>
                </ul>
                <p>&copy;2021 Nadine Coelho | All Rights Reserved</p>
            </footer>
        </div>
    )
}

export default Footer
