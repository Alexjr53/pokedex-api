import React from "react";
import Pokemon from "../pokemon/Pokemon";
import Pagination from "../pagination/Pagination";
import "./Pokedex.css"

const Pokedex = (props) => {
    const { pokemons, loading, page, setPage, totalPages } = props;
    const onLeftClickHandler = () => {
        if (page > 0) {
            setPage(page - 1)
        }
    }
    const onRightClickHandler = () => {
        if (page + 1 != totalPages) {
            setPage(page + 1)
        }
    }

    return (
        <div>
            <div className="pokedex-header">
                <h1>Pokedex</h1>
                <Pagination page={page + 1} totalPages={totalPages} onLeftClick={onLeftClickHandler} onRightClick={onRightClickHandler} />
            </div>
            {loading ? (<div><p className="load">Carregando...</p></div>) : (<div className="pokedex-grid">
                {pokemons && pokemons.map((pokemon, index) => {
                    return (
                        <Pokemon key={index} pokemon={pokemon} />
                    );
                })}
            </div>)}
        </div>
    )
}

export default Pokedex;