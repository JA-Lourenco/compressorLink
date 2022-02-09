import './error.css'
import { Link } from 'react-router-dom'

export default function Error() {

    return (
        <div className="container-error">
            <img src="/notfound.png" alt="Página não econtrada!"  ></img>

            <h1>Página Não Encontrada!</h1>

            <Link to="/">
                Voltar para a Página Principal
            </Link>
        </div>
    )
}