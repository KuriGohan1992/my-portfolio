import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { projects } from "../project-data";

interface ProjectPageProps {
	params: Promise<{ slug: string }>;
}
export function generateStaticParams() {
	return projects.map((project) => ({ slug: project.slug }));
}
export async function generateMetadata({
	params,
}: ProjectPageProps): Promise<Metadata> {
	const { slug } = await params;
	const project = projects.find((item) => item.slug === slug);
	if (!project) {
		return { title: "Project Not Found" };
	}
	return {
		title: project.title,
		description: project.description,
	};
}
export default async function ProjectPage({ params }: ProjectPageProps) {
	const { slug } = await params;
	const project = projects.find((item) => item.slug === slug);
	if (!project) {
		notFound();
	}
	return (
		<div className="min-h-screen bg-[radial-gradient(circle_at_top,#101316_0%,#0b0d0f_45%,#080909_100%)]">
			<main className="mx-auto w-full max-w-[80rem] px-6 pb-24 pt-24 lg:px-10">
				<Link
					href="/projects"
					className="font-mono text-sm text-muted transition-colors hover:text-primary"
				>
					← Back to Projects
				</Link>
				<section className="mt-6 grid gap-10 lg:grid-cols-[minmax(20rem,0.75fr)_minmax(0,1.25fr)] lg:items-start">
					<div>
						<h1 className="font-mono text-3xl text-primary md:text-4xl">
							{project.title}
						</h1>
						<p className="mt-3 max-w-xl text-base leading-7 text-muted">
							{project.description}
						</p>
						<section className="mt-6">
							<h2 className="font-mono text-sm uppercase tracking-[0.25em] text-accent">
								Features
							</h2>
							<ul className="mt-4 space-y-3 text-muted">
								{project.features.map((feature) => (
									<li key={feature} className="flex gap-3">
										<span className="text-muted">•</span>
										<span>{feature}</span>
									</li>
								))}
							</ul>
						</section>
						<div className="mt-5 flex flex-wrap items-center gap-3">
							{project.liveUrl && (
								<a
									href={project.liveUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 border rounded-full border-primary/15 px-4 py-2 font-mono text-sm text-muted transition-colors hover:border-primary hover:text-primary"
								>
									Live Demo
									<FiExternalLink className="size-4" />
								</a>
							)}
							<a
								href={project.github}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 border rounded-full border-primary/15 px-4 py-2 font-mono text-sm text-muted transition-colors hover:border-primary hover:text-primary"
							>
								View on GitHub
								<FaGithub className="size-4" />
							</a>
						</div>
					</div>
					<div>
						<div className="overflow-hidden rounded-md border border-muted/50 bg-surface">
							<iframe
								src={project.youtubeEmbedUrl}
								title={`${project.title} video demo`}
								className="aspect-video w-full"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								referrerPolicy="strict-origin-when-cross-origin"
								allowFullScreen
							/>
						</div>
						<div className="mt-5">
							<ul className="mt-3 flex flex-wrap gap-2">
								{project.technologies.map((technology) => (
									<li
										key={technology}
										className="rounded-full border border-muted px-3 py-1 font-mono text-xs text-primary"
									>
										{technology}
									</li>
								))}
							</ul>
						</div>
					</div>
				</section>
				<section className="mt-8 border-t border-muted pt-6">
					<h2 className="font-mono text-sm uppercase tracking-[0.25em] text-accent">
						Project Details
					</h2>
					<p className="mt-4 text-base leading-7 text-muted">
						{project.details}
					</p>
				</section>
			</main>
		</div>
	);
}
