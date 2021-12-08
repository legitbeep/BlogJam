import { Box, Heading, useBreakpointValue } from "@chakra-ui/react";

const TextSection = () => {
  const textSize = useBreakpointValue({
    base: "lg",
    sm: "xl",
  });
  return (
    <>
      <Heading as="h2" fontSize="3xl">
        Hello 👋
      </Heading>

      <Box padding={4} borderRadius={4}>
        <Box d="flex" alignItems="center" fontSize={textSize}>
          Welcome to Blog-Jam, an blog app built using a JAM stack. Feel free to
          read my blogs, I&apos;m not a blog person so you may not find much
          blogs and maybe this isn&apos;t a good spot for you if you are here
          for content 😅.
        </Box>
      </Box>
    </>
  );
};

export default TextSection;
