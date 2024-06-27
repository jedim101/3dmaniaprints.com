import Link from "next/link";

const links = [
	{ display: "Products", href: "/products" },
	{ display: "Contact", href: "/contact" },
	{ display: "About", href: "/about" },
	{ display: "Etsy", href: "/etsy" },
];

export default function Footer() {
	return (
		<div className="text-slate font-sm flex w-full flex-col items-center space-y-4 border-t border-zinc-700 bg-zinc-900 p-10 text-sm font-light text-gray-400">
			<div className="flex justify-center space-x-8 text-base">
				{links.map((link) => (
					<Link href={link.href} key={link.display} className="hover:text-gray-200">
						{link.display}
					</Link>
				))}
			</div>
			<div className="h-px w-96 bg-gradient-to-r from-transparent via-gray-600" />
			<p>
				&copy; 2024{" "}
				<Link href="https://matthewglasser.org" target="_blank" className="font-semibold hover:text-gray-200">
					Matthew Glasser
				</Link>
				. All rights reserved.
			</p>
		</div>
	);
}
