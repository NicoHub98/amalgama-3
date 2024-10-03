import { useState } from "react";
import { login } from "./functions/login";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="flex flex-col border rounded-lg gap-10 p-10">
        <h1 className="text-3xl text-center">Amalgama</h1>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col gap-10"
        >
          <div className="flex flex-col gap-5">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="Email"
              id="email"
              className="border rounded p-2 focus:outline-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              className="border rounded p-2 focus:outline-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
