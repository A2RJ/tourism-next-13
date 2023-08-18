"use client";

import { bearerToken, debounce } from "@/lib/utils";
import useAuth from "@/state/useAuthStore";
import {
  Center,
  Group,
  Pagination,
  Select,
  Skeleton,
  TextInput,
} from "@mantine/core";
import axios from "axios";
import { AlertCircle, Search } from "lucide-react";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useDebounce } from "usehooks-ts";

type TableProps = {
  headers: string[];
  body: ((dataItem: any) => React.ReactNode)[];
  apiUrl: any;
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
  const { token } = useAuth();
  const [loading, setLoading] = useState<boolean>(false);
  const [activePage, setPage] = useState<number>(1);
  const [error, setError] = useState<any>(false);
  const [keyword, setKeyword] = useState<string>("");
  const debouncedValue = useDebounce<string>(keyword, 500);
  const [perPage, setPerPage] = useState<number>(15);
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
  const skeleton = Array.from({ length: 15 }, (_, index) => index + 1);

  const pageChanged = (e: number) => {
    setPage(e);
    setUrl(`${apiUrl}/?page=${e}&per_page=${perPage}&keyword=${keyword}`);
  };

  const perPageChanged = (e: number) => {
    setPerPage(e);
    setPage(1);
    setUrl(`${apiUrl}/?page=1&per_page=${e}&keyword=${keyword}`);
  };

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
    setTimeout(() => {
      setUrl(`${apiUrl}/?page=1&per_page=${perPage}&keyword=${e.target.value}`);
    }, 500);
  };

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(url, {
          headers: {
            Authorization: bearerToken(token),
          },
        });
        setData(data);
        setError(false);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };

    fetchDataFromApi();
  }, [url, token]);

  const tableBody = data?.data?.map((dataItem, index) => (
    <tr key={index}>
      <td className="h-12 px-6 text-sm border-slate-200 stroke-slate-500 text-slate-500">
        {data.meta.per_page * (data.meta.current_page - 1) + index + 1}
      </td>
      {body.map((column, colIndex) => (
        <td
          key={colIndex}
          className="h-12 px-6 text-sm border-slate-200 stroke-slate-500 text-slate-500"
        >
          {column(dataItem)}
        </td>
      ))}
    </tr>
  ));

  return (
    <div className="scrollbar-none my-4">
      <div className="grid grid-cols-2 mb-2">
        <div>
          <Select
            className="w-28"
            placeholder="Show"
            searchable
            clearable
            data={[
              { value: "15", label: "15" },
              { value: "50", label: "50" },
              { value: "100", label: "100" },
            ]}
            onChange={(e) =>
              e ? perPageChanged(Number(e)) : perPageChanged(15)
            }
          />
        </div>
        <TextInput
          placeholder="Search"
          rightSection={<Search className="w-5 text-slate-400" />}
          onChange={debounce((e) => {
            onSearch(e);
          }, 500)}
        />
      </div>
      <table
        className="w-full text-left border border-separate rounded border-slate-200"
        cellSpacing="0"
        border={1}
      >
        <thead>
          <tr>
            <th className="h-12 px-6 text-sm font-medium border-l stroke-slate-700 text-slate-700 bg-slate-100">
              No
            </th>
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
          {loading &&
            skeleton.map((item, index) => (
              <tr key={index}>
                <td colSpan={headers.length + 1} className="p-1">
                  <Skeleton height={40} />
                </td>
              </tr>
            ))}
          {data.data && tableBody}
          {!loading && data.data?.length == 0 && (
            <tr>
              <td colSpan={headers.length}>
                <Center className="py-5">
                  <AlertCircle className="w-4 mr-1" />
                  <p>No data</p>
                </Center>
              </td>
            </tr>
          )}
          {error && (
            <tr>
              <td colSpan={headers.length}>
                <Center className="py-5">
                  <AlertCircle className="w-4 mr-1" />
                  <p>Ups! something error</p>
                </Center>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="flex justify-between items-center">
        {loading && (
          <Group position="right" className="gap-2 mt-1">
            <Skeleton width={32} height={32} />
            <Skeleton width={32} height={32} />
            <Skeleton width={32} height={32} />
            <Skeleton width={32} height={32} />
            <Skeleton width={32} height={32} />
          </Group>
        )}
        {data.data && (
          <>
            <p className="text-xs pl-2">{data.meta.total} Results</p>
            <Pagination
              onChange={pageChanged}
              total={data.meta.last_page}
              siblings={1}
              value={activePage}
              disabled={loading}
              className="mt-1 float-right"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Table;
