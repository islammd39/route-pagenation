import React from 'react';
import './Post.css'

const Post = ({post}) => {
    const {userId,title}=post
    // console.log(post);
    return (
         <div className='post-id'>
            <p>User Id : {userId}</p>
            <h3>Title : {title}</h3>
        </div>
            
    );
};

export default Post;