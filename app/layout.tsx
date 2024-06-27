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
			<body className={`flex min-h-screen flex-col ${inter.className}`}>
				<Header />
				<main className="grow bg-gray-800">{children}</main>
				<Footer />

				{/* Vercel Analytics */}
				<Analytics />
			</body>
		</html>
	);
}
