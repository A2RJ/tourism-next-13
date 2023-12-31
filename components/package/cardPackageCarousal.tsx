"use client";

import {
  createStyles,
  Card,
  Text,
  Group,
  getStylesRef,
  rem,
  Badge,
  Tooltip,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PackageType } from "@/types/package";

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

export function CardPackageCarousal({ item }: { item: PackageType }) {
  const { classes } = useStyles();
  const [isCoverLoaded, setIsCoverLoaded] = useState(false);
  const [slides, setSlides] = useState<JSX.Element[]>([]);

  useEffect(() => {
    if (isCoverLoaded) {
      const additionalSlides = images.map((image) => (
        <Carousel.Slide key={image}>
          <Image
            alt="thumbnail"
            src={image}
            width={0}
            height={0}
            className="w-full h-56 object-cover"
          />
        </Carousel.Slide>
      ));
      setSlides(additionalSlides);
    }
  }, [isCoverLoaded]);

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
          <Carousel.Slide>
            <Badge className="fixed top-0 right-0 m-1" variant="light">
              {item.discount.discount_percentage}% off
            </Badge>
            <Image
              alt="thumbnail"
              src={
                "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
              }
              width={0}
              height={0}
              className="w-full h-56 object-cover"
              priority
              onLoad={(e) => setIsCoverLoaded(true)}
            />
          </Carousel.Slide>
          {slides}
        </Carousel>
      </Card.Section>

      <Link href={`/detail/${item.package_name}`}>
        <Group position="apart" mt="lg">
          <Tooltip label={item.package_name}>
            <Text fw={500} fz="lg">
              {item.package_name.slice(0, 18)}...
            </Text>
          </Tooltip>

          <Group spacing={5}>
            <Star size="1rem" />
            <Text fz="xs" fw={500}>
              4.78
            </Text>
          </Group>
        </Group>

        <Text fz="sm" c="dimmed" mt="sm">
          {item.description.slice(0, 100)}...
        </Text>

        <div className="flex justify-between items-center">
          <div className="flex flex-row mt-5">
            <p className={cn(classes.price, "font-semibold")}>
              RP. {item.price}
            </p>
            <p className="font-light text-xs mt-2">/Person</p>
          </div>
        </div>
      </Link>
    </Card>
  );
}
