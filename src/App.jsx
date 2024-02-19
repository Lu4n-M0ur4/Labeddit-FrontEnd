import { ToastContainer } from "react-toastify";
import Router from "./Routes/Router";
import GlobalState from "./context/GlobalState";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <GlobalState>
        <Router />
        <ToastContainer autoClose={1500}/>
      </GlobalState>
    </>
  );
}

export default App;
