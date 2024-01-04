import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from "./components/auth/SignUp";
import Login from "./components/auth/Login";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  return (
    <>
      {/* <AuthState> */}
        {/* <NoteState> */}
          <BrowserRouter>
            <NavBar />
            <div className="mt-5 pt-3">
              <Routes>
                <Route exact path="/" element={<Login />} />
                <Route exact path="/signup" element={<SignUp />} />
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/About" element={<About />} />
              </Routes>
            </div>
          </BrowserRouter>
        {/* </NoteState> */}
      {/* </AuthState> */}
    </>
  )
}

export default App;
