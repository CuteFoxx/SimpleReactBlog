import { useState } from "react";
import axios from "axios";
import FileBase from "react-file-base64";
import "./CreatePost.css";
import { useContext } from "react";
import { userContext } from "../../Contexts/userContext";

const CreatePost = () => {
  const { user } = useContext(userContext);

  let [post, setPost] = useState({ title: "", postBody: "", img: "" });
  let [titleError, setTitleError] = useState("");
  let [bodyError, setBodyError] = useState("");
  let [imgError, setImgError] = useState("");

  const validate = () => {
    setTitleError("");
    setBodyError("");
    setImgError("");

    if (!post.title) {
      setTitleError("empty title");
    }
    if (!post.postBody) {
      setBodyError("empty post Body");
    }
    if (!post.img) {
      setImgError("you should select some image");
    }

    if (!post.title || !post.postBody || !post.img) {
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      axios.post("http://localhost:5000/api/posts", post);
      alert("post Created");
    }
  };

  if (!user) {
    return (
      <div className="form-container">
        <h2>You should log in to create post</h2>
      </div>
    );
  }

  return (
    <div className="form-container">
      <form
        method="POST"
        action="http://localhost:5000/api/posts"
        className="create-post__form"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="title"
          placeholder="title"
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
        <div className="error">{titleError}</div>
        <textarea
          name="postBody"
          cols="30"
          rows="4"
          placeholder="post body"
          onChange={(e) => setPost({ ...post, postBody: e.target.value })}
        ></textarea>
        <div className="error">{bodyError}</div>
        <FileBase
          type="file"
          multiple={false}
          onDone={(base64) =>
            setPost({
              ...post,
              img: base64.base64,
              author: { name: user.name, img: user.imageUrl },
            })
          }
        />
        <div className="error">{imgError}</div>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};
export default CreatePost;
