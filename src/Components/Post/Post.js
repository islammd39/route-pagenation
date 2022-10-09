import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css'

const Post = ({post}) => {
    const {userId,title,id}=post
    // console.log(post);
    return (
         <div className='post-id'>
            <p>Post Id : <Link to={`/users/${id}`} >{id}</Link></p>
            <p>User Id : {userId}</p>
            <h3>Title : {title}</h3>
        </div>
            
    );
};

export default Post;