import { useNavigate } from "react-router-dom";
import { goToPostPage } from "../../routes/cordinator";
import Header from "../../components/Header";
import useForm from "../../hooks/useForm";
import mainLogo from "../../assets/main-logo.svg";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";
import { toast } from "react-toastify";
import { FormContainer, InputContainer, MainContainer, SectionContainer, Title } from "./SignupPage.styles";

export default function SignupPage() {
  const navigate = useNavigate();

  const { form, onChangeInputs } = useForm({
    apelido: "",
    email: "",
    senha: "",
  });

  const sendSignup = async () => {
    const body = {
      name: form.apelido,
      email: form.email,
      password: form.senha,
    };

    try {
      const response = await toast.promise(
        axios.post(`${BASE_URL}/users/signup`, body),
        {
          pending: "Acessando nosso banco...",
          success: "Cadastro realizado com sucesso",
        },
        { style: { width: "200px", height: "90px" }, position: "top-center" }
      );
      window.localStorage.setItem("token", response.data.token);
      goToPostPage(navigate);
    } catch (error) {
      console.log(error.message);
      toast.error(error.response.data, {
        style: { width: "200px", height: "90px" },
        position: "top-center",
      });
    }
  };

  const enviarSignup = (e) => {
    e.preventDefault();
    sendSignup();
  };

  return (
    <>
      <MainContainer>
        <Header />
        <Title>
        <img src={mainLogo} alt="Logo da página" />
        <h1>Olá, boas vindas ao LabEddit ;) </h1>
        </Title>
       
        <FormContainer onSubmit={enviarSignup}>
        <InputContainer>
          <input
            name="apelido"
            value={form.apelido}
            placeholder="Apelido"
            onChange={onChangeInputs}
            required
          />
          <input
            name="email"
            value={form.email}
            placeholder="E-mail"
            onChange={onChangeInputs}
            required
          />
          <input
            name="senha"
            type="password"
            value={form.senha}
            placeholder="Senha"
            onChange={onChangeInputs}
            required
          />
          </InputContainer>
          <SectionContainer>
            <h2>
              Ao continuar, você concorda com o nosso <a href="link_do_contrato">Contrato de usuário</a>  e
              nossa <a href="link_do_contrato">Política de Privacidade</a>
            </h2>
            <label>
            <input type="checkbox" required />
              Eu concordo em receber emails sobre coisas legais no Labeddit
            </label>
          </SectionContainer>
          <button >Cadastrar</button>
       
        </FormContainer>
      </MainContainer>
    </>
  );
}
//
