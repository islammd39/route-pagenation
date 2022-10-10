import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ThumbnailDetails = () => {
    const thumbnail=useLoaderData()
    // console.log(thumbnail);
    const {title,url} =thumbnail
    return (
        <div>
            <p>details section</p>
            <p>Title : {title}</p>
            <img src={url} alt=".." />
        </div>
    );
};

export default ThumbnailDetails;