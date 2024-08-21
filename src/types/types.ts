// src/types/types.ts

export interface Widget {
    id: string;
    name: string;
    type: string;
    content: string;
}

export interface Category {
    id: string;
    name: string;
    widgets: Widget[];
}

export interface DashboardState {
    categories: Category[];
}