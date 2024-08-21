import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DashboardState, Category, Widget } from '../types/types';

const initialState: DashboardState = {
    categories: [
        {
            id: '1',
            name: 'CSPM Executive Dashboard',
            widgets: [
                {
                    id: '1',
                    name: 'Cloud Accounts',
                    type: 'donut-chart',
                    content: 'Random text for Cloud Accounts widget',
                },
                {
                    id: '2',
                    name: 'Cloud Account Risk Assessment',
                    type: 'donut-chart',
                    content: 'Random text for Cloud Account Risk Assessment widget',
                },
            ],
        },
        {
            id: '2',
            name: 'CWPP Dashboard',
            widgets: [
                {
                    id: '3',
                    name: 'Top 5 Namespace Specific Alerts',
                    type: 'bar-chart',
                    content: 'Random text for Top 5 Namespace Specific Alerts widget',
                },
                {
                    id: '4',
                    name: 'Workload Alerts',
                    type: 'line-chart',
                    content: 'Random text for Workload Alerts widget',
                },
            ],
        },
        {
            id: '3',
            name: 'Registry Scan',
            widgets: [
                {
                    id: '5',
                    name: 'Image Risk Assessment',
                    type: 'bar-chart',
                    content: 'Random text for Image Risk Assessment widget',
                },
                {
                    id: '6',
                    name: 'Image Security Issues',
                    type: 'bar-chart',
                    content: 'Random text for Image Security Issues widget',
                },
            ],
        },
    ],
};

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        addWidget: (state, action: PayloadAction<{ categoryId: string; widget: Widget }>) => {
            const category = state.categories.find((c) => c.id === action.payload.categoryId);
            if (category) {
                category.widgets.push(action.payload.widget);
            }
        },
        removeWidget: (state, action: PayloadAction<{ categoryId: string; widgetId: string }>) => {
            const category = state.categories.find((c) => c.id === action.payload.categoryId);
            if (category) {
                category.widgets = category.widgets.filter((w) => w.id !== action.payload.widgetId);
            }
        },
        updateWidget: (
            state,
            action: PayloadAction<{ categoryId: string; widgetId: string; updates: Partial<Widget> }>
        ) => {
            const category = state.categories.find((c) => c.id === action.payload.categoryId);
            if (category) {
                const widget = category.widgets.find((w) => w.id === action.payload.widgetId);
                if (widget) {
                    Object.assign(widget, action.payload.updates);
                }
            }
        },
        addCategory: (state, action: PayloadAction<Category>) => {
            state.categories.push(action.payload);
        },
        removeCategory: (state, action: PayloadAction<string>) => {
            state.categories = state.categories.filter((c) => c.id !== action.payload);
        },
        updateWidgetLayout: (state, action: PayloadAction<Category[]>) => {
            state.categories = action.payload;
        },
    },
});

export const {
    addWidget,
    removeWidget,
    updateWidget,
    addCategory,
    removeCategory,
    updateWidgetLayout,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;