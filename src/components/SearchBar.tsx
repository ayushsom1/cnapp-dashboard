// src/components/SearchBar.tsx

import React, { useState } from 'react';
import { Input } from "@/components/ui/input";

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newQuery = e.target.value;
        setQuery(newQuery);
        onSearch(newQuery);
    };

    return (
        <Input
            type="text"
            placeholder="Search anything..."
            value={query}
            onChange={handleSearch}
            className="w-full max-w-sm"
        />
    );
};

export default SearchBar;