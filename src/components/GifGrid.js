import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    const {data, loading} = useFetchGifs(category);
    
    return (
        <div>
            <h3>{category}</h3>
            {loading && <p>Cargando...</p>}
            <div className="card-grid">
                    {
                        data.map((img) => (
                        <GifGridItem
                                key={img.id} 
                                {...img} 
                        />
                        ))
                    }
            </div>
        </div>
    )
}
