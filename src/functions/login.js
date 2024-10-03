import axios from "axios";

export const login = async (email, password) => {
  const data = new URLSearchParams();

  data.append("email", email);
  data.append("password", password);

  const response = await axios.post(
    "https://2v234d7xc7.execute-api.us-east-1.amazonaws.com/default/login",
    data,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  return response;
};
