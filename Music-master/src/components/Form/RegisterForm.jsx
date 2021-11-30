import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { registerUser } from "../../api/fetch_user";
import "../Form/RegisterForm.css"

const INITIAL_STATE = {
  name: "",
  lastname: "",
  email: "",
  password: "",
};

const RegisterForm = () => {
  const history = useHistory();
  const [registerForm, setRegisterForm] = useState(INITIAL_STATE);
  const [error, setError] = useState(null);

  const submitForm = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await registerUser(registerForm);
      setRegisterForm(INITIAL_STATE);
      setError("");
      history.push("/register");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setRegisterForm({ ...registerForm, [name]: value });
  };

  return (
    <div className="register">
      <form onSubmit={submitForm} >
      <div className="Input_Container ">
      👤
        <input className="input" type="text" name="name" value={registerForm.name} onChange={handleInput} placeholder="Nombre"/>
      </div>
      <div> 
      👤
        <input className="input" type="text" name="lastname" value={registerForm.lastname} onChange={handleInput} placeholder="Apellido"/>
      </div> 
      <div>
      ✉️
        <input className="input" type="text" name="email" value={registerForm.email} onChange={handleInput} placeholder="E-mail"/>
      </div>  
      <div>
      🔑
        <input className="input" type="password" name="password" value={registerForm.password} onChange={handleInput} placeholder="Contraseña"/>
      </div>  
        <button className="button" type="submit">Registrar usuario</button>
        {error && <div style={{ color: "red" }}>{error}</div>}
      </form>
    </div>
  );
};

export default RegisterForm;