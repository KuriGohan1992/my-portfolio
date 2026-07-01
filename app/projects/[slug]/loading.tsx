export default function ProjectDetailLoading() {
	return (
		<div className="min-h-screen bg-[radial-gradient(circle_at_top,#101316_0%,#0b0d0f_45%,#080909_100%)]">
			<main className="mx-auto w-full max-w-[80rem] px-6 pb-24 pt-24 lg:px-10">
				<div className="animate-pulse">
					<div className="h-4 w-40 bg-primary/10" />

					<section className="mt-6 grid gap-10 lg:grid-cols-[minmax(20rem,0.75fr)_minmax(0,1.25fr)] lg:items-start">
						<div>
							<div className="h-10 w-64 bg-primary/15" />

							<div className="mt-5 space-y-3">
								<div className="h-4 w-full bg-primary/10" />
								<div className="h-4 w-4/5 bg-primary/10" />
							</div>

							<div className="mt-8 h-4 w-36 bg-primary/15" />

							<div className="mt-5 space-y-4">
								{Array.from({ length: 6 }).map((_, index) => (
									<div key={index} className="flex gap-3">
										<div className="size-2 translate-y-2 rounded-full bg-primary/10" />
										<div className="h-4 w-10/12 bg-primary/10" />
									</div>
								))}
							</div>

							<div className="mt-6 flex gap-3">
								<div className="h-10 w-32 border border-primary/10 bg-primary/5" />
								<div className="h-10 w-40 border border-primary/10 bg-primary/5" />
							</div>
						</div>

						<div>
							<div className="aspect-video w-full rounded-md border border-muted/30 bg-primary/10" />

							<div className="mt-5 flex flex-wrap gap-2">
								<div className="h-7 w-16 rounded-full bg-primary/10" />
								<div className="h-7 w-16 rounded-full bg-primary/10" />
								<div className="h-7 w-28 rounded-full bg-primary/10" />
							</div>
						</div>
					</section>

					<section className="mt-8 border-t border-muted/30 pt-6">
						<div className="h-4 w-48 bg-primary/15" />

						<div className="mt-5 space-y-3">
							<div className="h-4 w-full bg-primary/10" />
							<div className="h-4 w-11/12 bg-primary/10" />
							<div className="h-4 w-3/4 bg-primary/10" />
						</div>
					</section>
				</div>
			</main>
		</div>
	);
}