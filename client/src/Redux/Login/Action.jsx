import axios from "axios";
 
import { Navigate } from "react-router-dom";

export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT"


export const loginLoading = () => ({
    type : LOGIN_LOADING
});

export const loginSuccess = (payload) => ({
    type : LOGIN_SUCCESS,
    payload
});

export const loginFailure =() => ({
    type: LOGIN_FAILURE
})

export const logout = () => ({
  type : LOGOUT
})

export const login = ({username, password}) => (dispatch)=> {
    // const dispatch = useDispatch();

    dispatch(loginLoading())
    fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
      method: "POST",
      body: JSON.stringify({username,password}),
      headers:{
        "Content-Type": "application/json"
      }
    })
    .then((res) => res.json())
    .then((res) => dispatch(loginSuccess({username,token:res.token})))
    .catch((err) => dispatch(loginFailure()))
}

export const register = (payload) => (dispatch)=> {
  // const dispatch = useDispatch();

  dispatch(loginLoading())
  fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
    method: "POST",
    body: JSON.stringify(payload),
    headers:{
      "Content-Type": "application/json"
    }
  })
  .then((res) => res.json())
  .then((res) => {console.log(res); alert(res.message) ; <Navigate to={"/"}/>})
  // .then((res) => alert(res.message))
  // .then((res) => dispatch(loginSuccess(res)))
  .catch((err) => dispatch(loginFailure()))

 
}