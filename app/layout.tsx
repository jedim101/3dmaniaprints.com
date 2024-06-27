import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";

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
			<body className={`min-h-screen ${inter.className}`}>
				<Header />
				{children}
			</body>
		</html>
	);
}
