import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

import type { Project } from "@/app/projects/project-data";

interface ProjectCardProps {
	project: Project;
	patternIndex: number;
}

const patternClasses = [
	"bg-[position:0%_0%]",
	"bg-[position:35%_20%]",
	"bg-[position:80%_10%]",
	"bg-[position:20%_80%]",
	"bg-[position:65%_70%]",
	"bg-[position:100%_45%]",
];

export default function ProjectCard({
	project,
	patternIndex,
}: ProjectCardProps) {
	const patternClass = patternClasses[patternIndex % patternClasses.length];

	return (
		<article className="group relative flex h-full flex-col overflow-hidden rounded-md border border-primary/15 bg-surface transition-colors duration-300 hover:border-primary/35">
			<div
				aria-hidden="true"
				className={`absolute inset-0 bg-[url('/backgrounds/vectors.webp')] bg-cover bg-no-repeat opacity-[0.08] transition-opacity duration-300 group-hover:opacity-[0.18] ${patternClass}`}
			/>

			<div aria-hidden="true" className="absolute inset-0 bg-surface/40" />
			<Link
				href={`/projects/${project.slug}`}
				aria-label={`View more information about ${project.title}`}
				className="absolute inset-0 z-20"
			>
				<span className="sr-only">View {project.title}</span>
			</Link>

			<div className="relative z-10 h-44 overflow-hidden bg-page">
				{/* <div className="flex h-full w-full items-center justify-center font-mono text-sm text-muted">
					Preview
				</div> */}

				<video
					className="h-full w-full object-cover"
					autoPlay
					muted
					loop
					playsInline
				>
					<source src={project.preview} type="video/webm" />
				</video>
			</div>

			<div className="pointer-events-none relative z-30 flex flex-1 flex-col p-4">
				<div>
					<h2 className="font-mono text-xl text-primary transition-colors group-hover:text-accent">
						{project.title}
					</h2>

					<p className="mt-2 text-sm leading-6 text-muted transition-colors group-hover:text-primary">
						{project.description}
					</p>
				</div>

				<ul className="mt-3 flex flex-wrap gap-2">
					{project.technologies.map((technology) => (
						<li
							key={technology}
							className="rounded-full border border-primary/15 px-2.5 py-1 font-mono text-xs text-muted transition-colors group-hover:border-primary/30 group-hover:text-primary"
						>
							{technology}
						</li>
					))}
				</ul>

				<div className="pointer-events-auto mt-auto flex items-center justify-between pt-4">
					<Link
						href={`/projects/${project.slug}`}
						className="font-mono text-sm text-muted transition-colors hover:text-primary"
					>
						More Info
					</Link>

					<div className="flex items-center gap-4">
						{project.liveUrl && (
							<Link
								href={project.liveUrl}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`Launch ${project.title}`}
								className="text-muted transition-colors hover:text-primary"
							>
								<FiExternalLink className="size-5" />
							</Link>
						)}

						{project.github && (
							<Link
								href={project.github}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`${project.title} GitHub repository`}
								className="text-muted transition-colors hover:text-primary"
							>
								<FaGithub className="size-6" />
							</Link>
						)}
					</div>
				</div>
			</div>
		</article>
	);
}
