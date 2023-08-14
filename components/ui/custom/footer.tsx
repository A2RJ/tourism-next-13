"use client";

export default function Footer() {
  return (
    <div className="h-20 flex items-center justify-between">
      <p>© 2023 UTS Tourism. All rights reserved.</p>
      <ul className="flex flex-wrap items-center gap-4 sm:text-sm">
        <li className="font-medium text-gray-700 hover:text-gray-900 duration-150">
          <a href="/#">Features</a>
        </li>
        <li className="font-medium text-gray-700 hover:text-gray-900 duration-150">
          <a href="/#">FAQs</a>
        </li>
        <li className="font-medium text-gray-700 hover:text-gray-900 duration-150">
          <a href="/#">About Us</a>
        </li>
      </ul>
    </div>
  );
}
