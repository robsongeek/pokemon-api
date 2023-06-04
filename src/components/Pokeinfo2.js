import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// é um hook para pega os paramentros que vem da rota
import { useParams } from 'react-router-dom'

async function getPokemoInf(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    return await response.json()
}

const PokemonDetails = () => {
    const [pokemonInf, setPokemonInf] = useState({})

    // retorna todos os paramentros que vierão da url, pegando o id via desestruturação
    const { id } = useParams()

    useEffect(() => {
        async function fetchData() {
            const pokemonInf = await getPost(id)
            setPokemonInf(pokemonInf.data)
        }

        fetchData()
    }, [])

    return (
        <section>
            <Link to="/">Voltar para os posts</Link>
            <div>
            <h1>{data.name}</h1>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="" />
                    <div className="abilities">
                        {
                            data.abilities.map(poke=>{
                                return(
                                    <>
                                     <div className="group">
                                        <h2>{poke.ability.name}</h2>
                                    </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="base-stat">
                        {
                            data.stats.map(poke=>{
                                return(
                                    <>
                                        <h3>{poke.stat.name}:{poke.base_stat}</h3>
                                    </>
                                )
                            })
                        }
                    </div>
            </div>
        </section>
    )
}

export { PokemonDetails }