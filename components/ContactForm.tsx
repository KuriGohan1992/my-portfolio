"use client";

import { useActionState } from "react";

import { useFormStatus } from "react-dom";

import {
	type ContactFormState,
	sendContactMessage,
} from "@/app/contact/actions";

const initialContactFormState: ContactFormState = {
	status: "idle",
	message: "",
};

function SubmitButton() {
	const { pending } = useFormStatus();

	return (
		<button
			type="submit"
			disabled={pending}
			className="border rounded-md border-primary/15 px-4 py-2 font-mono text-sm text-muted transition-colors hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-50"
		>
			{pending ? "Sending..." : "Send Message"}
		</button>
	);
}

export default function ContactForm() {
	const [state, formAction] = useActionState(
		sendContactMessage,
		initialContactFormState,
	);

	return (
		<form action={formAction} className="mt-8 max-w-2xl space-y-5">
			<div>
				<label htmlFor="name" className="font-mono text-sm text-muted">
					Name
				</label>
				<input
					id="name"
					name="name"
					type="text"
					required
                    placeholder="Your name..."
					className="mt-2 w-full border rounded-md border-primary/15 bg-surface px-4 py-3 text-primary outline-none transition-colors focus:border-primary"
				/>
			</div>

			<div>
				<label htmlFor="email" className="font-mono text-sm text-muted">
					Email
				</label>
				<input
					id="email"
					name="email"
					type="email"
					required
                    placeholder="Your email..."
					className="mt-2 w-full border rounded-md border-primary/15 bg-surface px-4 py-3 text-primary outline-none transition-colors focus:border-primary"
				/>
			</div>

			<div>
				<label htmlFor="message" className="font-mono text-sm text-muted">
					Message
				</label>
				<textarea
					id="message"
					name="message"
					required
                    placeholder="Your message..."
					rows={7}
					className="mt-2 w-full resize-none border rounded-md border-primary/15 bg-surface px-4 py-3 text-primary outline-none transition-colors focus:border-primary"
				/>
			</div>

			<div className="flex flex-wrap items-center gap-4">
				<SubmitButton />

				{state.message && (
					<p
						className={
							state.status === "success"
								? "font-mono text-sm text-accent"
								: "font-mono text-sm text-muted"
						}
					>
						{state.message}
					</p>
				)}
			</div>
		</form>
	);
}
