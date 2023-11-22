import { useContext, useState } from "react"
import { MoviesContext } from "../../../context/MoviesContext"
import './search.css'



const Search = () => {

    const {handleSearch} = useContext(MoviesContext)

    const handleChange = (e) =>{
      handleSearch(e.target.value)
    }
  return (
    <form 
        name='search' 
        className='searcher'
        onSubmit={handleSearch}>
            <label 
                className='searcher_icon'>{/* <HiSearch/> */}Buscar</label>
            <input 
                type='text' 
                placeholder='The Batman... ' 
                className='searcher_box'
                name='movie'
                onChange={handleChange}
                />
            <input type="submit" value="buscar" />
    </form>
  )
}

export default Search