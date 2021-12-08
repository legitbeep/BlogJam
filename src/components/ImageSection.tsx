import { Box, Flex, useColorMode } from "@chakra-ui/react";
import Image from "next/image";

import HelperImage from "./HelperImage";
import MotionBox from "./motion/Box";

const ImageSection = ({ post }: POSTOBJ) => {
  const { colorMode } = useColorMode();
  console.log(post);
  return (
    <>
      <Box
        backgroundColor={colorMode === "light" ? "gray.200" : "gray.500"}
        padding={4}
        borderRadius={4}
        margin="10px 0px"
      >
        <Box d="flex" alignItems="center" fontSize="sm">
          {post.title}
        </Box>
        <Box d="flex" alignItems="center" fontSize="sm">
          {post.description}
        </Box>
      </Box>
    </>
  );
};

export default ImageSection;
