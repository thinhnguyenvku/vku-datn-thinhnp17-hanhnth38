import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider, SignIn } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata = {
	title: "VKU JOB PORTAL - AI Mock Interview",
	description: "AI Extension for VKU Job Portal",
};

export default function RootLayout({ children }) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body
					className={`${geistSans.variable} ${geistMono.variable} antialiased`}
				>
					<main>
						<Toaster />
						{children}
					</main>
				</body>
			</html>
		</ClerkProvider>
	);
}

export function Home() {
	return (
		<div>
			<SignIn />
		</div>
	);
}
