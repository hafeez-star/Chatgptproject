
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

const Register = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async () => {

    try {

      await createUserWithEmailAndPassword(auth, email, password);

      alert("Account Created 😎");

    } catch (error) {

      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-5">

      <div className="bg-white p-10 rounded-3xl shadow w-full max-w-md">

        <h1 className="text-4xl font-bold mb-6">
          Register
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-4 rounded-xl mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-4 rounded-xl mb-4"
        />

        <button
          onClick={registerUser}
          className="w-full bg-violet-600 text-white p-4 rounded-xl"
        >
          Register
        </button>

      </div>

    </div>
  )};
export default Register;