"use client";

import { useEffect, useState } from "react";

type Greeting =
	| "Good morning"
	| "Good afternoon"
	| "Good evening"
	| "You should be asleep but...";

function getGreeting(hour: number): Greeting {
	if (hour >= 5 && hour < 12) {
		return "Good morning";
	} else if (hour >= 12 && hour < 18) {
		return "Good afternoon";
	} else if (hour >= 18) {
		return "Good evening";
	}
	return "You should be asleep but...";
}

export default function TimeGreeting() {
	const [greeting, setGreeting] = useState<Greeting | null>(null);

	useEffect(() => {
		const updateGreeting = () => {
			const currentHour = new Date().getHours();
			setGreeting(getGreeting(currentHour));
		};

		updateGreeting();

		const timer = window.setInterval(updateGreeting, 60_000);

		return () => {
			window.clearInterval(timer);
		};
	}, []);

	return <span>{greeting ?? "Welcome"}</span>;
}
