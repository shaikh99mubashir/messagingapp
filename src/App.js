import Chats from "./component/Chats";
import { Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import * as firebase from "./firebaseConfig"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Messages from "./component/Messages";

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/chats" element={<Chats/>}/>
    </Routes>
    </div>
  );
}

export default App;
