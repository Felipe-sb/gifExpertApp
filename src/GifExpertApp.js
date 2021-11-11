import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
const GifExpertApp = () => {
    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [category, setCategory] = useState([]);
    // const addCategory = () => {
    //     setCategory((cats) => [...cats, 'Hunter x Hunter']);
    // };
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategory={setCategory} />
            <hr />
            <ul>
                {category.map((category) => (
                    <GifGrid key={category} category={category} />
                ))}
            </ul>
        </>
    );
};
export default GifExpertApp;
