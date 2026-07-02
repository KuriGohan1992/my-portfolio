"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { GalleryCollection } from "@/app/about/gallery-data";

interface AboutGalleryProps {
	collections: GalleryCollection[];
}

export default function AboutGallery({ collections }: AboutGalleryProps) {
	const [selectedCollectionIndex, setSelectedCollectionIndex] = useState<
		number | null
	>(null);

	const [selectedImageIndex, setSelectedImageIndex] = useState(0);

	const lastTriggerRef = useRef<HTMLButtonElement | null>(null);
	const closeButtonRef = useRef<HTMLButtonElement | null>(null);

	const selectedCollection =
		selectedCollectionIndex === null
			? null
			: collections[selectedCollectionIndex];

	const selectedImage = selectedCollection?.images[selectedImageIndex] ?? null;

	function openCollection(collectionIndex: number, trigger: HTMLButtonElement) {
		lastTriggerRef.current = trigger;
		setSelectedCollectionIndex(collectionIndex);
		setSelectedImageIndex(0);
	}

	function closeCollection() {
		setSelectedCollectionIndex(null);
		setSelectedImageIndex(0);

		requestAnimationFrame(() => {
			lastTriggerRef.current?.focus();
		});
	}

	function showPreviousImage() {
		if (!selectedCollection) {
			return;
		}

		setSelectedImageIndex((currentIndex) => {
			if (currentIndex === 0) {
				return selectedCollection.images.length - 1;
			}

			return currentIndex - 1;
		});
	}

	function showNextImage() {
		if (!selectedCollection) {
			return;
		}

		setSelectedImageIndex((currentIndex) => {
			if (currentIndex === selectedCollection.images.length - 1) {
				return 0;
			}

			return currentIndex + 1;
		});
	}

	useEffect(() => {
		if (selectedCollectionIndex === null) {
			return;
		}

		const collectionIndex = selectedCollectionIndex;
		const previousOverflow = document.body.style.overflow;

		document.body.style.overflow = "hidden";
		closeButtonRef.current?.focus();

		function handleKeyDown(event: KeyboardEvent) {
			const currentCollection = collections[collectionIndex];

			if (!currentCollection) {
				return;
			}

			if (event.key === "Escape") {
				setSelectedCollectionIndex(null);
				setSelectedImageIndex(0);

				requestAnimationFrame(() => {
					lastTriggerRef.current?.focus();
				});
			}

			if (event.key === "ArrowLeft") {
				setSelectedImageIndex((currentIndex) => {
					if (currentIndex === 0) {
						return currentCollection.images.length - 1;
					}

					return currentIndex - 1;
				});
			}

			if (event.key === "ArrowRight") {
				setSelectedImageIndex((currentIndex) => {
					if (currentIndex === currentCollection.images.length - 1) {
						return 0;
					}

					return currentIndex + 1;
				});
			}
		}

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			document.body.style.overflow = previousOverflow;
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [collections, selectedCollectionIndex]);

	return (
		<>
			<div className="columns-1 gap-3 sm:columns-2">
				{collections.map((collection, collectionIndex) => {
					const coverImage = collection.images[0];

					return (
						<button
							key={collection.id}
							type="button"
							onClick={(event) => {
								openCollection(collectionIndex, event.currentTarget);
							}}
							aria-label={`Open ${collection.title} gallery`}
							className={`${collection.gridClassName} group relative mb-3 block w-full break-inside-avoid overflow-hidden border border-primary/15 bg-surface text-left transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent`}
						>
							<Image
								src={coverImage.src}
								alt=""
								fill
								sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
								className="object-cover transition-transform duration-500 group-hover:scale-105"
							/>

							<div
								aria-hidden="true"
								className="absolute inset-0 bg-linear-to-t from-black/90 via-black/15 to-transparent"
							/>

							<div
								aria-hidden="true"
								className="pointer-events-none absolute inset-0"
							>
								<div className="absolute left-3 top-3 size-5 border-l border-t border-accent/25" />

								<div className="absolute bottom-3 right-3 size-5 border-b border-r border-accent/25" />
							</div>

							<div className="absolute inset-x-0 bottom-0 p-4">
								<h2 className="font-logo text-xl font-semibold text-white">
									{collection.title}
								</h2>

								<p className="mt-1 font-mono text-xs text-white/70">
									{collection.images.length}{" "}
									{collection.images.length === 1 ? "photo" : "photos"}
								</p>
							</div>
						</button>
					);
				})}
			</div>

			{selectedCollection && selectedImage && (
				<div
					role="dialog"
					aria-modal="true"
					aria-labelledby="gallery-dialog-title"
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-3 backdrop-blur-sm sm:p-5"
					onMouseDown={(event) => {
						if (event.target === event.currentTarget) {
							closeCollection();
						}
					}}
				>
					<div className="relative grid h-[92dvh] w-full max-w-7xl overflow-hidden border border-white/15 bg-page lg:grid-cols-[minmax(0,1fr)_24rem]">
						<h2 id="gallery-dialog-title" className="sr-only">
							{selectedCollection.title}
						</h2>

						<button
							ref={closeButtonRef}
							type="button"
							onClick={closeCollection}
							className="absolute right-4 top-4 z-20 border border-primary/15 bg-page/80 px-3 py-2 font-mono text-sm text-muted backdrop-blur transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
						>
							Close
						</button>

						<div className="flex min-h-0 flex-col">
							<div className="relative min-h-0 flex-1">
								<Image
									src={selectedImage.src}
									alt={selectedImage.alt}
									fill
									sizes="(min-width: 1024px) 75vw, 100vw"
									className="object-contain p-4"
									priority
								/>

								{selectedCollection.images.length > 1 && (
									<>
										<button
											type="button"
											onClick={showPreviousImage}
											aria-label="Show previous image"
											className="absolute left-4 top-1/2 -translate-y-1/2 border border-white/20 bg-black/60 px-3 py-2 font-mono text-sm text-white backdrop-blur transition-colors hover:border-accent hover:text-accent"
										>
											←
										</button>

										<button
											type="button"
											onClick={showNextImage}
											aria-label="Show next image"
											className="absolute right-4 top-1/2 -translate-y-1/2 border border-white/20 bg-black/60 px-3 py-2 font-mono text-sm text-white backdrop-blur transition-colors hover:border-accent hover:text-accent"
										>
											→
										</button>
									</>
								)}
							</div>

							<div className="border-t border-white/10 px-4 py-4">
								<ul className="flex gap-3 overflow-x-auto pb-2">
									{selectedCollection.images.map((image, imageIndex) => {
										const isSelected = imageIndex === selectedImageIndex;

										return (
											<li key={image.src} className="shrink-0">
												<button
													type="button"
													onClick={() => {
														setSelectedImageIndex(imageIndex);
													}}
													aria-label={`Show image ${imageIndex + 1}: ${image.title}`}
													aria-current={isSelected ? "true" : undefined}
													className={`relative h-20 w-28 overflow-hidden border transition ${
														isSelected
															? "border-accent"
															: "border-white/15 opacity-60 hover:opacity-100"
													}`}
												>
													<Image
														src={image.src}
														alt=""
														fill
														sizes="112px"
														className="object-cover"
													/>
												</button>
											</li>
										);
									})}
								</ul>
							</div>
						</div>

						<aside className="overflow-y-auto border-t border-white/10 p-6 pt-16 lg:border-l lg:border-t-0 lg:pt-8">
							<h3 className="font-logo text-3xl text-primary">
								{selectedCollection.title}
							</h3>

							<p className="mt-3 text-md leading-6 text-muted">
								{selectedCollection.description}
								{selectedCollection.driveLink && (
									<Link
										href={selectedCollection.driveLink}
										target="_blank"
										rel="noopener noreferrer"
										className="text-primary hover:underline"
									>
										here.
									</Link>
								)}
							</p>

							<div className="mt-4">
								<p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
									{selectedImageIndex + 1} of {selectedCollection.images.length}
								</p>

								<h4 className="mt-3 font-logo text-3xl text-primary">
									{selectedImage.title}
								</h4>

								<p className="my-3 leading-7 text-muted">
									{selectedImage.description}
								</p>

								{selectedImage.referenceLink && (
									<Link
										href={selectedImage.referenceLink}
										target="_blank"
										rel="noopener noreferrer"
										className="text-accent hover:underline"
									>
										Reference
									</Link>
								)}
							</div>
						</aside>
					</div>
				</div>
			)}
		</>
	);
}
