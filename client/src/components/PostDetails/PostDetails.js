import React, {useState} from 'react'
import { useParams } from 'react-router'
import axios from 'axios';
import './PostDetails.css'
import formatDate from '../Posts/Post/formatDate';

const PostDetails = () => {
    const [post, setPost] = useState(null);
    const {id} = useParams();
    
    axios.get('http://localhost:5000/api/posts/' + id).then( res => {
        setPost(res.data[0])
    })
    if(!post){
        return (
            <h2>Loading...</h2>
        )
    }
    return (
        <section className="post-details">
            <img src={post.img} alt="" className="post-details__thumbnail" />
            <h2 className="post-details__title">{post.title}</h2>
            <div className="post-details__content">{post.postBody}</div>
            <div className="post-details__footer">
                <img src={post.author.img} alt="" className="post-details__author-img" />
                <div className="post-details__inner-container">
                    <div className="post-details__author-name">{post.author.name}</div>
                    <div className="post-details__creation-date">{formatDate(new Date(post.date))}</div>
                </div>
            </div>
        </section>
    )
}

export default PostDetails
