import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "3D Mania Prints",
	description: "Unique 3D Printed items for Fun & Function",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className}`}>
				<Header />
				<main className="min-h-[calc(100vh-4rem)] bg-slate-800 text-white">{children}</main>
				<Footer />

				{/* Vercel Analytics */}
				<Analytics />
			</body>
		</html>
	);
}
