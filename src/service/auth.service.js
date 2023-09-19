import axios from "axios";
import { useNavigate } from "react-router-dom";
const API_URL = "http://localhost:9099";

const register = (userData) => {
  const user = JSON.stringify(userData);
  let customConfig = {
      headers: {
      'Content-Type': 'application/json'
      }
  };

  //const json = JSON.stringify(userData);
  return axios.post(API_URL + "/api/auth/signup", user, customConfig );
};

const login = (email, password) => {
  return axios
    .post(API_URL + "/api/auth/signin", {
      email,
      password,
    })
    .then((response) => {
      if (response.data) {
        localStorage.setItem("token", JSON.stringify(response.data.token));
        localStorage.setItem("email", JSON.stringify(response.data.email));
      }
      return response.data;
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response.data); // => the response payload
      }
    });
};

const getLoggedInUserDetails = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  // const headers = { Authorization: `Bearer ${token}` };
  // const params = {
  //   email:  JSON.parse(localStorage.getItem("email"))
  // };
  // let config = {
  //   headers: { Authorization: `Bearer ${token}` },
  //   params: {
  //     email: JSON.parse(localStorage.getItem("email")),
  //   },
  // };
  // axios.defaults.headers.common = {
  //   'Authorization': 'Bearer ' + token
  // };
  //axios.defaults.headers.common['Authorization'] = token;
  

  return axios
    .get(API_URL + "/user/getByEmail",  {
      headers: {
      'Authorization':'Bearer '+token,
      'Content-Type':'application/json'
      },
      params: {
        email: JSON.parse(localStorage.getItem("email")),
      }
    })
    .then((response) => {
      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data.data));
      }
      return response.data.data;
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response.data); // => the response payload
      }
    });
};

const getAllUserDetails = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  return axios
    .get(API_URL + "/user/all",  {
      headers: {
      'Authorization':'Bearer '+token,
      'Content-Type':'application/json'
      }
    })
    .then((response) => {
      if (response.data) {
        localStorage.setItem("users", JSON.stringify(response.data.data));
      }
      return response.data.data;
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response.data); // => the response payload
      }
    });
};
const logout = () => {
  localStorage.removeItem("user");
 
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  getLoggedInUserDetails,
  login,
  logout,
  getCurrentUser,
  getAllUserDetails
};

export default AuthService;
