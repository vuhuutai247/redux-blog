import {React, useState, useEffect } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Modal from '../modal/modal';

function Landing (){



const navigate = useNavigate();

const [showModal, setShowModal] = useState(false)
const [refresh, setRefresh] = useState(false)
const [posts, setPosts] = useState([])

const loadAllPostsOfUser = () => {
  axios.get('/api/get/allposts')
    .then(res => setPosts(res.data) )
    .catch((err) => console.log(err))
}

useEffect(()=>{
  setShowModal(false)
}, [refresh])


useEffect(()=>{
  loadAllPostsOfUser()
},[])

const openPost = (post_id) => {
  navigate(`/posts/post`, {
    email: 'email',
    uid: 'uid',
    username: 'username',
    post_id: post_id
  })
}

const openAddNewPostModal = () => {
  setShowModal(true)
}

const signOutOfSystem = () => {
  
}

const handleSubmit = (event) => {
  event.preventDefault()
  const data = {title: event.target.value,
                body: event.target.value,}
  axios.post('/api/post/posttodb', data)
    .then(response => console.log(response))
    .catch((err) => console.log(err))
    .then(setTimeout(() => setRefresh(!refresh), 700) )
}


return (
  <>
<div className="post_container">
  {posts.map((post, index) => 
  <React.Fragment>
    <span>{index + 1}</span> 
    <span className="post_title" onClick={()=>openPost(post.id)}>{post.name}</span> 
  </React.Fragment> 
  )}
</div> 

<div className='title'>
    Hello  !
    <button onClick={()=>openAddNewPostModal()}>Add New Post</button> 
    <button onClick={()=>signOutOfSystem()}>Sign out</button> 
</div>

<Modal show={showModal} handleClose={()=>setShowModal(!showModal)}>
          <form onSubmit={handleSubmit} className='modalContainer'>
            <span>Title of the Blog</span><input type='text'/>
            <span>Subject</span><textarea/>
            <button type='submit'>Submit</button>
            </form>
      </Modal>
</>
)
}

export default Landing