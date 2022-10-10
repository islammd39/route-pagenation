import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData()
    // console.log(post);
    return (
        <div>
            <h1>Here is details</h1>
            <h3>User Title : {post.title}</h3>
            <p>User Details : <small>{post.body}</small></p>
        </div>
    );
};

export default PostDetails;