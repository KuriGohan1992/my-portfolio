import type { Metadata } from "next";
import AboutSection from "@/components/AboutSection";

export const metadata: Metadata = {
	title: "About",
	description:
		"Learn about Cham Mendez, his experience, education, achievements, technical skills, and interests.",
};

const skills = [
	"Python",
	"Java",
	"C#",
	"C++",
	"SQL",
	"JavaScript",
	"TypeScript",
	"React",
	"React Native",
	"Next.js",
	"ASP.NET Core MVC",
	"Expo",
	"Django",
	"Firebase",
	"Git",
	"GitHub",
	"Docker",
	"Figma",
];

export default function AboutPage() {
	return (
		<div className="bg-page">
			<div className="mx-auto w-full max-w-6xl px-6 py-6">
				<AboutSection
					title="About me"
					imageSrc="/images/portrait.jpg"
					imageAlt="Portrait of Cham Mendez"
				>
					<p>
						My name is Charl Emmanuel E. Mendez. I enjoy creating software that
						combines technical problem-solving with thoughtful design.
					</p>

					<p>
						My experience includes web and mobile development, codebase
						analysis, artificial-intelligence evaluation, and software
						engineering workflows. I particularly enjoy understanding how
						frontend interfaces, backend services, databases, and APIs work
						together.
					</p>

					<p>
						Outside programming, I enjoy badminton, drawing, experimenting with
						technology, and continuously improving my workspace.
					</p>
				</AboutSection>

				<AboutSection
					title="Experience"
					imageSrc="/images/experience.jpeg"
					imageAlt="Workspace used by Cham for software development"
					imageOnRight
				>
					<p>
						I am currently gaining professional experience as a Software
						Engineering Intern at Stratpoint, where I am strengthening my skills
						in modern web development, collaborative software engineering, and
						real-world project workflows.
					</p>

					<p>
						My internship has given me the opportunity to work with industry
						tools and practices while learning how software is planned,
						developed, reviewed, and maintained within a professional team
						environment. I am also continuing to improve my understanding of
						frontend development, version control, code quality, and effective
						technical communication.
					</p>
				</AboutSection>

				<AboutSection
					title="Education"
					imageSrc="/images/education.jpeg"
					imageAlt="First Asia Institute of Technology and Humanities campus"
				>
					<p>
						I am pursuing a Bachelor of Science in Computer Science at the First
						Asia Institute of Technology and Humanities in Tanauan City,
						Batangas.
					</p>

					<p>
						I began the program in August 2023 and expect to graduate in May
						2027. I have consistently been included in the President’s List from
						my first year to the present.
					</p>

					<p>
						My studies have strengthened my foundations in programming,
						algorithms, databases, object-oriented programming, networking, and
						software development.
					</p>
				</AboutSection>

				<AboutSection
					title="Certifications and Awards"
					imageSrc="/images/awards.jpg"
					imageAlt="Programming certificates and competition awards"
					imageOnRight
				>
					<div>
						<h3 className="font-mono text-sm uppercase tracking-[0.2em] text-accent">
							Certifications
						</h3>

						<ul className="mt-3 list-disc space-y-2 pl-5">
							<li>TOPCIT Level 3 Certification — Score: 421</li>
							<li>CS50x: Introduction to Computer Science</li>
							<li>CS50P: Introduction to Programming with Python</li>
							<li>Networking Basics — Cisco Networking Academy</li>
						</ul>
					</div>

					<div>
						<h3 className="font-mono text-sm uppercase tracking-[0.2em] text-accent">
							Awards and competitions
						</h3>

						<ul className="mt-3 list-disc space-y-2 pl-5">
							<li>
								2nd Runner-Up — ISITE National IT Skills Competition 2026,
								Python Programming
							</li>
							<li>
								Grand Finalist — CodeChum National Programming Challenge 2025
							</li>
							<li>Champion — CodeQuest School Programming Competition</li>
							<li>
								Competitor — ISITE National IT Skills Competition 2024, Java
								Programming
							</li>
							<li>Consistent President’s Lister</li>
						</ul>
					</div>
				</AboutSection>

				<section className="py-16">
					<div className="max-w-3xl">
						<h2 className="mt-4 font-logo text-4xl font-semibold text-primary">
							Skills
						</h2>

						<p className="mt-5 text-lg leading-8 text-muted">
							These are some of the languages, frameworks, platforms, and
							developer tools I have used in coursework, projects, and
							professional evaluation work.
						</p>
					</div>

					<ul className="mt-8 flex flex-wrap gap-3">
						{skills.map((skill) => (
							<li
								key={skill}
								className="border border-primary/15 bg-surface/80 px-4 py-2 font-mono text-sm text-primary"
							>
								{skill}
							</li>
						))}
					</ul>
				</section>
			</div>
		</div>
	);
}
