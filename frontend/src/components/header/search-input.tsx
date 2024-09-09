"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export const SearchInput = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [results, setResults] = useState<string[]>([]);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const handleSearch = () => {
    // Dummy search results; replace with actual logic
    setResults(["Result 1", "Result 2", "Result 3"]);
  };

  return (
    <div className="relative w-full">
      <div className="flex items-center border border-input rounded-md">
        {/* Search icon */}
        <div>
          <Search className="size-5 ml-3 text-gray-500" />
        </div>

        {/* Input field */}
        <input
          type="text"
          className="flex-grow bg-transparent px-3 py-1 text-sm focus-visible:outline-none"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        <Separator orientation="vertical" className="h-5" />

        {/* Search button */}
        <Button
          className="rounded-none rounded-e-md"
          variant="main"
          onClick={handleSearch}
        >
          Search
        </Button>
      </div>

      {/* Results dropdown */}
      {isFocused && results.length > 0 && (
        <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
          <ul>
            {results.map((result, index) => (
              <li key={index} className="px-3 py-2 hover:bg-gray-100">
                {result}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
