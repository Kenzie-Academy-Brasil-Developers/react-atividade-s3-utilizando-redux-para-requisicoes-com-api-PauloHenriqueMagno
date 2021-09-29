import axios from "axios";
import { addDigimon, removeDigimon } from "./actions";

export const addDigimonsThunk = (digimon,digimons,setError,setIsThere) => (dispatch) => {
    axios.get("https://digimon-api.vercel.app/api/digimon")
        .then(response => {
            const filterDigimon = response.data.filter( dgm => dgm.name.toLowerCase()===digimon.toLowerCase())

            filterDigimon.length===0? setError(true): setError(false);

            const isThere = digimons.some(dgm => dgm.name.toLowerCase() === digimon.toLowerCase())

            setIsThere(isThere);
            
            if(filterDigimon.length!==0 && !isThere){
                dispatch(addDigimon(filterDigimon[0]));
            }
        })
    console.log(dispatch)
}

export const removeDigimonThunk = (digimon, digimons) => (dispatch) => {
    const newDigimons = digimons.filter(dgm => dgm.name!==digimon.name);
    dispatch(removeDigimon(newDigimons))
}