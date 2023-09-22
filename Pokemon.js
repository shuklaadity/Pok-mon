import React, { useState ,useEffect} from "react";
import axios from "axios";

const Pokemon=()=>{

    const [sdata,setsdata]=useState();

    useEffect(()=>{
            alert('hi')
    })
    const selectevent=(e)=>{
        setsdata(e.target.value);
    }
    return(
         
        <>

           <h1> your selected value {sdata} </h1>
           <select value={sdata} onChange={selectevent}>

             <option value='1'>1</option>
             <option value='2'>2</option>
             <option value='3'>3</option>
             <option value='4'>4</option>
             <option value='25'>25</option>
           </select>
        </>
    )
}

export default Pokemon;