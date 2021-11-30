const BASE_URL = "http://localhost:3000";
//PICTURES
const MUSIC = `${BASE_URL}/music`;

const token = localStorage.getItem("token");
/*const tokenParsed = token.replaceAll('"', "");*/

const getMusic = async () => {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Authorization": `Bearer ${token}`
  };

  const music = await fetch(MUSIC, {
    method: "GET",
    credentials: "include",
    headers: headers,
  });
  const resMusic = await music.json();
  console.log(resMusic);
  return resMusic;
};

export default getMusic;