import {
  createStyles,
  Card,
  Text,
  Group,
  getStylesRef,
  rem,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { Star, User2 } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState, Suspense, lazy } from "react";

const useStyles = createStyles((theme) => ({
  price: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  carousel: {
    "&:hover": {
      [`& .${getStylesRef("carouselControls")}`]: {
        opacity: 1,
      },
    },
  },

  carouselControls: {
    ref: getStylesRef("carouselControls"),
    transition: "opacity 150ms ease",
    opacity: 0,
  },

  carouselIndicator: {
    width: rem(4),
    height: rem(4),
    transition: "width 250ms ease",

    "&[data-active]": {
      width: rem(16),
    },
  },
}));

const images = [
  "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  "https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
];

export function CardPackageCarousal({
  name,
  cover,
}: {
  name: string;
  cover: string;
}) {
  const { classes } = useStyles();

  const listImages = [cover];
  // const listImages = [cover].concat(images);
  const slides = listImages.map((image) => (
    <Carousel.Slide key={image}>
      <Image
        alt="thumbnail"
        src={image}
        height={220}
        width={0}
        className="w-full h-56"
        onLoad={() => console.log("loaded")}
        onError={() => console.log("gagal")}
      />
    </Carousel.Slide>
  ));

  return (
    <Card
      radius="md"
      withBorder
      padding="xl"
      className="hover:border-blue-400 transition-colors hover:cursor-pointer"
    >
      <Card.Section>
        <Carousel
          withIndicators
          loop
          classNames={{
            root: classes.carousel,
            controls: classes.carouselControls,
            indicator: classes.carouselIndicator,
          }}
        >
          {slides}
        </Carousel>
      </Card.Section>

      <Group position="apart" mt="lg">
        <Text fw={500} fz="lg">
          Forde, {name}
        </Text>

        <Group spacing={5}>
          <Star size="1rem" />
          <Text fz="xs" fw={500}>
            4.78
          </Text>
        </Group>
      </Group>

      <Text fz="sm" c="dimmed" mt="sm">
        Relax, rejuvenate and unplug in this unique contemporary Birdbox. Feel
        close to nature in ultimate comfort. Enjoy the view of the epic mountain
        range of Blegja and the Førdefjord.
      </Text>

      <div className="flex flex-row mt-5">
        <p className={cn(classes.price, "font-semibold")}>397$</p>
        <p className="font-light text-xs mt-2">/Person</p>
      </div>
      <div></div>
    </Card>
  );
}
