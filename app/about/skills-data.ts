import type { IconType } from "react-icons";
import { FaDatabase } from "react-icons/fa6";
import {
	SiCss,
	SiDjango,
	SiDocker,
	SiExpo,
	SiFigma,
	SiFirebase,
	SiGit,
	SiGithub,
	SiHtml5,
	SiJavascript,
	SiNeovim,
	SiNextdotjs,
	SiPython,
	SiReact,
	SiTypescript,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export interface Skill {
	name: string;
	icon: IconType;
}

export interface SkillGroup {
	title: string;
	skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
	{
		title: "Languages",
		skills: [
			{
				name: "Python",
				icon: SiPython,
			},
			{
				name: "HTML",
				icon: SiHtml5,
			},
			{
				name: "CSS",
				icon: SiCss,
			},
			{
				name: "JavaScript",
				icon: SiJavascript,
			},
			{
				name: "TypeScript",
				icon: SiTypescript,
			},
			{
				name: "SQL",
				icon: FaDatabase,
			},
		],
	},
	{
		title: "Frameworks",
		skills: [
			{
				name: "React",
				icon: SiReact,
			},
			{
				name: "React Native",
				icon: SiReact,
			},
			{
				name: "Next.js",
				icon: SiNextdotjs,
			},
			{
				name: "Django",
				icon: SiDjango,
			},
			{
				name: "Expo",
				icon: SiExpo,
			},
			{
				name: "Firebase",
				icon: SiFirebase,
			},
		],
	},
	{
		title: "Tools",
		skills: [
			{
				name: "GitHub",
				icon: SiGithub,
			},
			{
				name: "Git",
				icon: SiGit,
			},
			{
				name: "Docker",
				icon: SiDocker,
			},
			{
				name: "Neovim",
				icon: SiNeovim,
			},
			{
				name: "VS Code",
				icon: VscVscode,
			},
			{
				name: "Figma",
				icon: SiFigma,
			},
		],
	},
];
