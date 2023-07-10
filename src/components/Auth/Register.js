import { useState } from "react";
import Toolbar from "../Layout/Toolbar/Toolbar";
import Footer from "../Layout/Footer/Footer";
function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
    <Toolbar />
      <div className="col-3 m-auto mt-5 mb-5 bg-light p-4">
        <form>
          <h4 className="title">REGISTER FORM</h4>
          <div className="mb-3">
            <label htmlFor="firstNameInput" className="form-label">
              First Name
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="form-control"
              id="firstNameInput"
              placeholder="Enter your first name"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="lastNameInput" className="form-label">
              LastName
            </label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="form-control"
              id="lastNameInput"
              placeholder="Enter your last name"
              required
            />
          </div>

          <div className="mb-3">
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

          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="emailInput"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-3">
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

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <Footer/>
    </>
  );
}

export default Register;
