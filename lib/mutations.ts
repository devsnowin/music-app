import fetcher from "./fetcher";

export const auth = (mode: "signin" | "signup", body: FormData) => {
  return fetcher(`/${mode}`, body);
};

export const signout = async () => {
  const res = await fetch(`${window.location.origin}/api/signout`, {
    method: "POST",
    credentials: "include",
  });

  if (res.status > 399 && res.status < 200) {
    throw new Error();
  }

  const jsonData = await res.json();
  return jsonData.message;
};
