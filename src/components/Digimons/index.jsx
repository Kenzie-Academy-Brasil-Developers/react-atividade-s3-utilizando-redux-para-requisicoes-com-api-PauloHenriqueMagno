import { useSelector } from "react-redux"

import { removeDigimonThunk } from "../../store/modules/digimons/thunks"
import { useDispatch } from "react-redux"

const Digimons = () => {
    const { digimons } = useSelector(state => state)
    const dispatch = useDispatch()
    
    return (
        <ul className="digimonList">
            {digimons.map(digimon => {
                return (
                    <li key={digimon.name}>
                        <img src={digimon.img} alt={digimon.name}/>
                        <h3>{digimon.name}</h3>
                        <p>Level: {digimon.level}</p>
                        <button 
                            onClick={()=> dispatch(removeDigimonThunk(digimon, digimons))}
                        >
                            Remove digimon
                        </button>
                    </li>   
                )
            })}
        </ul>
    )
}
  
export default Digimons