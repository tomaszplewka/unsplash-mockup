import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID lML1yonu1gXpVL4vBNNNrvktV6ABErts519zq5CHNlI",
  },
});
