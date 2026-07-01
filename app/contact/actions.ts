"use server";

import { Resend } from "resend";

export interface ContactFormState {
	status: "idle" | "success" | "error";
	message: string;
}

function escapeHtml(value: string) {
	return value
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;")
		.replaceAll("'", "&#039;");
}

export async function sendContactMessage(
	_previousState: ContactFormState,
	formData: FormData,
): Promise<ContactFormState> {
	const name = String(formData.get("name") ?? "").trim();
	const email = String(formData.get("email") ?? "").trim();
	const message = String(formData.get("message") ?? "").trim();

	const safeName = escapeHtml(name);
	const safeEmail = escapeHtml(email);
	const safeMessage = escapeHtml(message);

	if (!name || !email || !message) {
		return { status: "error", message: "Please fill out all fields." };
	}

	try {
		const resend = new Resend(process.env.RESEND_API_KEY);

		const { error } = await resend.emails.send({
			from:
				process.env.RESEND_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
			to: process.env.CONTACT_TO_EMAIL ?? "",
			replyTo: email,
			subject: `Portfolio message from ${name}`,
			text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
			html: `
            <div style="margin:0;padding:24px;background:#ffffff;font-family:Arial,sans-serif;">
            <div style="max-width:430px;margin:0 auto;">
                <div style="background:#e85f55;border:6px solid #262626;border-radius:26px;padding:16px;box-shadow:0 18px 40px rgba(0,0,0,0.28);">
                <div style="background:#3b3b3f;border:5px solid #555;border-radius:12px;padding:8px;">
                    <div style="background:#111;color:#fff;padding:8px 10px;font-size:14px;">
                    <span style="letter-spacing:2px;">▮▮▮</span>
                    <span style="float:right;">▣</span>
                    </div>

                    <div style="background:#5277bd;color:#ffffff;font-size:20px;font-weight:bold;padding:8px 10px;border-top:2px solid #86a5dd;border-bottom:2px solid #2d4f92;">
                    ◁ Back &nbsp; ✉ Receive mail
                    </div>

                    <table style="width:100%;border-collapse:collapse;background:#fff;color:#000;font-size:20px;">
                    <tr>
                        <td style="width:48px;background:#e33b22;color:#fff;text-align:center;font-weight:bold;padding:8px 0;">frm</td>
                        <td style="padding:8px 10px;border-bottom:2px solid #444;">${safeName}</td>
                    </tr>
                    <tr>
                        <td style="width:48px;background:#e33b22;color:#fff;text-align:center;font-weight:bold;padding:8px 0;">eml</td>
                        <td style="padding:8px 10px;border-bottom:2px solid #444;">
                            <a href="mailto:${safeEmail}" style="color:#003cff;">${safeEmail}</a>
                        </td>
                    </tr>
                    </table>

                    <div style="background:#fff;color:#000;padding:18px 12px 24px;font-size:20px;line-height:1.35;min-height:220px;">

                        <p style="margin:0;white-space:pre-wrap;">${safeMessage}</p>
                    </div>
                </div>
                </div>

                <p style="margin:14px 0 0;text-align:center;color:#71717a;font-size:12px;">
                Sent from your portfolio contact form.
                </p>
            </div>
            </div>
            `,
		});

		if (error) {
			return {
				status: "error",
				message: "Something went wrong while sending your message.",
			};
		}

		return {
			status: "success",
			message: "Message sent successfully!",
		};
	} catch {
		return {
			status: "error",
			message: "Something went wrong while sending your message.",
		};
	}
}
