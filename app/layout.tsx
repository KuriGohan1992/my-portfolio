import type { Metadata } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
	variable: "--font-cormorant-garamond",
	subsets: ["latin"],
	weight: ["500", "600", "700"],
});

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		default: "Cham Mendez",
		template: "%s | Cham Mendez",
	},
	description: "Developer portfolio of Charl Emmanuel E. Mendez.",
};

const navigationLinks = [
	{ href: "/", label: "Home" },
	{ href: "/about", label: "About" },
	{ href: "/projects", label: "Projects" },
	{ href: "/contact", label: "Contact" },
];

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${cormorantGaramond.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
		>
			<body className="min-h-full flex flex-col bg-page font-sans text-primary">
				<header className="border-b border-primary/10">
					<div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
						<Link
							href="/"
							className="inline-block border-b border-primary pb-px font-logo text-3xl font-bold leading-none tracking-tight"
						>
							<span className="text-4xl">C</span>
							ham;
							<span className="inline-block bg-primary text-4xl leading-[0.9] text-page mx-0.5">
								M
							</span>
							endez
						</Link>

						<nav aria-label="Primary navigation">
							<ul className="flex gap-6 font-mono text-sm text-muted">
								{navigationLinks.map((link) => (
									<li key={link.href}>
										<Link
											href={link.href}
											className="transition-colors hover:text-primary"
										>
											{link.label}
										</Link>
									</li>
								))}
							</ul>
						</nav>
					</div>
				</header>
				<main className="flex-1">{children}</main>
			</body>
		</html>
	);
}
