"use client";

import Image from "next/image";
import Link from "next/link";

export default function NotFoundPage() {
	return (
		<div className="min-h-screen bg-page">
			<main className="mx-auto flex min-h-screen w-full max-w-[80rem] items-center justify-center px-6 py-24 lg:px-10">
				<section className="w-full max-w-4xl text-center">
					<Image
						src="/errors/page-not-found.png"
						alt="Error. Page not Found."
						width={1280}
						height={720}
						priority
						className="mx-auto w-full max-w-3xl border border-primary/15"
					/>

					<h1 className="mt-4 font-logo text-4xl text-primary md:text-5xl">
                        Error 404: Page not found
                    </h1>

					<p className="mx-auto mt-5 max-w-2xl text-base text-muted">
						The page you are looking for does not exist.
					</p>
					<p className="mx-auto max-w-2xl text-base text-muted">
						It may have been moved, renamed, or never existed.
					</p>

					<div className="mt-8 flex flex-wrap justify-center gap-3">
                        <button
                            type="button"
                            onClick={() => window.history.back()}
                            className="border border-primary/15 px-4 py-2 font-mono text-sm text-muted transition-colors hover:border-primary hover:text-primary"
                        >
                            Go Back
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