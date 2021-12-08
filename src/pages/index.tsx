import { Box } from "@chakra-ui/react";
import Head from "next/head";
import axios from "axios";

import TextSection from "components/TextSection";
import CTASection from "components/CTASection";
import ImageSection from "components/ImageSection";

const Home = ({ posts }: POSTSOBJ) => {
  console.log(posts, posts.length, "HERRRRRRRRRRRRRRRRRRRRR");
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Box mb={8} w="full">
        <TextSection />
        {posts.length &&
          posts.map((post) => (
            <ImageSection post={post.attributes} key={post.id} />
          ))}
        <CTASection />
      </Box>
    </>
  );
};

export async function getServerSideProps() {
  const data = await axios.get("http://localhost:1337/api/posts");
  const posts = data?.data?.data || [];
  return {
    props: { posts },
  };
}

export default Home;
