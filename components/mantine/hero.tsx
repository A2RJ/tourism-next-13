"use client";

import {
  createStyles,
  Title,
  Text,
  Button,
  Container,
  rem,
} from "@mantine/core";
import SearchBar from "./searchBar";
import { ListPariwisata } from "../package/pariwisata";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    paddingTop: rem(120),

    [theme.fn.smallerThan("sm")]: {
      paddingTop: rem(80),
    },
  },

  inner: {
    position: "relative",
    zIndex: 1,
  },

  title: {
    textAlign: "center",
    fontWeight: 800,
    fontSize: rem(40),
    letterSpacing: -1,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    marginBottom: theme.spacing.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
      textAlign: "left",
    },
  },

  highlight: {
    color:
      theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 6],
  },

  description: {
    textAlign: "center",

    [theme.fn.smallerThan("xs")]: {
      textAlign: "left",
      fontSize: theme.fontSizes.md,
    },
  },
}));

export function HeroText() {
  const { classes } = useStyles();

  return (
    <Container className={classes.wrapper} size={1400}>
      <div className={classes.inner}>
        <Title className={classes.title}>
          <Text component="span" className={classes.highlight} inherit>
            Uncovering
          </Text>{" "}
          beautiful places
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" color="dimmed" className={classes.description}>
            Unveil hidden wonders and immerse yourself in breathtaking beauty
            with our curated travel experiences. Let{"'"}s embark on a journey
            of enchantment together, starting today.
          </Text>
        </Container>

        <div className="flex mt-5">
          <SearchBar className="lg:w-[70%] mx-auto" />
        </div>
      </div>
      <div className="flex gap-2 justify-center my-4 overflow-x-scroll scrollbar-none">
        {ListPariwisata.slice(0, 9).map((pariwisata) => (
          <p
            key={pariwisata.name}
            className="border py-1 px-4 cursor-pointer rounded-full hover:border-blue-300 bg-white"
          >
            {pariwisata.name}
          </p>
        ))}
      </div>
    </Container>
  );
}
