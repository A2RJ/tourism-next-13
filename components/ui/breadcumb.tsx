"use client";

import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  url?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <ol className="flex items-center whitespace-nowrap min-w-0 mb-5">
      {items.map((item, index) => (
        <li className="text-sm" key={index}>
          {item.url ? (
            <Link
              className="flex items-center text-gray-500 hover:text-blue-600"
              href={item.url}
            >
              {item.label}
              <svg
                className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 dark:text-gray-600"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>
            </Link>
          ) : (
            <span className="text-gray-800 font-semibold truncate dark:text-gray-200">
              {item.label}
            </span>
          )}
        </li>
      ))}
    </ol>
  );
};

export default Breadcrumb;
