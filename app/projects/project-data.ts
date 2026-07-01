export interface Project {
	slug: string;
	title: string;
	description: string;
	preview: string;
	demo?: string;
	github: string;
	liveUrl?: string;
	technologies: string[];
	features: string[];
	details: string;
}

export const projects: Project[] = [
	{
		slug: "segunda-mano",
		title: "Segunda Mano",
		description:
			"A mobile marketplace for buying, selling, and requesting second-hand items.",
		preview: "/previews/segunda.webm",
		demo: "/previews/segunda.webm",
		github: "https://github.com/KuriGohan1992/segunda-mano",
		technologies: [
			"React Native",
			"Expo",
			"Firebase",
			"TypeScript",
			"PayMongo",
		],
		features: [
			"Sign in, sign up, forgot password, and guest access",
			"Search listings, filter listings, and browse by category",
			"Create selling listings and looking-for listings",
			"Cart flow, order details, checkout, COD, and PayMongo QR PH payment",
			"Seller chat with image upload support",
			"Profile viewing and profile picture updates",
		],
		details:
			"Segunda Mano is my most complete project so far. It covers the full marketplace flow from authentication and browsing to cart checkout, payment, messaging, and profile management. The project was built as a mobile-first application using React Native, Expo, Firebase, TypeScript, and PayMongo.",
	},
	{
		slug: "klazerch",
		title: "Klazerch",
		description:
			"A class scheduling system for checking rooms, sections, teachers, and schedules.",
		preview: "/previews/klazerch.webm",
		demo: "/previews/klazerch.webm",
		github: "https://github.com/KuriGohan1992/klazerch",
		technologies: ["ASP.NET Core MVC", "C#", "React Native", "Firebase"],
		features: [
			"Check available rooms based on selected day and time",
			"View room, section, and teacher status",
			"Filter schedule data from Firebase using user-provided fields",
			"Add, edit, and view schedules in the web version",
			"Dark mode support",
		],
		details:
			"Klazerch is a scheduling system designed around practical school schedule lookups. Users can input details such as section, day, time, room, or teacher, then the app filters the stored schedule data and returns the relevant status. The project also has a web version for managing schedules and a mobile version for checking schedule information more quickly.",
	},
	{
		slug: "m4tr1cks",
		title: "m4tr1cks",
		description:
			"A terminal-inspired matrix calculator for common matrix operations.",
		preview: "/previews/matricks.webm",
		demo: "/previews/matricks.webm",
		github: "https://github.com/KuriGohan1992/matricks",
		liveUrl: "https://kurigohan1992.github.io/matricks",
		technologies: ["HTML", "CSS", "JavaScript"],
		features: [
			"Dynamic matrix sizing",
			"Manual matrix input",
			"Random input generation for faster testing",
			"Clear-all control",
			"Solve RREF, determinant, and inverse operations",
			"Displays answers and step-by-step solutions for supported operations",
		],
		details:
			"m4tr1cks is a web-based matrix calculator built with a strong terminal-inspired visual style. It allows users to change matrix size, input values manually, generate random test values, and solve common matrix operations such as RREF, determinant, and inverse. The project focuses on making matrix computation easier to test and visualize in the browser.",
	},
	{
		slug: "interactive-thermometer",
		title: "Interactive Thermometer",
		description:
			"An educational thermometer that visualizes and converts temperature values.",
		preview: "/previews/thermometer.webm",
		demo: "/previews/thermometer.webm",
		github: "https://github.com/KuriGohan1992/interactive-thermometer",
		liveUrl: "https://kurigohan1992.github.io/interactive-thermometer",
		technologies: ["HTML", "CSS", "JavaScript"],
		features: [
			"Adjust temperature by dragging the thermometer",
			"Manual temperature input",
			"Arrow-key control for one-degree increments",
			"Convert between Celsius, Fahrenheit, and Kelvin",
			"Descriptions and fun facts for different temperature ranges",
			"Includes lessons and formulas related to temperature conversion",
		],
		details:
			"Interactive Thermometer is an educational web project for exploring temperature values and conversions. Users can adjust the thermometer directly, type values manually, or use keyboard controls. The page also provides contextual descriptions, fun facts, and formula-based lessons to make the interaction more informative.",
	},
	{
		slug: "0dd",
		title: "0dd",
		description:
			"A terminal app that validates whether a binary string contains an odd number of zeroes.",
		preview: "/previews/odd.webm",
		demo: "/previews/odd.webm",
		github: "https://github.com/KuriGohan1992/0dd",
		technologies: ["Python", "curses"],
		features: [
			"Terminal interface built with curses",
			"Validates binary strings based on odd-numbered zeroes",
			"Input validation for invalid or empty strings",
			"Clear, menu, and exit commands",
			"File upload mode for batch validation",
		],
		details:
			"0dd is a terminal-based validator for binary strings. It checks whether a valid input contains an odd number of zeroes and classifies the result as accepted or not accepted. The project uses Python and curses to create a formatted terminal interface with manual input, commands, and file-based batch validation.",
	},
	{
		slug: "z-test",
		title: "Z-Test Calculator",
		description:
			"A statistics calculator for one-sample z-tests with graph and solution output.",
		preview: "/previews/ztest.webm",
		demo: "/previews/ztest.webm",
		github: "https://github.com/KuriGohan1992/z-test",
		liveUrl: "https://kurigohan1992.github.io/z-test",
		technologies: ["HTML", "CSS", "JavaScript"],
		features: [
			"Input null and alternative hypotheses",
			"Automatically mirrors hypothesis values and operators",
			"Dropdowns for relational operators, significance level, and confidence level",
			"Calculates z-statistic, critical value, and decision",
			"Shows a normal distribution graph with the rejection region shaded",
			"Displays a complete step-by-step solution",
		],
		details:
			"Z-Test Calculator is an educational statistics tool for performing one-sample z-tests. It helps users enter hypothesis test values, select common significance and confidence levels, calculate the result, and view the graph and solution. The shaded part of the graph represents the rejection region based on the selected hypothesis test.",
	},
];
