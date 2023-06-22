"use client";

import { Loader, Search } from "lucide-react";
import { useState } from "react";

export default function SearchForm() {
    const [search, setSearch] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    function handleSearch(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);

        setTimeout(() => {
            console.log(search);
            setLoading(false);
        }, 2000);
    }

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setSearch(e.target.value);
    }

    return (
        <form className="w-full relative" onSubmit={handleSearch}>
            <input
                className="block p-4 pl-10 w-full text-sm text-gray-900 focus:outline-0 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Where are you going today?"
                required
                value={search}
                onChange={handleInputChange}
            />
            <button
                className="text-white absolute right-2.5 bottom-1.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-4 py-2"
                type="submit"
                disabled={loading}
            >
                {loading ? <Loader className="animate-spin" /> : <Search />}
            </button>
        </form>
    );
}
