import { useState, useEffect } from "react"
import axios from "axios"

const DigimonList = () =>{
    const [digimonList, setDigimonList] = useState([])
    const [page, setPage] = useState(1)
    
    const getDigimonList = () =>{
        axios.get("https://digimon-api.vercel.app/api/digimon")
            .then(response => setDigimonList(response.data))
    }

    useEffect(()=>{
        getDigimonList()
    }, [])

    const ShowDigimons = digimon => {
        return (
            <li key={digimon.name}>
                <img src={digimon.img} alt={digimon.name}/>
                <h3>{digimon.name}</h3>
                <p>Level: {digimon.level}</p>
            </li>
        )
    }

    const filterPage = (digimon, index, arr) =>{
        return index < page*15 && index > page*15-15
    }

    const nextPage = () => {
        if( page+1 <= digimonList.length%14+1 ){
            return setPage(page+1)
        }
    }
    const prevPage = () => {
        if( page-1 > 0 ){
            return setPage(page-1)
        }
    }

    return (
        <div className="digimonList">
            <ul>
                {digimonList.filter(filterPage).map(ShowDigimons)}
            </ul>
            <button onClick={prevPage}>Anterior</button>
            <button onClick={nextPage}>Proximo</button>
        </div>
    )
}

export default DigimonList;