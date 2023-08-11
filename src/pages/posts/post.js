import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import axios from 'axios';

function Post() {
  const { state } = useLocation();
  const { email, username, uid, post_id } = state || {username: 'Tuts+ Envato', email: 'tuts@envato.com', uid: '123', post_id: 1}
  const [post, setPost] = useState()
  
  useEffect(()=>{
    if(post_id && uid) {
      axios.get('/api/get/post',
        {params: {post_id: post_id}} )
        .then(res => res.data.length !== 0
                ?   setPost({likes: res.data[0].likes,
                        like_user_ids: res.data[0].like_user_id,
                        post_title: res.data[0].title,
                        post_body: res.data[0].body,
                        
                      })
                 : null
              )
        .catch((err) => console.log(err) )
    }
  }, [post_id])
  const signOutOfSystem = () => {
  }
  
  return (
    <div className="container">
       <div className='title'>
      Hello {username} [{email}]!
      {!uid && <div>Seems like you are not logged in!</div>}
      <button onClick={()=>signOutOfSystem()}>Sign out</button>
      </div>
      <br/>
      <div>
        {post?.post_title} by
      </div>
      <br/>
      <br/>
      <section>
        {post?.post_body}
      </section>
      <br/>
      <br/>
    </div>
  );
}
export default Post;