
import React,{useState} from 'react'
import {AddCategory} from './components/AddCategory'
import { GifGrid } from './components/GifGrid';
export const GitExpertApp = () => {
    const [categorias, setCategorias] = useState(['One Punch']);
    return (
        <>
            <h2>GitExperApp</h2>
            <AddCategory setCategorias={setCategorias}/>
            <hr/>
            <ol>
                {
                    categorias.map( category =>
                        <GifGrid
                        key={category}
                        category={category}
                        />
                        
                    )
                }
            </ol>
            
        </>
    )
}
