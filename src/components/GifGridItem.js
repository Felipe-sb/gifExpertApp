import React from 'react';

export const GifGridItem = ({ id, title, url }) => {
    return (
            <div className="col col-lg-4 col-sm-6 col-12">
                <img loading='lazy' src={url} alt={title} />
                <p>{title}</p>
            </div>
    );
};
