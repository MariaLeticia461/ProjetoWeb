import './Menu.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
            <br/><br/>
                <li>
                    <Link to="/">Rogério Skylab</Link>
                </li>
                <br/><br/><br/>
                <li>
                    <Link to="/Biblio">Bibliografia</Link>
                </li>
                <br/><br/><br/>
                <li>
                    <Link to="/Musicas">Musicas</Link>
                </li>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <li>
                    Todos os direitos reservados - Maria Letícia Fernandes Pereira
                </li>
            </ul>
        </nav>
    </aside>
)
export default Menu