import { products } from "@/lib/products";
import Spline from "@splinetool/react-spline";
import Link from "next/link";

export default function Products() {
	return (
		<div className="flex flex-col items-center space-y-24 p-12 pt-20">
			<h1 className="w-full text-center text-7xl font-semibold">Products</h1>
			<div className="mx-auto grid w-fit grid-cols-1 gap-12 lg:grid-cols-2 xl:grid-cols-3">
				{products.map((product) => (
					<Link
						key={product.name}
						href={`/products/${product.name.replace(" ", "_")}`}
						className="flex w-full max-w-sm flex-col space-y-6 rounded-3xl bg-slate-700 p-8 pt-4 text-center duration-150 hover:scale-110">
						<Spline className="aspect-square w-full" scene={product.spline} />
						<span className="text-3xl">{product.name}</span>
					</Link>
				))}
			</div>
		</div>
	);
}
