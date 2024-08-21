import React from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../store/hook';
import { addCategory } from '../store/dashboardSlice';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';

interface AddCategoryFormProps {
    isOpen: boolean;
    onClose: () => void;
}

const AddCategoryForm: React.FC<AddCategoryFormProps> = ({ isOpen, onClose }) => {
    const dispatch = useAppDispatch();
    const form = useForm({
        defaultValues: {
            name: '',
        },
    });

    const onSubmit = (data: { name: string }) => {
        dispatch(
            addCategory({
                id: Date.now().toString(),
                name: data.name,
                widgets: [],
            })
        );
        form.reset();
        onClose();
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add New Category</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Category Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter category name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <DialogFooter>
                            <Button type="submit">Add Category</Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default AddCategoryForm;