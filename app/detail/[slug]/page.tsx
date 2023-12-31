"use client";

import { useState, useEffect } from "react";
import Gallery from "@/components/ui/custom/gallery";
import {
  Anchor,
  Breadcrumbs,
  Button,
  Center,
  List,
  Rating,
  Tabs,
} from "@mantine/core";
import { useCounter } from "@mantine/hooks";
import { ShoppingBag, ShoppingCart } from "lucide-react";
import { DatePicker } from "@/components/ui/date-picker";
import CardImgBackground from "@/components/mantine/card-img-background";
import Breadcrumb from "@/components/ui/breadcumb";
import Image from "next/image";
import Navbar from "@/components/ui/custom/navbar";

export default function Page({ params }: { params: { slug: string } }) {
  const [count, handlers] = useCounter(0, { min: 0 });
  const items = [
    { title: "Home", href: "#" },
    { title: "Package", href: "#" },
    { title: "Detail", href: "#" },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));

  const suggestion = [
    {
      image:
        "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "https://mantine.dev/",
      title: "Lokasi A",
      author: "Robert Gluesticker",
      views: 7847,
      comments: 5,
    },
    {
      image:
        "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "https://mantine.dev/",
      title: "Lokasi B",
      author: "Robert Gluesticker",
      views: 7847,
      comments: 5,
    },
    {
      image:
        "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "https://mantine.dev/",
      title: "Lokasi C",
      author: "Robert Gluesticker",
      views: 7847,
      comments: 5,
    },
    {
      image:
        "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "https://mantine.dev/",
      title: "Lokasi D",
      author: "Robert Gluesticker",
      views: 7847,
      comments: 5,
    },
    {
      image:
        "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "https://mantine.dev/",
      title: "Lokasi E",
      author: "Robert Gluesticker",
      views: 7847,
      comments: 5,
    },
    {
      image:
        "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "https://mantine.dev/",
      title: "Lokasi F",
      author: "Robert Gluesticker",
      views: 7847,
      comments: 5,
    },
    {
      image:
        "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "https://mantine.dev/",
      title: "Lokasi G",
      author: "Robert Gluesticker",
      views: 7847,
      comments: 5,
    },
    {
      image:
        "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "https://mantine.dev/",
      title: "Lokasi H",
      author: "Robert Gluesticker",
      views: 7847,
      comments: 5,
    },
  ];

  return (
    <div className="container">
      <Navbar />
      <Breadcrumbs>{items}</Breadcrumbs>
      <div className="grid grid-cols-2 md:grid-cols-3 space-x-4 mt-4 grid-flow-row-dense">
        <Gallery className="md:col-span-2 mb-4" />
        <div className="">
          <div className="border rounded-lg p-4 grid gap-3">
            <h2 className="font-bold text-lg">{decodeURI(params.slug)}</h2>
            <p>3 Days 2 Night</p>
            <div className="flex items-center">
              <Rating defaultValue={4} />
              <small>/70 Reviews</small>
            </div>
            <div className="inline-flex rounded-md">
              <button
                className="border px-3 py-1 rounded-l-sm"
                onClick={handlers.decrement}
              >
                -
              </button>
              <button className="border px-3 py-1">{count}</button>
              <button
                className="border px-3 py-1 rounded-r-sm"
                onClick={handlers.increment}
              >
                +
              </button>
            </div>
            <DatePicker />
            <p>Total: Rp. 450.000.00-</p>
            <div className="grid gap-3 grid-cols-1 md:grid-cols-2">
              <Button
                className="bg-mantine-primary"
                leftIcon={<ShoppingBag />}
                onClick={() => {
                  window.open(
                    "https://app.sandbox.midtrans.com/snap/v3/redirection/06c85ef5-b5e8-4775-b100-a1df43f0bf4d",
                    "_blank"
                  );
                }}
              >
                Order Now
              </Button>
              <Button variant="outline" leftIcon={<ShoppingCart />}>
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Tabs variant="outline" defaultValue="overview">
        <Tabs.List>
          <Tabs.Tab value="overview">Overview</Tabs.Tab>
          <Tabs.Tab value="settings">Rating and Reviews</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="overview" pt="xs">
          <div>
            <p className="font-bold">Description</p>
            <p className="text-slate-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
              labore, et unde quia necessitatibus provident earum porro nostrum
              mollitia molestias.
            </p>

            <p className="font-bold">Facility</p>
            <List withPadding className="text-slate-500">
              <List.Item>Clone or download repository from GitHub</List.Item>
              <List.Item>Install dependencies with yarn</List.Item>
              <List.Item>
                To start development server run npm start command
              </List.Item>
              <List.Item>
                Run tests to make sure your changes do not break the build
              </List.Item>
              <List.Item>Submit a pull request once you are done</List.Item>
            </List>
          </div>
          <div>
            <p className="font-bold">{"What's Included"}</p>
            <p className="text-slate-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
              labore, et unde quia necessitatibus provident earum porro nostrum
              mollitia molestias.
            </p>

            <p className="font-bold">Facility</p>
            <List withPadding className="text-slate-500">
              <List.Item>Clone or download repository from GitHub</List.Item>
              <List.Item>Install dependencies with yarn</List.Item>
              <List.Item>
                To start development server run npm start command
              </List.Item>
              <List.Item>
                Run tests to make sure your changes do not break the build
              </List.Item>
              <List.Item>Submit a pull request once you are done</List.Item>
            </List>
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="settings" pt="xs">
          <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
            <div className="flex justify-between p-4">
              <div className="flex space-x-4">
                <div>
                  <Image
                    src="https://source.unsplash.com/100x100/?portrait"
                    height={0}
                    width={0}
                    alt=""
                    className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Leroy Jenkins</h4>
                  <span className="text-xs dark:text-gray-400">2 days ago</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 dark:text-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                </svg>
                <span className="text-xl font-bold">4.5</span>
              </div>
            </div>
            <div className="p-4 space-y-2 text-sm dark:text-gray-400">
              <p>
                Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu
                dictum lectus consequat vitae. Etiam ut dolor id justo fringilla
                finibus.
              </p>
              <p>
                Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu
                mauris cursus venenatis. Maecenas gravida urna vitae accumsan
                feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.
              </p>
            </div>
          </div>
        </Tabs.Panel>
      </Tabs>
      <div className="border-t mt-4 mb-10">
        <div className="flex justify-between my-2">
          <p className="font-bold">Related tour</p>
          <p className="text-blue-500">Load more</p>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-2">
          {suggestion.map(
            ({ author, comments, image, link, title, views }, index) => (
              <CardImgBackground
                key={index}
                author={author}
                comments={comments}
                image={image}
                link={link}
                title={title}
                views={views}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}
