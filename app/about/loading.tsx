export default function AboutLoading() {
	return (
		<div className="bg-page">
			<div className="mx-auto w-full max-w-[92rem] px-6 pb-40 pt-28 lg:px-10">
				<div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(30rem,0.85fr)] lg:items-start">
					<article className="w-full animate-pulse">
						<div className="h-4 w-32 bg-primary/15" />

						<div className="mt-8 space-y-6">
							<div className="space-y-3">
								<div className="h-4 w-full bg-primary/10" />
								<div className="h-4 w-11/12 bg-primary/10" />
								<div className="h-4 w-4/5 bg-primary/10" />
							</div>

							<div className="space-y-3">
								<div className="h-4 w-full bg-primary/10" />
								<div className="h-4 w-10/12 bg-primary/10" />
								<div className="h-4 w-3/4 bg-primary/10" />
							</div>

							<div className="space-y-3">
								<div className="h-4 w-11/12 bg-primary/10" />
								<div className="h-4 w-full bg-primary/10" />
								<div className="h-4 w-3/4 bg-primary/10" />
							</div>
						</div>

						<section className="mt-10">
							<div className="h-4 w-56 bg-primary/15" />

							<div className="mt-8 space-y-6">
								{Array.from({ length: 3 }).map((_, groupIndex) => (
									<div key={groupIndex}>
										<div className="h-4 w-28 bg-primary/10" />

										<div className="mt-4 flex flex-wrap gap-x-8 gap-y-5">
											{Array.from({ length: 5 }).map((_, index) => (
												<div key={index} className="flex items-center gap-3">
													<div className="size-6 bg-primary/10" />
													<div className="h-4 w-20 bg-primary/10" />
												</div>
											))}
										</div>
									</div>
								))}
							</div>
						</section>
					</article>

					<section className="w-full max-w-xl justify-self-end animate-pulse">
						<div className="mb-6 h-4 w-48 bg-primary/15" />

						<div className="grid min-h-[34rem] grid-cols-2 gap-3">
							<div className="space-y-3">
								<div className="h-48 bg-primary/10" />
								<div className="h-[25rem] bg-primary/10" />
							</div>

							<div className="space-y-3">
								<div className="h-[25rem] bg-primary/10" />
								<div className="h-48 bg-primary/10" />
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}