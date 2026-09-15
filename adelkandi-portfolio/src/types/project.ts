import type {ReactNode} from 'react';

export type ProjectStatus = "live" | "non-hosted" | "private";
export interface Project{
    title: string;
    tagline: string;
    titleLogo?: ReactNode;
    description: string;
    technology: ReactNode[];
    repoUrl?: string;
    demo?: string;  
    screenshots: string[]; // image paths for non-hosted projects
    status?: ProjectStatus;
}