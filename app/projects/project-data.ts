export interface Project {
	slug: string;
	title: string;
	description: string;
	preview: string;
	github: string;
	liveUrl?: string;
	technologies: string[];
}

export const projects: Project[] = [
	{
		slug: "segunda-mano",
		title: "Segunda Mano",
		description:
			"A modern marketplace for buying and selling second-hand items with authentication, search, and responsive design.",
		preview: "/previews/segunda.webm",
		github: "https://github.com/KuriGohan1992/segunda-mano",
		technologies: ["React Native", "Expo", "Firebase", "TypeScript", "PayMongo"],
	},
	{
		slug: "klazerch",
		title: "Klazerch",
		description:
			"A class scheduling management system for students, teachers, administrators, rooms, and sections.",
		preview: "/previews/klazerch.webm",
		github: "https://github.com/KuriGohan1992/klazerch",
		technologies: ["ASP.NET Core MVC", "C#", "React Native", "Firebase"],
	},
	{
		slug: "m4tr1cks",
		title: "m4tr1cks",
		description:
			"A matrix calculator capable of performing common matrix operations with an intuitive interface.",
		preview: "/previews/matricks.webm",
		github: "https://github.com/KuriGohan1992/matricks",
		liveUrl: "https://kurigohan1992.github.io/matricks",
		technologies: ["HTML", "CSS", "JavaScript"],
	},
	{
		slug: "interactive-thermometer",
		title: "Interactive Thermometer",
		description:
			"A web-based thermometer that visualizes and converts temperature interactively.",
		preview: "/previews/thermometer.webm",
		github: "https://github.com/KuriGohan1992/interactive-thermometer",
		liveUrl: "https://kurigohan1992.github.io/interactive-thermometer",
		technologies: ["HTML", "CSS", "JavaScript"],
	},
	{
		slug: "0dd",
		title: "0dd",
		description:
			"A terminal-based binary string validator that uses a curses interface to process manual input and uploaded text files.",
		preview: "/previews/odd.webm",
		github: "https://github.com/KuriGohan1992/0dd",
		technologies: ["Python", "curses"],
	},
	{
		slug: "z-test",
		title: "Z-Test Calculator",
		description:
			"A statistical calculator for performing one-sample z-tests with visualized results.",
		preview: "/previews/ztest.webm",
		github: "https://github.com/KuriGohan1992/z-test",
		liveUrl: "https://kurigohan1992.github.io/z-test",
		technologies: ["HTML", "CSS", "JavaScript"],
	},
	
];