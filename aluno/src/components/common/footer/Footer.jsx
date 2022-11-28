import './Footer.css'
import React from 'react'

export default function App(props) {
    return (
        <div className="footer">
            <p>Todos os direitos reservados.</p>
            <div className="midias">
                <img
                    src={process.env.PUBLIC_URL + '/images/logo.png'}
                    alt=""
                    className="logo"
                />
                <img
                    src={process.env.PUBLIC_URL + '/images/insta.png'}
                    alt=""
                    className="redesocial"
                />
                <img
                    src={process.env.PUBLIC_URL + '/images/insta.png'}
                    alt=""
                    className="redesocial"
                />
                <img
                    src={process.env.PUBLIC_URL + '/images/insta.png'}
                    alt=""
                    className="redesocial"
                />
                <img
                    src={process.env.PUBLIC_URL + '/images/insta.png'}
                    alt=""
                    className="redesocial"
                />
            </div>
        </div>
    )
}
