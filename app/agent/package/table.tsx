import { useState } from "react";
import { Input, Pagination } from "@mantine/core";
import { Search } from "lucide-react";

export default function Table() {
  // saat get data dari database maka set loading true dan berikan skeleton
  const [activePage, setPage] = useState<number>(1);
  const data = [
    {
      name: "Ayub Salas",
      title: "Designer",
      company: "Carroll Group",
      role: "Member",
      username: "salas_a",
    },
    {
      name: "Agnes Sherman",
      title: "Developer",
      company: "Apple",
      role: "Admin",
      username: "shermanagnes",
    },
    {
      name: "Jemma Cummings",
      title: "Senior Designer",
      company: "20goto10",
      role: "Member",
      username: "jemmaC",
    },
    {
      name: "Jimi Cardenas",
      title: "Copywriter",
      company: "Wind-UI",
      role: "Owner",
      username: "cardenasji",
    },
    {
      name: "Mateusz Tucker",
      title: "Project Manager",
      company: "Tailwindui",
      role: "Member",
      username: "mt",
    },
  ];

  return (
    <div className="overflow-hidden overflow-x-scroll scrollbar-none">
      <Input icon={<Search />} className="mb-1" />
      <table
        className="w-full text-left border border-separate rounded border-slate-200"
        cellSpacing="0"
        border={1}
      >
        <thead>
          <tr>
            <th className="h-12 px-6 text-sm font-medium border-l stroke-slate-700 text-slate-700 bg-slate-100">
              Name
            </th>
            <th className="h-12 px-6 text-sm font-medium border-l stroke-slate-700 text-slate-700 bg-slate-100">
              Title
            </th>
            <th className="h-12 px-6 text-sm font-medium border-l stroke-slate-700 text-slate-700 bg-slate-100">
              Company
            </th>
            <th className="h-12 px-6 text-sm font-medium border-l stroke-slate-700 text-slate-700 bg-slate-100">
              Role
            </th>
            <th className="h-12 px-6 text-sm font-medium border-l stroke-slate-700 text-slate-700 bg-slate-100">
              Username
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((packageItem, index) => (
            <tr key={index}>
              <td className="h-12 px-6 text-sm border-slate-200 stroke-slate-500 text-slate-500">
                {packageItem.name}
              </td>
              <td className="h-12 px-6 text-sm border-slate-200 stroke-slate-500 text-slate-500">
                {packageItem.title}
              </td>
              <td className="h-12 px-6 text-sm border-slate-200 stroke-slate-500 text-slate-500">
                {packageItem.company}
              </td>
              <td className="h-12 px-6 text-sm border-slate-200 stroke-slate-500 text-slate-500">
                {packageItem.role}
              </td>
              <td className="h-12 px-6 text-sm border-slate-200 stroke-slate-500 text-slate-500">
                {packageItem.username}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        total={10}
        siblings={1}
        defaultValue={10}
        value={activePage}
        onChange={setPage}
        className="mt-1 float-right"
      />
    </div>
  );
}
