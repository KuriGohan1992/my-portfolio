"use client";

import Image from "next/image";
import Link from "next/link";

interface ErrorPageProps {
	error: Error & {
		digest?: string;
	};
	reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
	return (
		<div className="min-h-screen bg-page">
			<main className="mx-auto flex min-h-screen w-full max-w-[80rem] items-center justify-center px-6 py-24 lg:px-10">
				<section className="w-full max-w-4xl text-center">
					<Image
						src="/errors/runtime-error.png"
						alt="Error. Runtime Exception."
						width={1280}
						height={720}
						priority
						className="mx-auto w-full max-w-3xl border border-primary/15"
					/>

					<h1 className="mt-4 font-logo text-4xl text-primary md:text-5xl">
						Something went wrong
					</h1>

					<p className="mx-auto mt-5 max-w-2xl text-base text-muted">
						The page encountered an unexpected error.
					</p>
					<p className="mx-auto max-w-2xl text-base text-muted">
						You can try loading it again, or return to the homepage.
					</p>

					{error.message && (
						<div className="mx-auto mt-6 max-w-2xl text-left">
							<p className="mb-2 font-mono text-sm uppercase tracking-[0.2em] text-accent">
								Error Message
							</p>
							<p className="border-l border-primary/15 pl-4 font-mono text-sm text-muted">
								{error.message}
							</p>
						</div>
					)}

					<div className="mt-8 flex flex-wrap justify-center gap-3">
						<button
							type="button"
							onClick={reset}
							className="border border-primary/15 px-4 py-2 font-mono text-sm text-muted transition-colors hover:border-primary hover:text-primary"
						>
							Try Again
						</button>

						<Link
							href="/"
							className="border border-primary/15 px-4 py-2 font-mono text-sm text-muted transition-colors hover:border-primary hover:text-primary"
						>
							Return Home
						</Link>
					</div>
				</section>
			</main>
		</div>
	);
}
