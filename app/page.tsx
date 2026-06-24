import type { Metadata } from "next";
import Image from "next/image";
import TimeGreeting from "@/components/TimeGreeting";

export const metadata: Metadata = {
	title: "Home",
	description:
		"Developer portfolio of Charl Emmanuel E. Mendez, a software engineering intern focused on web development.",
	openGraph: {
		title: "Cham Mendez | Developer Portfolio",
		description:
			"Explore my projects, technical skills, interests, and experience in web development.",
		type: "website",
	},
};

const commands = [
	{ command: "cd home", description: "Go to the homepage" },
	{ command: "cd about", description: "Learn more about me" },
	{ command: "cd projects", description: "View my projects" },
	{ command: "cd contact", description: "Open the contact page" },
	{ command: "whoami", description: "Display the current visitor" },
	{ command: "pwd", description: "Print the current route" },
	{ command: "echo <text>", description: "Print the supplied text" },
	{ command: "portfolio -v", description: "Show the site version" },
	{ command: "open github", description: "Open my GitHub profile" },
	{ command: "open linkedin", description: "Open my LinkedIn profile" },
	{ command: "open resume", description: "View my résumé" },
	{ command: "theme <mode>", description: "Switch the site theme" },
	{ command: "help", description: "Show all available commands" },
];

export default function HomePage() {
	return (
		<section className="relative flex items-center isolate min-h-[calc(100vh-87px)] overflow-hidden">
			<Image
				src="/backgrounds/steins_gate_vectors.jpg"
				alt=""
				width={1536}
				height={864}
				priority
				className="absolute inset-0 -z-20 h-full w-full object-cover opacity-85"
			/>

			<div aria-hidden="true" className="absolute inset-0 -z-10 bg-page/85" />

			<div className="mx-auto w-full max-w-6xl px-6 py-20">
				<div>
					{/* <p className="font-mono text-sm uppercase tracking-[0.3em] text-accent">
						Software Engineering Intern
					</p> */}

					<h1 className="mt-4 font-logo text-5xl font-semibold leading-none tracking-tight">
						<TimeGreeting />, my name is Cham
					</h1>

					<p className="mt-6 font-sans text-lg leading-8 text-muted">
						I am a <span className="text-accent">Software Engineer</span> and
						this is my developer portfolio, where you can learn more about me,
						explore some of the projects I’ve built over the years, or send me a
						message through the contact form. You can navigate either by
						pointing and clicking or by using the CLI at the bottom of the
						screen. Here is the list of available commands. (To be implemented
						in the future)
					</p>
				</div>

				<aside className="mt-10 border border-primary/20 bg-surface/85 p-6 font-mono shadow-2xl backdrop-blur-sm">
					<div className="border-b border-primary/10 pb-4">
						<p className="text-sm text-accent">&gt; List of Commands</p>
					</div>

					<div className="mt-6 grid gap-x-10 gap-y-4 md:grid-flow-col md:grid-rows-7">
						{commands.map((item) => (
							<div
								key={item.command}
								className="grid grid-cols-[9rem_1fr] gap-4 text-sm"
							>
								<code className="text-primary">{item.command}</code>
								<span className="text-muted">{item.description}</span>
							</div>
						))}
					</div>
				</aside>
			</div>
		</section>
	);
}
