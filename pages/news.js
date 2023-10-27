import { getNewsData } from "./api/news";
import styles from "./index.module.css";
export default function NewsPage({ articles }) {
  return (
    <div>
      {articles.map((article, index) => (
        <div key={index}>
          <h2>{article.title}</h2>
          <img
            className={styles.imgView}
            src={article.urlToImage}
            alt={article.title}
          />
          <p>{article.description}</p>
          <a href={article.url}>Read more</a>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const articles = await getNewsData();
  return {
    props: {
      articles,
    },
    revalidate: 10, // Optional: Re-generate the data every 10 seconds
  };
}
