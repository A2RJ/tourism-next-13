"use client";

import { Center, Input, Pagination } from "@mantine/core";
import { AlertCircle, Ban, Search } from "lucide-react";
import React, { useEffect, useState } from "react";

type TableProps = {
  headers: string[];
  body: ((dataItem: any) => React.ReactNode)[];
  apiUrl?: any;
  dataTable?: Array<any>;
};

interface ApiResponse<T> {
  meta: {
    total: number;
    per_page: number;
    current_page: number;
    last_page: number;
    first_page: number;
    first_page_url: string | null;
    last_page_url: string | null;
    next_page_url: string | null;
    previous_page_url: string | null;
  };
  data: T[];
}

const Table: React.FC<TableProps> = ({ headers, body, apiUrl }) => {
  const [activePage, setPage] = useState(1);
  const [url, setUrl] = useState(apiUrl);
  const [data, setData] = useState<ApiResponse<TableProps>>({
    meta: {
      total: 0,
      per_page: 15,
      current_page: 1,
      last_page: 1,
      first_page: 1,
      first_page_url: null,
      last_page_url: null,
      next_page_url: null,
      previous_page_url: null,
    },
    data: [],
  });
  const [loading, setLoading] = useState<boolean>(false);

  const pageChanged = (e: number) => {
    setPage(e);
    setUrl(`${apiUrl}/?page=${e}`);
  };

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const responseData = await response.json();
        setTimeout(() => {
          if (JSON.stringify(responseData.data) !== JSON.stringify(data.data)) {
            setData(responseData);
          }
          setLoading(false);
        }, 5000);
      } catch (error) {
        setLoading(false);
      }
    };

    if (activePage !== data.meta.current_page) {
      fetchDataFromApi();
    }
  }, [url, data]);

  const tableBody =
    data && data.data ? (
      data.data.map((dataItem, index) => (
        <tr key={index}>
          {body.map((column, colIndex) => (
            <td
              key={colIndex}
              className="h-12 px-6 text-sm border-slate-200 stroke-slate-500 text-slate-500"
            >
              {column(dataItem)}
            </td>
          ))}
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan={headers.length}>
          <Center className="py-5">
            <AlertCircle className="w-4 mr-1" />
            <p>No data</p>
          </Center>
        </td>
      </tr>
    );

  return (
    <div className="scrollbar-none my-4">
      <Input icon={<Search />} className="mb-1" />
      <table
        className="w-full text-left border border-separate rounded border-slate-200"
        cellSpacing="0"
        border={1}
      >
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="h-12 px-6 text-sm font-medium border-l stroke-slate-700 text-slate-700 bg-slate-100"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={headers.length}>
                <Center className="py-5">
                  <p>Loading</p>
                </Center>
              </td>
            </tr>
          ) : (
            tableBody
          )}
        </tbody>
      </table>
      <Pagination
        onChange={pageChanged}
        total={data.meta.last_page}
        siblings={1}
        value={activePage}
        disabled={loading}
        className="mt-1 float-right"
      />
    </div>
  );
};

export default Table;
