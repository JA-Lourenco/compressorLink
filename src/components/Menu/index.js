import './menu.css'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

import { Link } from 'react-router-dom'

export default function Menu() {

    return (

        <div className="menu">
            <a className="social" href="https://github.com/JA-Lourenco" target="_blank" rel="author">
                <BsGithub color="#FFF" size={24} />
            </a>

            <a className="social" href="https://www.linkedin.com/in/ja-lourenco/" target="_blank" rel="author">
                <BsLinkedin color="#FFF" size={24} />
            </a>

            <Link className="menu-item" to="/links">
                Meus Links
            </Link>
        </div>
    )
}