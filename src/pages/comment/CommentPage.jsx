/* eslint-disable react-hooks/exhaustive-deps */

import { useCallback, useEffect, useState } from "react";
import Header from "../../components/Header";

import {
  CardsContainer,
  Container,
  FixedContainer,
  FormContainer,
  GradientHR,
  MainContainer,
  SectionComment,
  SectionCommentsAndLikes,
  SectionLikes,
} from "./CommentPage.styles";
import commentIcon from "../../assets/commentIcon.svg";
import likeIcon from "../../assets/likeIcon.svg";
import dislikeIcon from "../../assets/dislikeIcon.svg";
import useProtectedPage from "../../hooks/useProtectedPage";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";
import useForm from "../../hooks/useForm";
import { toast } from "react-toastify";

export default function CommentPage() {
  useProtectedPage();
  const [commentsByPost, setCommentsByPost] = useState([]);
  const { form, onChangeInputs, setForm } = useForm({ content: "" });

  const params = useParams();

  const token = {
    headers: {
      Authorization: window.localStorage.getItem("token"),
    },
  };


  async function likePost(idToPost) {
    const body = {
      like: true,
    };

    try {
      await axios.put(`${BASE_URL}/posts/${idToPost}/like`, body, token);
      getCommentsByPost();
    } catch (error) {
      console.log(error.message);
      toast.error(error.response.data, {
        toastId: 1,
        style: { width: "200px", height: "90px" },
        position: "top-center",
      });
    }
  }

  const dislikePost = async (idToPost) => {
    const body = {
      like: false,
    };

    try {
      await axios.put(`${BASE_URL}/posts/${idToPost}/like`, body, token);
      getCommentsByPost();
    } catch (error) {
      console.log(error.message);
      toast.error(error.response.data, {
        toastId: 1,
        style: { width: "200px", height: "90px" },
        position: "top-center",
      });
    }
  };
  const likeComment = async (idToPost) => {
    const body = {
      like: true,
    };

    try {
      await axios.put(`${BASE_URL}/comment/${idToPost}`, body, token);
      getCommentsByPost();
    } catch (error) {
      console.log(error.message);
      toast.error(error.response.data, {
        toastId: 1,
        style: { width: "200px", height: "90px" },
        position: "top-center",
      });
    }
  };

  const dislikeComment = async (idToPost) => {
    const body = {
      like: false,
    };

    try {
      await axios.put(`${BASE_URL}/comment/${idToPost}`, body, token);
      getCommentsByPost();
    } catch (error) {
      console.log(error.message);
      toast.error(error.response.data, {
        toastId: 1,
        style: { width: "200px", height: "90px" },
        position: "top-center",
      });
    }
  };

  useEffect(() => {
    if (params.id) {
      getCommentsByPost();
    }
  }, [params]);

  const getCommentsByPost = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/comment/${params.id}`,
        token
      );

      setCommentsByPost(response.data);
    } catch (error) {
      console.log("Erro ao buscar commentarios");
      console.log(error);
    }
  };

  useEffect(() => {
    getComments();
  }, []);

  const fetchComments = useCallback(async () => {
    const body = {
      content: form.content,
    };
    try {
      await axios.post(`${BASE_URL}/comment/${params.id}`, body, token);
    } catch (error) {
      console.log(error.message);
    }
  }, [form.content, params.id, token]);

  const sendComments = (e) => {
    e.preventDefault();
    fetchComments();
    getCommentsByPost();
    setForm({ ...form, content: "" });
  };

  const getPosts = () => {
    return (
      <Container key={commentsByPost.post?.id}>
        <p>Enviado por{" "}:{" "}{commentsByPost.post?.creator?.creatorName}</p>
        <h2>{commentsByPost.post?.content}</h2>

        <SectionCommentsAndLikes>
          <SectionLikes>
            <button onClick={() => likePost(commentsByPost.post?.id)}>
              <img src={likeIcon} alt="Botão de likes" />
            </button>

            <p>{commentsByPost.post?.likes}</p>

            <button>
              <img
                src={dislikeIcon}
                onClick={() => dislikePost(commentsByPost.post?.id)}
                alt="Botão de likes"
              />
            </button>
          </SectionLikes>

          <SectionComment>
            <button>
              <img src={commentIcon} alt="Icone de comentários" />
              <p>{commentsByPost.comments?.length}</p>
            </button>
          </SectionComment>
        </SectionCommentsAndLikes>
      </Container>
    );
  };

  const getComments = () => {
    return commentsByPost.comments?.map((comment) => (
      <Container key={comment.id}>
        <p>Enviado por{" "}:{" "}{comment.creator.creatorName}</p>
        <h2>{comment.content}</h2>
        <SectionCommentsAndLikes>
        <SectionLikes>
          <button onClick={() => likeComment(comment.id)}>
            <img src={likeIcon} alt="Botão de likes" />
          </button>

          <p>{comment.likes}</p>

          <button onClick={() => dislikeComment(comment.id)}>
            <img src={dislikeIcon} alt="Botão de likes" />
          </button>
        </SectionLikes>
        </SectionCommentsAndLikes>
      </Container>
    ));
  };

  return (
    <>
      <MainContainer>
        <Header />
        <FixedContainer>
        <CardsContainer>{getPosts()}</CardsContainer>
        <FormContainer onSubmit={sendComments}>
          <textarea
            rows="5"
            name="content"
            value={form.content}
            placeholder="Adicionar comentário..."
            onChange={onChangeInputs}
          />
          <button className="button-primary">Responder</button>
        </FormContainer>
        <GradientHR />
        <CardsContainer>{getComments()}</CardsContainer>
        </FixedContainer>
      </MainContainer>
    </>
  );
}
