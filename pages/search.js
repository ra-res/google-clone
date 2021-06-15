import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Response from "../response";
import SearchResults from "../components/SearchResults";
import Footer from "../components/Footer";

function Search({ results }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
      </Head>
      <Header />
      <SearchResults results={results} />
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const useDummyData = true;
  const startIndex = context.query.start || "0";

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      )
        .then((response) => response.json())
        .catch((err) => {
          console.error(err);
        });
  // once rendered, pass results to client
  return {
    props: {
      results: data,
    },
  };
}
