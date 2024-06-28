"use client";

import type { Product } from "@/types";
import Link from "next/link";
import { Fragment } from "react";

const product = {
	name: "Product Name",
	description:
		"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab veritatis saepe consectetur itaque vel id ipsa perferendis adipisci ea, ut officia beatae autem rerum, voluptate laborum accusamus inventore quidem tempora!Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, quis?",
	spline: "",
	etsy: "",
	price: 15.0,
	discount: {
		type: "percentage",
		amount: 0.5,
	},
	customizations: [{ name: "Customizable Text", price: 2, required: false, type: "text", placeholder: "Placeholder" }],
} as Product;

export default function Home() {
	const cost =
		product.price -
		(product.discount
			? { percentage: product.price * product.discount.amount, price: product.discount.amount }[product.discount.type]
			: 0);

	return (
		<div className="flex space-x-12 p-12">
			<div className="h-full w-full bg-slate-700 p-12 text-center text-5xl">Spline Here</div>
			<div className="flex h-full w-2/3 flex-col rounded-3xl border border-slate-700 p-8">
				<h1 className="text-3xl font-semibold">{product.name}</h1>
				<p className="mt-4 font-light text-slate-400">{product.description}</p>
				<div className="mt-6 space-x-2 text-xl">
					<span>${cost.toFixed(2)}</span>
					{product.price !== cost && <s className="text-base text-red-500">${product.price.toFixed(2)}</s>}
				</div>
				{product.customizations?.map((customization) => (
					<div className="mt-8" key={customization.name}>
						{customization.type === "text" ? (
							<div className="space-y-2">
								<label className="" htmlFor={customization.name}>
									{customization.name}
								</label>
								<input
									type="text"
									id={customization.name}
									placeholder={customization.placeholder}
									className="w-full rounded-lg border border-slate-700 bg-transparent p-2 outline-none focus:border-indigo-500"
								/>
							</div>
						) : (
							<></>
						)}
					</div>
				))}
				<Link
					href={product.etsy}
					className="mt-10 w-full rounded-full bg-indigo-600 p-3 text-center font-bold hover:bg-indigo-500">
					Purchase on Etsy
				</Link>
			</div>
		</div>
	);
}
