import type { Metadata } from "next";

import AboutGallery from "@/components/AboutGallery";
import { aboutGalleryCollections } from "./gallery-data";
import { skillGroups } from "./skills-data";

export const metadata: Metadata = {
	title: "About",
	description:
		"Learn about Cham Mendez, his development experience, technical toolkit, interests, and creative work.",
};

export default function AboutPage() {
	// await new Promise((resolve) => setTimeout(resolve, 3000));
	return (
		<div className="bg-page">
			<div className="mx-auto w-full max-w-[92rem] px-6 pb-40 pt-28 lg:px-10">
				<div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(30rem,0.85fr)] lg:items-start">
					<article className="w-full">
						<p className="font-mono text-sm uppercase tracking-[0.3em] text-accent">
							About me
						</p>

						<div className="mt-5 space-y-5 text-base leading-7 text-muted">
							<p>
								I’m Charl Emmanuel E. Mendez, a Computer Science student and
								software developer focused on web and mobile development. I
								enjoy understanding how systems work and turning ideas into
								practical, well-designed applications.
							</p>

							<p>
								I’m currently gaining professional experience as a Software
								Engineering Intern at Stratpoint, where I continue developing my
								technical skills, learning modern engineering workflows, and
								working in a collaborative environment.
							</p>

							<p>
								Outside development, I enjoy drawing, badminton, games, anime,
								music, solving puzzles, and continually improving my workspace.
								These interests influence how I approach creativity,
								problem-solving, and the projects I choose to build.
							</p>
						</div>

						<section
							aria-labelledby="technical-toolkit-heading"
							className="mt-10"
						>
							<div className="flex items-center gap-4">
								<h2
									id="technical-toolkit-heading"
									className="shrink-0 font-mono text-sm uppercase tracking-[0.25em] text-accent"
								>
									Technical toolkit
								</h2>
							</div>

							<div className="mt-6 space-y-5">
								{skillGroups.map((group) => (
									<section key={group.title}>
										<h3 className="font-mono text-sm text-muted">
											{group.title}
										</h3>

										<ul className="mt-3 flex flex-wrap gap-x-6 gap-y-4">
											{group.skills.map((skill) => {
												const Icon = skill.icon;

												return (
													<li
														key={skill.name}
														className="inline-flex items-center gap-2 text-muted transition-colors hover:text-accent"
													>
														<Icon
															aria-hidden="true"
															className="size-6 shrink-0"
														/>

														<span className="font-mono text-sm">
															{skill.name}
														</span>
													</li>
												);
											})}
										</ul>
									</section>
								))}
							</div>
						</section>
					</article>

					<section
						aria-labelledby="personal-gallery-heading"
						className="w-full max-w-xl justify-self-end"
					>
						<h2
							id="technical-toolkit-heading"
							className="mb-6 shrink-0 font-mono text-sm uppercase tracking-[0.25em] text-accent"
						>
							Personal Gallery
						</h2>

						<AboutGallery collections={aboutGalleryCollections} />
					</section>
				</div>
			</div>
		</div>
	);
}
