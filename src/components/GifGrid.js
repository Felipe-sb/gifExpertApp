import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    const {data,loading} = useFetchGifs(category);
    // const [images, setImages] = useState([]);
    // useEffect(() => {
    //     getGifs(category)
    //         .then(setImages)
    // }, [category]);
    return (

        <>
            <h3>{category}</h3>
            {loading && <p>loading...</p>}
        
        {data.map((gif) => 
            <GifGridItem
                key={gif.id}
                {...gif}
            />
        )}
        </>
    );
};
