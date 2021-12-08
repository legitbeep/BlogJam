import { Box, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";

import ThemeToggle from "./ThemeToggle";

const Header = () => (
  <Flex as="header" width="full" align="center">
    <Heading as="h1" size="md" fontWeight={500}>
      <Link href="/">Blog-Jam</Link>
    </Heading>

    <Box marginLeft="auto">
      <ThemeToggle />
    </Box>
  </Flex>
);

export default Header;
