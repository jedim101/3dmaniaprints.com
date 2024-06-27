import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

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
				<main className="grow">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
