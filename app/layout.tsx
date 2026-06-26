import type { Metadata } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
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
				<header className="fixed inset-x-0 top-0 z-50 border-b border-primary/10 bg-page/80 backdrop-blur">
					{/* <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
						<Image
							src="/images/white-logo.png"
							width={200}
							height={100}
							alt="Picture of the author"
						/> */}
					{/* Alt Version of my logo */}
					<div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-2">
						<Image
							src="/images/white-logo-gear.png"
							width={200}
							height={100}
							alt="Picture of the author"
						/>
						<nav aria-label="Primary navigation">
							<ul className="flex gap-6 font-logo text-sm text-muted">
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
