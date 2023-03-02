import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import formStyle from './css/search.module.css'

function Search() {
    const [input, setInput]= useState("");
    const navigate= useNavigate();

    const submitHnadler= (e)=>{
        e.preventDefault();
        navigate(`/searched/${input}`)
    }

  return (
    <div>
        <form onSubmit={submitHnadler} className={formStyle.formStyle}>
            <FaSearch />
            <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}} />
        </form>
    </div>
  )
}

export default Search