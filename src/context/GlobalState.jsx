import { useEffect, useState } from "react";
import GlobalContext from "./GlobalContext";
import PropTypes from "prop-types";
import axios from "axios";
import { BASE_URL } from "../constants/urls";


export default function GlobalState({ children }) {
  GlobalState.propTypes = {
    children: PropTypes.node.isRequired, // Validação da propriedade children
  };


  const [commentsByPost, setCommentsByPost] = useState([]);
  const [post, setPost] = useState([]);

  const token = {
    headers: {
      Authorization: window.localStorage.getItem("token"),
    },
  };


  const getPosts = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/posts`, token);
      setPost(response.data);

    } catch (error) {
      console.log(error);
    }
  };


  

  useEffect(() => {
    getPosts();
    // getCommentsByPost()
  }, []);


  const getCommentsByPost = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/comment/${post.map((p)=>console.log(p.comment.length))}`,
        token
      );

      setCommentsByPost(response.data);
    } catch (error) {
      console.log("Erro ao buscar commentarios");
      console.log(error);
    }
  };

  
  const data = {
    commentsByPost,
    getCommentsByPost
  };


  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
}
