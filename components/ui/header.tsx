import Image from "next/image";
import Link from "next/link";

export default function Header() {
	return (
		<div className="flex w-full items-center bg-slate-900 p-4">
			<Link href="/" className="h-12 w-12">
				<Image src="/images/3D Mania.png" className="h-full w-full object-contain" height={48} width={48} alt="logo" />
			</Link>
		</div>
	);
}
