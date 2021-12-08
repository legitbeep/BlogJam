import { NextPageContext } from "next";
import axios from "axios";
import { GetStaticProps } from "next";
import Link from "next/link";
import {
  Heading,
  Link as ChakraLink,
  Box,
  useColorMode,
} from "@chakra-ui/react";
import { ParsedUrlQuery } from "querystring";
import MarkdownIt from "markdown-it";

interface Context extends ParsedUrlQuery {
  id: string;
}

const Post = ({ post }: { post: POSTDATA }) => {
  const { colorMode } = useColorMode();
  const md = new MarkdownIt();
  const htmlContent = md.render(post.attributes.content);

  return (
    <>
      <Link passHref href="/">
        <ChakraLink as="h4" margin="40px 0 10px 0" fontSize="md">
          Back
        </ChakraLink>
      </Link>

      <Heading as="h1" fontSize="3xl" margin="0 0 70px 0px">
        {post.attributes.title}
      </Heading>

      <Box
        margin="50px 0px"
        borderRadius={4}
        alignItems="center"
        fontSize="lg"
        backgroundColor={colorMode === "light" ? "gray.200" : "gray.700"}
      >
        <Box padding={4}>{post.attributes.description}</Box>
      </Box>

      <Box
        margin="50px 0px"
        alignItems="center"
        fontSize="xl"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      ></Box>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (query) => {
  const { id } = query.params as Context;
  console.log(query);
  const data = await axios.get(`http://localhost:1337/api/posts/${id}`);
  return {
    props: {
      post: data?.data?.data,
    },
  };
};

export async function getStaticPaths() {
  const posts = await axios.get("http://localhost:1337/api/posts");
  const paths = posts.data.data.map((post: POSTDATA) => {
    return { params: { id: post.id.toString() } };
  });
  return {
    paths,
    fallback: false,
  };
}

export default Post;
