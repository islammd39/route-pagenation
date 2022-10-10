import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AlbumsDetails from './AlbumsDetails';

const Albums = () => {
    const photos = useLoaderData()
    // console.log(photos);
    return (
        <div>
            <h2>This is albums section and here are /{photos.length} /Photos</h2>
           <div className='album-grid'>
           {
                photos.map(photo => <AlbumsDetails key={photo.id} photo={photo}></AlbumsDetails>)
            }
           </div>
        </div>
    );
};

export default Albums;