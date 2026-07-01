import type { Metadata } from "next";

import ProjectCard from "@/components/ProjectCard";
import { projects } from "./project-data";

export const metadata: Metadata = {
	title: "Projects",
	description:
		"A collection of software projects I've built throughout college, internships, and personal experimentation.",
};

export default function ProjectsPage() {
	return (
		<div className="bg-page">
			<div className="mx-auto w-full max-w-[76rem] px-6 pt-28 lg:px-10">
				<section className="grid items-stretch gap-8 md:grid-cols-2 xl:grid-cols-3">
					{projectas.map((project, index) => (
						<ProjectCard
							key={project.slug}
							project={project}
							patternIndex={index}
						/>
					))}
				</section>
			</div>
		</div>
	);
}
