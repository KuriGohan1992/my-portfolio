import Image from "next/image";
import type { ReactNode } from "react";

interface AboutSectionProps {
	title: string;
	imageSrc: string;
	imageAlt: string;
	imageOnRight?: boolean;
	children: ReactNode;
}

export default function AboutSection({
	title,
	imageSrc,
	imageAlt,
	imageOnRight = false,
	children,
}: AboutSectionProps) {
	return (
		<section className="grid items-center gap-10 border-b border-primary/10 py-16 md:grid-cols-2">
			<figure className={imageOnRight ? "md:order-2" : undefined}>
				<div className="overflow-hidden border border-primary/15 bg-surface">
					<Image
						src={imageSrc}
						alt={imageAlt}
						width={900}
						height={700}
						className="h-auto w-full object-cover"
					/>
				</div>
			</figure>

			<div className={imageOnRight ? "md:order-1" : undefined}>
				<h2 className="font-logo text-4xl font-semibold text-primary">
					{title}
				</h2>

				<div className="mt-5 space-y-4 text-lg leading-8 text-muted">
					{children}
				</div>
			</div>
		</section>
	);
}
