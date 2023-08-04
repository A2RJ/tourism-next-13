import { Input, Pagination } from "@mantine/core";
import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";

type TableProps = {
  headers: string[];
  body: ((dataItem: any) => React.ReactNode)[];
  apiUrl?: any;
  dataTable?: Array<any>;
};

const Table: React.FC<TableProps> = ({ headers, body, apiUrl, dataTable }) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        setLoading(true);
        const response = await fetch(apiUrl);
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    if (!dataTable) {
      fetchDataFromApi();
    }
  }, [apiUrl, dataTable]);

  const tableBody = data.map((dataItem, index) => (
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
  ));

  if (loading) {
    return <p>Loading</p>;
  }

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
        <tbody>{tableBody}</tbody>
      </table>
      <Pagination
        total={10}
        siblings={1}
        defaultValue={10}
        className="mt-1 float-right"
      />
    </div>
  );
};

export default Table;
