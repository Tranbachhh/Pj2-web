import { useState } from "react";
import Toolbar from "../Layout/Toolbar/Toolbar";
import Footer from "../Layout/Footer/Footer";

function Login({ path = null }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
    <Toolbar />
    <div className="col-3 m-auto mt-5 mb-5 bg-light p-4">
      <div className="form-container">
        <form>
          <h4 className="title">LOGIN FORM</h4>
          <div className="mb-3 form-group">
            <label htmlFor="userNameInput" className="form-label">
              UserName
            </label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="form-control"
              id="userNameInput"
              placeholder="Enter your userName"
              required
            />
          </div>

          <div className="mb-3 form-group">
            <label htmlFor="passwordInput" className="form-label">
              Passowrd
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="passwordInput"
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary auth-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Login;
