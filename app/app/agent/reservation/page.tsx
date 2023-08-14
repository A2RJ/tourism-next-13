"use client";

import { RESERVATION_URL } from "@/action/api_url";
import { Separator } from "@/components/ui/separator";
import { ApiResponse, ReservationType } from "@/types/package";
import axios from "axios";
import { Download } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Page() {
  const [reservation, setReservation] =
    useState<ApiResponse<ReservationType[]>>();

  useEffect(() => {
    const fecth = async () => {
      const { data } = await axios.get(`${RESERVATION_URL}/admin`);
      setReservation(data);
    };
    fecth();
  }, [reservation?.meta.current_page]);

  const Table = ({ item }: { item: ReservationType }) => {
    return (
      <tr>
        <td className="h-px w-px whitespace-nowrap">
          <div className="pl-6 py-3">
            <label className="flex">
              <input
                type="checkbox"
                className="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
              />
              <span className="sr-only">Checkbox</span>
            </label>
          </div>
        </td>
        <td className="h-px w-px whitespace-nowrap">
          <div className="pl-6 lg:pl-3 xl:pl-0 pr-6 py-3">
            <div className="flex items-center gap-x-3">
              {item.payment_status === "Active" ? (
                <span className="inline-flex items-center justify-center h-[2.375rem] w-[2.375rem] rounded-full bg-gray-300 dark:bg-gray-700">
                  <span className="font-medium text-gray-800 leading-none dark:text-gray-200">
                    {item.user.name.charAt(0)}
                  </span>
                </span>
              ) : (
                <Image
                  width={0}
                  height={0}
                  className="inline-block h-[2.375rem] w-[2.375rem] rounded-full"
                  src={item.user.name}
                  alt="Image Description"
                />
              )}
              <div className="grow">
                <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                  {item.user.name}
                </span>
                <span className="block text-sm text-gray-500">
                  {item.user.email}
                </span>
              </div>
            </div>
          </div>
        </td>
        <td className="h-px w-72 whitespace-nowrap">
          <div className="px-6 py-3">
            <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
              {item.package.package_name}
            </span>
          </div>
        </td>
        <td className="h-px w-px whitespace-nowrap">
          <div className="px-6 py-3">
            <span
              className={`inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium ${
                item.payment_status === "Active"
                  ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                  : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
              }`}
            >
              <svg
                className="w-2.5 h-2.5"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
              </svg>
              {item.payment_status}
            </span>
          </div>
        </td>
        <td className="h-px w-px whitespace-nowrap">
          <div className="px-6 py-3">
            <div className="flex items-center gap-x-3">
              <span className="text-xs text-gray-500">{item.revenue}</span>
            </div>
          </div>
        </td>
        <td className="h-px w-px whitespace-nowrap">
          <div className="px-6 py-3">
            <span className="text-sm text-gray-500">{item.created_at}</span>
          </div>
        </td>
        <td className="h-px w-px whitespace-nowrap">
          <div className="px-6 py-1.5">
            <a
              className="inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 hover:underline font-medium"
              href="#"
            >
              Edit
            </a>
          </div>
        </td>
      </tr>
    );
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            Reservations
          </h2>
          <p className="text-sm text-muted-foreground">
            Manage your reservation by customers easily.
          </p>
        </div>
      </div>
      <Separator className="mt-4" />
      <>
        {/* Card Section */}
        <div className="mt-4">
          {/* Grid */}
          <div className="grid md:grid-cols-4 border border-gray-200 shadow-sm rounded-xl overflow-hidden dark:border-gray-700">
            {/* Card */}
            <a
              className="block p-4 md:p-5 relative bg-white hover:bg-gray-50 before:absolute before:top-0 before:left-0 before:w-full before:h-px md:before:w-px md:before:h-full before:bg-gray-200 before:first:bg-transparent dark:bg-slate-900 dark:hover:bg-slate-800 dark:before:bg-gray-700"
              href="#"
            >
              <div className="flex md:grid lg:flex gap-y-3 gap-x-5">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
                </svg>
                <div className="grow">
                  <p className="text-xs uppercase tracking-wide font-medium text-gray-800 dark:text-gray-200">
                    Total users
                  </p>
                  <h3 className="mt-1 text-xl sm:text-2xl font-semibold text-blue-600 dark:text-blue-500">
                    72,540
                  </h3>
                  <div className="mt-1 flex justify-between items-center">
                    <p className="text-sm text-gray-500">
                      from{" "}
                      <span className="font-semibold text-gray-800 dark:text-gray-200">
                        70,104
                      </span>
                    </p>
                    <span className="ml-1 inline-flex items-center gap-1.5 py-1 px-2 rounded-md text-xs font-medium bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                      <svg
                        className="inline-block w-3 h-3 self-center"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"
                        />
                      </svg>
                      <span className="inline-block">12.5%</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            {/* End Card */}
            {/* Card */}
            <a
              className="block p-4 md:p-5 relative bg-white hover:bg-gray-50 before:absolute before:top-0 before:left-0 before:w-full before:h-px md:before:w-px md:before:h-full before:bg-gray-200 before:first:bg-transparent dark:bg-slate-900 dark:hover:bg-slate-800 dark:before:bg-gray-700"
              href="#"
            >
              <div className="flex md:grid lg:flex gap-y-3 gap-x-5">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 1.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1-.5-.5zm2.5.5v1a3.5 3.5 0 0 0 1.989 3.158c.533.256 1.011.791 1.011 1.491v.702c0 .7-.478 1.235-1.011 1.491A3.5 3.5 0 0 0 4.5 13v1h7v-1a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351v-.702c0-.7.478-1.235 1.011-1.491A3.5 3.5 0 0 0 11.5 3V2h-7z" />
                </svg>
                <div className="grow">
                  <p className="text-xs uppercase tracking-wide font-medium text-gray-800 dark:text-gray-200">
                    Sessions
                  </p>
                  <h3 className="mt-1 text-xl sm:text-2xl font-semibold text-blue-600 dark:text-blue-500">
                    29.4%
                  </h3>
                  <div className="mt-1 flex justify-between items-center">
                    <p className="text-sm text-gray-500">
                      from{" "}
                      <span className="font-semibold text-gray-800 dark:text-gray-200">
                        29.1%
                      </span>
                    </p>
                    <span className="ml-1 inline-flex items-center gap-1.5 py-1 px-2 rounded-md text-xs font-medium bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                      <svg
                        className="inline-block w-3 h-3 self-center"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"
                        />
                      </svg>
                      <span className="inline-block">1.7%</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            {/* End Card */}
            {/* Card */}
            <a
              className="block p-4 md:p-5 relative bg-white hover:bg-gray-50 before:absolute before:top-0 before:left-0 before:w-full before:h-px md:before:w-px md:before:h-full before:bg-gray-200 before:first:bg-transparent dark:bg-slate-900 dark:hover:bg-slate-800 dark:before:bg-gray-700"
              href="#"
            >
              <div className="flex md:grid lg:flex gap-y-3 gap-x-5">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.75 1a.75.75 0 0 1 .75.75V8a.5.5 0 0 0 1 0V5.467l.086-.004c.317-.012.637-.008.816.027.134.027.294.096.448.182.077.042.15.147.15.314V8a.5.5 0 1 0 1 0V6.435a4.9 4.9 0 0 1 .106-.01c.316-.024.584-.01.708.04.118.046.3.207.486.43.081.096.15.19.2.259V8.5a.5.5 0 0 0 1 0v-1h.342a1 1 0 0 1 .995 1.1l-.271 2.715a2.5 2.5 0 0 1-.317.991l-1.395 2.442a.5.5 0 0 1-.434.252H6.035a.5.5 0 0 1-.416-.223l-1.433-2.15a1.5 1.5 0 0 1-.243-.666l-.345-3.105a.5.5 0 0 1 .399-.546L5 8.11V9a.5.5 0 0 0 1 0V1.75A.75.75 0 0 1 6.75 1zM8.5 4.466V1.75a1.75 1.75 0 1 0-3.5 0v5.34l-1.2.24a1.5 1.5 0 0 0-1.196 1.636l.345 3.106a2.5 2.5 0 0 0 .405 1.11l1.433 2.15A1.5 1.5 0 0 0 6.035 16h6.385a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.271-2.715a2 2 0 0 0-1.99-2.199h-.581a5.114 5.114 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.632 2.632 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046l-.048.002zm2.094 2.025z" />
                </svg>
                <div className="grow">
                  <p className="text-xs uppercase tracking-wide font-medium text-gray-800 dark:text-gray-200">
                    Avg. Click Rate
                  </p>
                  <h3 className="mt-1 text-xl sm:text-2xl font-semibold text-blue-600 dark:text-blue-500">
                    56.8%
                  </h3>
                  <div className="mt-1 flex justify-between items-center">
                    <p className="text-sm text-gray-500">
                      from{" "}
                      <span className="font-semibold text-gray-800 dark:text-gray-200">
                        61.2%
                      </span>
                    </p>
                    <span className="ml-1 inline-flex items-center gap-1.5 py-1 px-2 rounded-md text-xs font-medium bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                      <svg
                        className="inline-block w-3 h-3 self-center"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                        />
                      </svg>
                      <span className="inline-block">4.4%</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            {/* End Card */}
            {/* Card */}
            <a
              className="block p-4 md:p-5 relative bg-white hover:bg-gray-50 before:absolute before:top-0 before:left-0 before:w-full before:h-px md:before:w-px md:before:h-full before:bg-gray-200 before:first:bg-transparent dark:bg-slate-900 dark:hover:bg-slate-800 dark:before:bg-gray-700"
              href="#"
            >
              <div className="flex md:grid lg:flex gap-y-3 gap-x-5">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                </svg>
                <div className="grow">
                  <p className="text-xs uppercase tracking-wide font-medium text-gray-800 dark:text-gray-200">
                    Pageviews
                  </p>
                  <h3 className="mt-1 text-xl sm:text-2xl font-semibold text-blue-600 dark:text-blue-500">
                    92,913
                  </h3>
                  <div className="mt-1 flex justify-between items-center">
                    <p className="text-sm text-gray-500">
                      from{" "}
                      <span className="font-semibold text-gray-800 dark:text-gray-200">
                        94,012
                      </span>
                    </p>
                    <span className="ml-1 inline-flex items-center gap-1.5 py-1 px-2 rounded-md text-xs font-medium bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                      <svg
                        className="inline-block w-3 h-3 self-center"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                        />
                      </svg>
                      <span className="inline-block">0.1%</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            {/* End Card */}
          </div>
          {/* End Grid */}
        </div>
        {/* End Card Section */}
      </>

      <>
        <div className="mt-4">
          <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
              <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
                  <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                        Reservation list
                      </h2>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        You can edit and more.
                      </p>
                    </div>
                    <div>
                      <div className="inline-flex gap-x-2">
                        <a
                          className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                          href="#"
                        >
                          View all
                        </a>
                        <a
                          className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                          href="#"
                        >
                          <Download className="h-3" />
                          Download
                        </a>
                      </div>
                    </div>
                  </div>
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-slate-800">
                      <tr>
                        <th scope="col" className="pl-6 py-3 text-left">
                          <label className="flex">
                            <input
                              type="checkbox"
                              className="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                            />
                            <span className="sr-only">Checkbox</span>
                          </label>
                        </th>
                        <th
                          scope="col"
                          className="pl-6 lg:pl-3 xl:pl-0 pr-6 py-3 text-left"
                        >
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                              Name
                            </span>
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3 text-left">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                              Package Name
                            </span>
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3 text-left">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                              Status
                            </span>
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3 text-left">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                              Revenue
                            </span>
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3 text-left">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                              Created
                            </span>
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3 text-right" />
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      {reservation?.data.map((item: any) => (
                        <Table key={item.id} item={item} />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
