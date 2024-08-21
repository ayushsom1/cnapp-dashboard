import React, { useState } from 'react';
import { Category as CategoryType } from '../types/types';
import Widget from './Widget';
import AddWidgetForm from './AddWidget';

interface CategoryProps {
    category: CategoryType;
}

const Category: React.FC<CategoryProps> = ({ category }) => {
    const [isAddWidgetOpen, setIsAddWidgetOpen] = useState(false);

    return (
        <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">{category.name}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.widgets.map((widget) => (
                    <Widget
                        key={widget.id}
                        id={widget.id}
                        categoryId={category.id}
                        name={widget.name}
                        type={widget.type}
                        content={widget.content}
                    />
                ))}
                <div
                    onClick={() => setIsAddWidgetOpen(true)}
                    className="border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center h-48 cursor-pointer hover:bg-gray-50"
                >
                    <span className="text-gray-500">+ Add Widget</span>
                </div>
                <AddWidgetForm
                    categoryId={category.id}
                    isOpen={isAddWidgetOpen}
                    onClose={() => setIsAddWidgetOpen(false)}
                />
            </div>
        </div>
    );
};

export default Category;
