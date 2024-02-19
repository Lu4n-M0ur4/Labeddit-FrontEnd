import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg";
import xIcon from "../assets/xIcon.svg";
import { goToPostPage } from "../routes/cordinator";
import { HeaderPage } from "./Header.styles";

export default function Header() {
  const navigate = useNavigate;
  if (window.location.href.includes("/signup")) {
    return (
      <>
        <HeaderPage>
          <div></div>
          <img src={Logo} alt="Logo Labbedit" />
          <Link to={"/login"}style={{textDecoration:'none'}}>
            <p>Entrar</p>
          </Link>
        </HeaderPage>
      </>
    );
  } else if (window.location.href.includes("/post")) {
    return (
      <>
        <HeaderPage>
          <div className="gamb-arra"></div>
          <img src={Logo} alt="Logo Labbedit" />
          <Link to={"/login"}style={{textDecoration:'none'}} onClick={() => localStorage.removeItem("token")}>
            <p>
            Logout
            </p>
          </Link>
        </HeaderPage>
      </>
    );
  } else {
    return (
      <>
        <HeaderPage>
          <Link to={"/post"}>
            <img
              src={xIcon}
              alt="Link de redirecionamento para página de post"
            />
          </Link>
          <img
            src={Logo}
            alt="Logo Labbedit"
            onClick={() => goToPostPage(navigate)}
          />
          <Link to={"/login"}style={{textDecoration:'none'}} onClick={() => localStorage.removeItem("token")}>
            <p>
            Logout
            </p>
          </Link>
        </HeaderPage>
      </>
    );
  }
}
