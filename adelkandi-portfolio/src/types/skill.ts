// Skills Variables and Types
import type { ReactNode } from 'react';

// Define Skill and SkillsProps interfaces
export interface Skill {
    name: string,
    icon: ReactNode
}
export interface SkillsProps {
    title: string,
    titleLogo: ReactNode,
    skillsLogo: ReactNode,
    skills: Skill[] // list of skill objects with icons
}