import Image from "next/image";
import Link from "next/link";

export default function Header() {
	return (
		<div className="flex w-full items-center bg-zinc-900 p-2">
			<Link href="/" className="flex items-center space-x-2">
				<Image src="/images/3D Mania.png" className="h-12 w-12 object-contain" height={48} width={48} alt="logo" />
				<span className="translate-y-0.5 text-xl font-bold text-slate-200">3D Mania Prints</span>
			</Link>
		</div>
	);
}
