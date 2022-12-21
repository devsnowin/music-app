import fetcher from "./fetcher";

export const auth = (mode: "signin" | "signup", body: FormData) => {
  return fetcher(`/${mode}`, body);
};
