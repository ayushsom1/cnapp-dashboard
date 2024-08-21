import React from 'react';
import { useAppDispatch } from '../store/hook';
import { removeWidget } from '../store/dashboardSlice';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface WidgetProps {
    id: string;
    categoryId: string;
    name: string;
    type: string;
    content: string;
}

const Widget: React.FC<WidgetProps> = ({ id, categoryId, name, type, content }) => {
    const dispatch = useAppDispatch();

    const handleRemove = () => {
        dispatch(removeWidget({ categoryId, widgetId: id }));
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex justify-between items-center">
                    {name}
                    <Button variant="ghost" size="icon" onClick={handleRemove}>
                        <X className="h-4 w-4" />
                    </Button>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p>Type: {type}</p>
                <p>{content}</p>
            </CardContent>
        </Card>
    );
};

export default Widget;