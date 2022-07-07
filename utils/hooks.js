// import {
//   MutationOptions,
//   queryCache,
//   useMutation,
// } from "react-query";
// import { userLogin, userSignup } from "../api/user";
// import {
//   CreateUserInput,
//   User,
// } from "./types";

// export const useSignupMutation = (
//   options?: MutationOptions<User, CreateUserInput, Error, unknown>
// ) =>
//   useMutation(userSignup, {
//     onSuccess: (data, variables) => {
//       queryCache.setQueryData("me", data);
//       options?.onSuccess && options.onSuccess(data, variables);
//     }
//   });