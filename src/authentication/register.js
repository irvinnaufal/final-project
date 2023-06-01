import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Register = () => {
  let navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    image_url: "",
    email: "",
    password: "",
  });
  const handleInput = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    setInput({ ...input, [name]: value });
  };
  const handleRegister = (event) => {
    event.preventDefault();
    let { name, image_url, email, password } = input;

    axios
      .post("https://dev-example.sanbercloud.com/api/register", {
        name,
        image_url,
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        let data = res.data;
        Cookies.set("token", data.token, { expires: 1 });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  };

  

  return (
    <form onSubmit={handleRegister}>
      <section className="flex justify-center items-center h-screen bg-gray-800">
        <div className="max-w-md w-full bg-gray-900 rounded p-6 space-y-4">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-white">Registrasi</h2>
          </div>
          <div>
            <input
              className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
              type="text"
              onChange={handleInput}
              value={input.name}
              name="name"
              placeholder="Nama Lengkap"
            />
          </div>
          <div>
            <input
              className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
              type="text"
              name="image_url"
              onChange={handleInput}
              value={input.image_url}
              placeholder="image_url"
            />
          </div>
          <div>
            <input
              className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
              type="text"
              name="email"
              onChange={handleInput}
              value={input.email}
              placeholder="Email"
            />
          </div>
          <div>
            <input
              className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
              type="password"
              name="password"
              onChange={handleInput}
              value={input.password}
              placeholder="Password"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200"
            >
              Register
            </button>
          </div>
        </div>
      </section>
    </form>
  );
};

export default Register;
