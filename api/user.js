// import { CreateUserInput, User, UserLoginInput } from "../utils/types";

// export const userSignup = async (data: CreateUserInput) => {
//   const response = await client
//     .post(`${process.env.REACT_APP_API_URL}/user/signup`)
//     .send(data)
//     .catch((err) => {
//       throw new Error(err.response.body.message);
//     });
//   localStorage.setItem("authToken", response.body.token);

//   return response.body.user;
// };