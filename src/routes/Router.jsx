import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/login/LoginPage"
import SignupPage from "../pages/signup/SignupPage";
import CommentPage from "../pages/comment/CommentPage";
import PostPage from "../pages/post/PostPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/post" element={<PostPage/>}/>
        <Route path="/comment/:id" element={<CommentPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}
