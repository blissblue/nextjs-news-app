import axios from "axios";

export async function getNewsData() {
  const response = await axios.get(
    `https://newsapi.org/v2/everything?q=tesla&from=2023-09-27&sortBy=publishedAt&apiKey=${process.env.NEWS_API_KEY}`
  );
  return response.data.articles;
}
