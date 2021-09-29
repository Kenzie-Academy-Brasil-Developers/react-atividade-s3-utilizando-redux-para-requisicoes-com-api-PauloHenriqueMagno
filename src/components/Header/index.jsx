import { useHistory } from "react-router-dom"

const Header = () =>{
    const history = useHistory()

    return (
        <header>
            <div className="container">
                <h1>DIGIMON</h1>
                <nav>
                    <button onClick={()=>history.push("/")}>
                        Home
                    </button>
                    <button onClick={()=>history.push("/digimons")}>
                        Lista de digimons
                    </button>
                </nav>
            </div>
        </header>
    )
}

export default Header;