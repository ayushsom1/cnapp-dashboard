import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import Category from './Category';
import SearchBar from './SearchBar';
import Header from './Header';
import DateRangeSelector from './DateRangeSelect';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';
import AddCategoryForm from './AddCategory';

const Dashboard: React.FC = () => {
    const categories = useSelector((state: RootState) => state.dashboard.categories);
    const [isAddCategoryOpen, setIsAddCategoryOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const filteredCategories = categories.map((category) => ({
        ...category,
        widgets: category.widgets.filter((widget) =>
            widget.name.toLowerCase().includes(searchQuery.toLowerCase())
        ),
    }));

    return (
        <div>
            <Header />
            <main className="p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">CNAPP Dashboard</h1>
                    <div className="flex items-center space-x-4">
                        <SearchBar onSearch={setSearchQuery} />
                        <Button onClick={() => setIsAddCategoryOpen(true)}>Add Category</Button>
                        <Button variant="outline">
                            <RefreshCw className="mr-2 h-4 w-4" /> Refresh
                        </Button>
                        <DateRangeSelector />
                    </div>
                </div>
                {filteredCategories.map((category) => (
                    <Category key={category.name} category={category} />
                ))}
                <AddCategoryForm
                    isOpen={isAddCategoryOpen}
                    onClose={() => setIsAddCategoryOpen(false)}
                />
            </main>
        </div>
    );
};

export default Dashboard;