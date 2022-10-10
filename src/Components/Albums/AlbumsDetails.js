import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AlbumsDetails.css'

const AlbumsDetails = ({photo}) => {
    // console.log(photo);
    const{url,thumbnailUrl,title,id}=photo;
    const navigate = useNavigate();
    const btnHandler = ()=>{
        navigate(`/albums/${id}`)
    }
    return (
        <div className='album-card'>
            <img className='img-url' src={url} alt="" />
            <h5>Album Title : <small>{title}</small></h5>
            <div className='album-display'>
            <img className='thumbnail-img' src={thumbnailUrl} alt="" />
            <p>Thumbnail<small><Link to={`/albums/${id}`}>Details</Link></small></p>
            </div>
            <button className='btn-fix' onClick={btnHandler}>Author Details</button>
        </div>
    );
};

export default AlbumsDetails;