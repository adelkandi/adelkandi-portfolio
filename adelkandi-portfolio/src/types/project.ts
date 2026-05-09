// Project Variables.
import type {ReactNode} from 'react';

// Project Header:

export interface Project{
    title: string;
    titleLogo: ReactNode;
    description:string;
    githubRepository?: string;
    technology:ReactNode;
    demo?:string;  
    screenshots: string[]; // image paths for non-hosted projects
    status?: "live" | "non-hosted" | "private";
}