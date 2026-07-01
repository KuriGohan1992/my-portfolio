import type { Metadata } from "next";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
	title: "Contact",
	description:
		"Contact Cham Mendez for software development opportunities, projects, and collaborations.",
};

export default function ContactPage() {
	return (
		<div className="min-h-screen bg-page">
			<main className="mx-auto w-full max-w-[80rem] px-6 pb-24 pt-28 lg:px-10">
				<section className="grid min-h-[32rem] gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
					<div>
						<h1 className="font-logo text-4xl text-primary md:text-5xl">
							Let’s get in touch.
						</h1>

						<p className="mt-5 max-w-xl text-base leading-7 text-muted">
							Send me a message about opportunities, projects, internships, or
							anything related to software development.
						</p>

						<div className="mt-8 flex flex-wrap gap-3">
							<Link
								href="https://github.com/KuriGohan1992"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 rounded-full border border-primary/15 px-4 py-2 font-mono text-sm text-muted transition-colors hover:border-accent hover:text-accent"
							>
								<FaGithub className="size-5" />
								GitHub
							</Link>

							<Link
								href="https://www.linkedin.com/in/cham-mendez"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 rounded-full border border-primary/15 px-4 py-2 font-mono text-sm text-muted transition-colors hover:border-accent hover:text-accent"
							>
								<FaLinkedin className="size-5" />
								LinkedIn
							</Link>
						</div>
					</div>

					<ContactForm />
				</section>
			</main>
		</div>
	);
}
