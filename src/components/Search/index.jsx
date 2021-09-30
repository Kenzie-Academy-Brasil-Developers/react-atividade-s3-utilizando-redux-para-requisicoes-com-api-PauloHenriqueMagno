import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addDigimonsThunk } from "../../store/modules/digimons/thunks"

const Search = () => {
  const dispatch = useDispatch()
  const { digimons } = useSelector(state=>state)

  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [isThere, setIsThere] = useState(false);

  return (
    <div className="formDigimon">
      <h2>Procure pelo seu Digimon!</h2>
      <div>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Procure seu Digimon"
        />
        <button 
          onClick={()=>{
            dispatch(addDigimonsThunk(input, digimons, setError, setIsThere))
            setInput("")
          }}
        >
          Procurar
        </button>
      </div>
        {error && <p>Digimon não foi encontrado</p>}
        {isThere && <p>Já possui esse digimon</p>}
    </div>
  );
};

export default Search