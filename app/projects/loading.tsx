export default function ProjectsLoading() {
	return (
		<div className="bg-page">
			<div className="mx-auto w-full max-w-[76rem] px-6 pt-28 lg:px-10">
				<section className="grid animate-pulse items-stretch gap-8 md:grid-cols-2 xl:grid-cols-3">
					{Array.from({ length: 6 }).map((_, index) => (
						<article
							key={index}
							className="overflow-hidden rounded-md border border-primary/15 bg-surface"
						>
							<div className="h-44 bg-primary/10" />

							<div className="p-4">
								<div className="h-5 w-40 bg-primary/15" />

								<div className="mt-4 space-y-3">
									<div className="h-4 w-full bg-primary/10" />
									<div className="h-4 w-11/12 bg-primary/10" />
									<div className="h-4 w-3/4 bg-primary/10" />
								</div>

								<div className="mt-4 flex flex-wrap gap-2">
									<div className="h-7 w-24 rounded-full bg-primary/10" />
									<div className="h-7 w-16 rounded-full bg-primary/10" />
									<div className="h-7 w-24 rounded-full bg-primary/10" />
								</div>

								<div className="mt-5 flex items-center justify-between">
									<div className="h-4 w-24 bg-primary/10" />
									<div className="size-6 rounded-full bg-primary/10" />
								</div>
							</div>
						</article>
					))}
				</section>
			</div>
		</div>
	);
}