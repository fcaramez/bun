import axios from "axios";

async function fetchUser(username: string) {
  const res = await axios.get("https://api.github.com/users/" + username);

  return res.data;
}

export default fetchUser;
