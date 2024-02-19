import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { goToCommentPage } from "../../routes/cordinator";
import { useNavigate } from "react-router-dom";
import commentIcon from "../../assets/commentIcon.svg";
import likeIcon from "../../assets/likeIcon.svg";
import dislikeIcon from "../../assets/dislikeIcon.svg";
import { BASE_URL } from "../../constants/urls";
import useProtectedPage from "../../hooks/useProtectedPage";
import axios from "axios";
import useForm from "../../hooks/useForm";
import { toast } from "react-toastify";
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
} from "./PostPage.styles";

export default function PostPage() {
  useProtectedPage();
  const navigate = useNavigate();


  const { form, onChangeInputs, setForm } = useForm({ content: "" });

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
  }, []);

  const createPost = async () => {
    const body = {
      content: form.content,
    };

    try {
      await axios.post(`${BASE_URL}/posts`, body, token);
    } catch (error) {
      console.log(error.message);
    }
  };

  const like = async (idToPost) => {
    const body = {
      like: true,
    };

    try {
      await axios.put(`${BASE_URL}/posts/${idToPost}/like`, body, token);
      getPosts();
    } catch (error) {
      toast.error(error.response.data, {
        toastId: 1,
        style: { width: "200px", height: "90px" },
        position: "top-center",
      });
      console.log(error);
    }
  };

  const dislike = async (idToPost) => {
    const body = {
      like: false,
    };

    try {
      await axios.put(`${BASE_URL}/posts/${idToPost}/like`, body, token);
      getPosts();
    } catch (error) {
      toast.error(error.response.data, {
        toastId: 1,
        style: { width: "200px", height: "90px"},
        position: "top-center",
      });
      console.log(error.message);
    }
  };

  const sendPost = (e) => {
    e.preventDefault();
    console.log(e);
    createPost();
    getPosts();
    setForm({ ...form, content: "" });
  };

  

  const cardPost = () =>
    post.map((p) => {
      return (
        <Container key={p.id}>
          <p>Enviado por{" "}:{" "}{p.creator?.creatorName}</p>
          <h2>{p.content}</h2>

          <SectionCommentsAndLikes>
            <SectionLikes>
              <button onClick={() => like(p.id)}>
                <img  src={likeIcon} alt="Botão de likes"/>
              </button>

              <h3>{p.likes}</h3>

              <button onClick={() => dislike(p.id)}>
                <img src={dislikeIcon} alt="Botão de dislikes" />
              </button>
            </SectionLikes>

            <SectionComment>
              <button onClick={() => goToCommentPage(navigate, p.id)}>
                <img src={commentIcon} alt="Icone de comentários" />
                <p>{p.commentLength}</p>
              </button>
            </SectionComment>
          </SectionCommentsAndLikes>
        </Container>
      );
    });

  return (
    <>
      <MainContainer>
        <Header />

      <FixedContainer>
        <FormContainer onSubmit={sendPost}>
          <textarea
            rows="5"
            name="content"
            value={form.content}
            onChange={onChangeInputs}
            placeholder="Escreva seu post..."
          />
          <button className="button-primary">Postar</button>
        </FormContainer>

        <GradientHR />

        <CardsContainer>{cardPost()}</CardsContainer>
        </FixedContainer>
      </MainContainer>
    </>
  );
}
