import React from 'react';

export const GifGridItem = ({ id, title, url }) => {
    return (
        <div className='card'>
            <img loading="lazy" src={url} alt={title} />
            <p>{title}</p>
        </div>
    );
};
