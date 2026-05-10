// Project Variables.
import type {ReactNode} from 'react';

// Project Header:
export type ProjectStatus = "live" | "non-hosted" | "private";
export interface Project{
    title: string;
    titleLogo: ReactNode;
    technology: ReactNode[];
    description: string;
    repoUrl?: string;
    demo?: string;  
    screenshots: string[]; // image paths for non-hosted projects
    status?: ProjectStatus;
}