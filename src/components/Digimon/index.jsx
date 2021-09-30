import { useParams, useHistory } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

const Digimon = () =>{
    const history = useHistory()
    const { digimon } = useParams()
    const [atualDigimon, setAtualDigimon] = useState({})
    
    useEffect(()=>{
        axios.get("https://digimon-api.vercel.app/api/digimon")
            .then(response => setAtualDigimon(response.data.filter(dgm => dgm.name === digimon)[0]))
    }, [])

    console.log(atualDigimon)

    if(atualDigimon!==undefined){
        return(
            <>
                <div className="digimon">
                    <h2>{atualDigimon.name}</h2>
                    <img src={atualDigimon.img} alt={atualDigimon.name}/>
                    <p>Level: {atualDigimon.level}</p>
                </div>
                <button onClick={()=>history.push("/digimons")}>Voltar para lista</button>
            </>
        )
    }
    if(atualDigimon===undefined){
        return <>
            <p>Digimon não encontrado</p>
            <button onClick={()=>history.push("/digimons")}>Voltar para lista</button>
        </>
    }
}

export default Digimon