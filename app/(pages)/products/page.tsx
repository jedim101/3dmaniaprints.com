import { products } from "@/lib/products";
import Spline from "@splinetool/react-spline";
import Link from "next/link";

export default function Products() {
	return (
		<div className="flex flex-col items-center space-y-24 p-12 pt-20">
			<h1 className="w-full text-center text-7xl font-semibold">Products</h1>
			<div className="mx-auto grid w-full max-w-4xl grid-cols-2 gap-12">
				{products.map((product) => (
					<Link
						key={product.name}
						href={`/products/${product.name.replace(" ", "_")}`}
						className="flex w-full rounded-xl bg-slate-700">
						<Spline className="aspect-square w-full" scene={product.spline} />
					</Link>
				))}
			</div>
		</div>
	);
}
