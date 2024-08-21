// src/components/Header.tsx

import React from 'react';
import { Button } from "@/components/ui/button";
import { Bell, User } from 'lucide-react';

const Header: React.FC = () => {
    return (
        <header className="bg-white border-b border-gray-200 p-4">
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <span className="text-gray-500">Home</span>
                    <span className="text-gray-500">/</span>
                    <span className="font-semibold">Dashboard V2</span>
                </div>
                <div className="flex items-center space-x-4">
                    <Button variant="ghost" size="icon">
                        <Bell className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                        <User className="h-5 w-5" />
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;