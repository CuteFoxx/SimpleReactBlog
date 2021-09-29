import "./Post.css";
import { useState, useEffect } from "react";
import formatDate from "./formatDate";
import axios from "axios";
import { Link } from "react-router-dom";

const Post = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(async () => {
    axios.get("http://localhost:5000/api/posts").then((res) => {
      setData(res.data.reverse());
      setLoading(false);
    });
  }, []);

  const handleDelete = (e) => {
    const post = e.target.closest(".post");
    axios.delete("http://localhost:5000/api/posts/" + post.id);
    document.location.reload();
  };

  const trimLongPost = (postBody) => {
    if (postBody.length > 150) {
      let arr = postBody.split("");
      arr.splice(150, postBody.length - 150, "...");
      return arr.join("");
    }
    return postBody;
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return data.map((data) => {
    let date = new Date(data.date);
    return (
      <section className="post" id={data._id} key={data._id}>
        <div className="post__container">
          <Link to={"/" + data._id}>
            <img src={data.img} alt="" />
          </Link>
          <button onClick={handleDelete} className="post__delete-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-trash"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
              <path
                fillRule="evenodd"
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
              />
            </svg>
          </button>
          <h3 className="post__title">{data.title}</h3>
          <h3 className="post__date">{formatDate(date)}</h3>
        </div>
        <div className="post__body">{trimLongPost(data.postBody)}</div>
      </section>
    );
  });
};

export default Post;
