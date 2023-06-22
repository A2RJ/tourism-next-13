export default function Footer() {
  return (
    <div className="custom-screen text-gray-600">
      <div className="mt-10 py-10 border-t flex-row-reverse items-center justify-between sm:flex">
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
        <p className="mt-6 sm:mt-0">© 2023 UTS Tourusm. All rights reserved.</p>
      </div>
    </div>
  );
}
