import React, { useEffect,useState } from 'react'
import PokemonCards from './PokemonCards'

const Pokemon = () => {
    const [search,setSearch]=useState("")
    const [pokemon,setPokemon]=useState([])
    const API="https://pokeapi.co/api/v2/pokemon?limit=24"
const fetchPokemon=async()=>{
    try {
     const res=await fetch(API) 
     const data=await res.json()
    //  console.log(data)
    const detailPokemon=data.results.map(async(curPokemon)=>{
        const res=await fetch(curPokemon.url);
        const data= await res.json();
        return data;
            })
            const detailresponse=await Promise.all(detailPokemon)
            console.log(detailresponse)
            setPokemon(detailresponse);
    
    } catch (error) {
       console.log("error in fetching",error) 
    }

}


    useEffect(()=>{
fetchPokemon()
},[])

//search functionality
const filteredPokemon = pokemon.filter((curPokemon) =>
    curPokemon.name.toLowerCase().includes(search.toLowerCase())
);

  return (
<section>
    <header>
        <h1>Let's Catch Pokemon </h1>
    </header>
    <div className="pokemon-search">
        <input type="text"placeholder='search pokemon'
        value={search} onChange={(e)=>setSearch(e.target.value)}/>
    </div>
    <div>
        <ul className='cards'>
            {
            filteredPokemon.map((curPokemon)=>{
         return <PokemonCards key={curPokemon.id} pokemonData={curPokemon}/>
            })
            }
        </ul>
    </div>
</section>
  )
}

export default Pokemon
