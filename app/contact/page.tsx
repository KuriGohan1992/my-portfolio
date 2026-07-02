import type { Metadata } from "next";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
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
							Let’s get in touch
						</h1>

						<p className="mt-5 max-w-xl text-base leading-7 text-muted">
							Send me a message about opportunities, projects, internships, or
							anything related to software development.
						</p>

						<div className="mt-8 flex flex-col gap-3">
							<a
								href="https://github.com/KuriGohan1992"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex w-fit items-center gap-2 font-mono text-md text-primary transition-colors hover:border-primary hover:text-primary"
							>
								<FaGithub className="size-5" />
								Github: <span className="hover:underline">KuriGohan1992</span>
							</a>

							<a
								href="https://www.linkedin.com/in/cham-mendez"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex w-fit items-center gap-2 font-mono text-md text-primary transition-colors hover:border-primary hover:text-primary"
							>
								<FaLinkedin className="size-5" />
								LinkedIn: <span className="hover:underline">Cham Mendez</span>
							</a>

							<a
								href="mailto:chammendez92905@gmail.com"
								className="inline-flex w-fit items-center gap-2 font-mono text-md text-primary transition-colors hover:border-primary hover:text-primary"
							>
								<HiOutlineMail className="size-5" />
								Email:{" "}
								<span className="hover:underline">
									chammendez92905 [at] gmail (dot) com
								</span>
							</a>
						</div>
					</div>

					<ContactForm />
				</section>
			</main>
		</div>
	);
}
