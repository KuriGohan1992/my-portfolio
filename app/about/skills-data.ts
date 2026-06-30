import type { IconType } from "react-icons";
import { FaDatabase } from "react-icons/fa6";
import {
	SiAndroidstudio,
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
	SiNextdotjs,
	SiPython,
	SiReact,
	SiTypescript,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export interface Skill {
	name: string;
	icon: IconType;
	colorClassName: string;
}

export interface SkillGroup {
	title: string;
	skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
	{
		title: "Languages & Web Fundamentals",
		skills: [
			{
				name: "Python",
				icon: SiPython,
				colorClassName: "text-yellow-400",
			},
			{
				name: "HTML",
				icon: SiHtml5,
				colorClassName: "text-orange-500",
			},
			{
				name: "CSS",
				icon: SiCss,
				colorClassName: "text-blue-500",
			},
			{
				name: "JavaScript",
				icon: SiJavascript,
				colorClassName: "text-yellow-300",
			},
			{
				name: "TypeScript",
				icon: SiTypescript,
				colorClassName: "text-blue-400",
			},
			{
				name: "SQL",
				icon: FaDatabase,
				colorClassName: "text-sky-400",
			},
		],
	},
	{
		title: "Frameworks & Platforms",
		skills: [
			{
				name: "React",
				icon: SiReact,
				colorClassName: "text-cyan-400",
			},
			{
				name: "React Native",
				icon: SiReact,
				colorClassName: "text-sky-400",
			},
			{
				name: "Next.js",
				icon: SiNextdotjs,
				colorClassName: "text-primary",
			},
			{
				name: "Django",
				icon: SiDjango,
				colorClassName: "text-emerald-500",
			},
			{
				name: "Expo",
				icon: SiExpo,
				colorClassName: "text-primary",
			},
			{
				name: "Firebase",
				icon: SiFirebase,
				colorClassName: "text-amber-400",
			},
		],
	},
	{
		title: "Tools",
		skills: [
			{
				name: "GitHub",
				icon: SiGithub,
				colorClassName: "text-primary",
			},
			{
				name: "Git",
				icon: SiGit,
				colorClassName: "text-orange-500",
			},
			{
				name: "Docker",
				icon: SiDocker,
				colorClassName: "text-sky-500",
			},
			{
				name: "VS Code",
				icon: VscVscode,
				colorClassName: "text-blue-500",
			},
			{
				name: "Android Studio",
				icon: SiAndroidstudio,
				colorClassName: "text-green-500",
			},
			{
				name: "Figma",
				icon: SiFigma,
				colorClassName: "text-pink-400",
			},
		],
	},
];
