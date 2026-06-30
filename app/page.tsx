import type { Metadata } from "next";
import Link from "next/link";
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
		<section className="animated-background relative flex items-center isolate min-h-dvh overflow-hidden">
			{/* <Image
				src="/backgrounds/steins_gate_vectors.jpg"
				alt=""
				width={1536}
				height={864}
				priority
				className="absolute inset-0 -z-20 h-full w-full object-cover opacity-80"
			/> */}

			<div aria-hidden="true" className="absolute inset-0 -z-10 bg-page/80" />

			<div className="mx-auto w-full max-w-6xl px-6 py-20">
				<div>
					{/* <p className="font-mono text-sm uppercase tracking-[0.3em] text-accent">
						Software Engineering Intern
					</p> */}

					<h1 className="mt-4 font-logo text-5xl font-semibold leading-none tracking-tight">
						<TimeGreeting />, my name is Cham
					</h1>

					<p className="mt-6 font-sans text-lg leading-8 text-muted">
						I am a <span className="text-accent">Software Engineer</span>{" "}
						focused on <span className="text-accent">Web Development</span> and{" "}
						<span className="text-accent">Mobile App Development</span>.
					</p>

					<p className="mt-8 text-lg leading-8 text-muted">
						This is my portfolio where you can learn more{" "}
						<Link
							href="/about"
							className="text-primary underline-offset-4 transition-colors hover:underline"
						>
							about
						</Link>{" "}
						me and my life, explore the{" "}
						<Link
							href="/projects"
							className="text-primary underline-offset-4 transition-colors hover:underline"
						>
							projects
						</Link>{" "}
						I’ve built over the years, or reach out to me through the{" "}
						<Link
							href="/contact"
							className="text-primary underline-offset-4 transition-colors hover:underline"
						>
							contact
						</Link>{" "}
						form. Navigation can be done by pointing and clicking, or by using
						the CLI at the bottom of the screen.
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
