const api_key = "ad2c28e0345278f3c8b002efddadf28f";
export const fetchData = async (route: string) => {
  const url = `https://api.themoviedb.org/3/movie/${route}?api_key=${api_key}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export const postData = async (url: string, body: any) => {
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
  });

  const data = await res.json();

  return data;
};
