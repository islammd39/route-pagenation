import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';


const Users = () => {
    const posts = useLoaderData()
    // console.log(posts);
    return (
       <div>
            <h1>Total Users : {posts.length}</h1>
         <div className='user-post'>
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
       </div>
    );
};

export default Users;