
import React from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../store/hook';
import { addWidget } from '../store/dashboardSlice';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from '@/components/ui/form';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from '@/components/ui/dialog';

interface AddWidgetFormProps {
    categoryId: string;
    isOpen: boolean;
    onClose: () => void;
}

const AddWidgetForm: React.FC<AddWidgetFormProps> = ({
    categoryId,
    isOpen,
    onClose,
}) => {
    const dispatch = useAppDispatch();
    const form = useForm({
        defaultValues: {
            name: '',
            type: 'bar-chart',
            content: '',
        },
    });

    const handleSubmit = (data: { name: string; type: string; content: string }) => {
        dispatch(
            addWidget({
                categoryId,
                widget: {
                    id: Date.now().toString(),
                    ...data,
                },
            })
        );
        form.reset();
        onClose();
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add New Widget</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Widget Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter widget name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="type"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Widget Type</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select widget type" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="bar-chart">Bar Chart</SelectItem>
                                            <SelectItem value="donut-chart">Donut Chart</SelectItem>
                                            <SelectItem value="line-chart">Line Chart</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="content"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Widget Content</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Enter widget content" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <DialogFooter>
                            <Button type="submit">Add Widget</Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default AddWidgetForm;