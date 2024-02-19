import { useNavigate } from "react-router-dom";
import mainLogo from "../../assets/main-logo.svg";
import { goToPostPage, goToSignupPage } from "../../routes/cordinator";
import useForm from "../../hooks/useForm";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";
import { toast } from "react-toastify";
import { ButtonsContainer, FormContainer, GradientHR, InputContainer, MainContainer } from "./Loguin.styles";


export default function LoginPage() {
  const navigate = useNavigate();

  const { form, onChangeInputs } = useForm({ email: "", senha: "" });

  const login = async () => {
    const body = {
      email: form.email,
      password: form.senha,
    };

    try {
      const response = await toast.promise(
        axios.post(`${BASE_URL}/users/login`, body),
        {
          pending: "Logando...",
          success: "Logado",
         
        },
        { style: { width: "200px", height: "40px" }, position: "top-center" }
      );
      window.localStorage.setItem("token", response.data.token);
      goToPostPage(navigate);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data, {
        style: { width: "200px", height: "40px" },
        position: "top-center",
      });
    }
  };

  const submitLoguin = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <>
    <MainContainer>
      <img src={mainLogo} alt="Logo da página" />
      <p>O projeto de rede social da Labenu</p>
     

      <FormContainer onSubmit={submitLoguin}>
        <InputContainer>
        <input
          name="email"
          type="text"
          placeholder="E-mail"
          value={form.email}
          onChange={onChangeInputs}
          required
        />
        <input
          name="senha"
          type="password"
          placeholder="Senha"
          value={form.senha}
          onChange={onChangeInputs}
          required
        />
      </InputContainer>
      <ButtonsContainer>
        <button>Continuar</button>
        
        <GradientHR />
     
        <button  className="button-secondary"
          onClick={() => {
            goToSignupPage(navigate);
          }}
        >
          Criar uma Conta
        </button>
        </ButtonsContainer>
      </FormContainer>
      </MainContainer>
    </>
  );
}
