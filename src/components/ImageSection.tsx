import { Box, useColorMode, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

import { Merge } from "types/merge";

const ImageSection = ({ post, id }: Merge<POSTOBJ, { id: string }>) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Box
        backgroundColor={colorMode === "light" ? "gray.200" : "gray.700"}
        padding={4}
        borderRadius={4}
        margin="25px 0px"
        boxShadow="base"
      >
        <Box d="flex" alignItems="center" fontSize="sm">
          <Link passHref href={`/post/${id}`}>
            <ChakraLink
              as="h2"
              fontSize="xl"
              fontWeight="bold"
              margin="0 0 10px 0"
            >
              {post.title}
            </ChakraLink>
          </Link>
        </Box>
        <Box d="flex" alignItems="center" fontSize="sm">
          {post.description?.slice(0, 300)}...
        </Box>
      </Box>
    </>
  );
};

export default ImageSection;
