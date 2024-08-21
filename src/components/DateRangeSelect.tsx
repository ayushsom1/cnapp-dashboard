// src/components/DateRangeSelector.tsx

import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const DateRangeSelector: React.FC = () => {
    return (
        <div>

            <Select defaultValue="last-2-days">
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select date range" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="last-2-days">Last 2 days</SelectItem>
                    <SelectItem value="last-week">Last week</SelectItem>
                    <SelectItem value="last-month">Last month</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
};

export default DateRangeSelector;