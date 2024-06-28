"use client";

import type { Product } from "@/types";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";

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
	customizations: [
		{ name: "Customizable Text", price: 2, required: false, type: "text", placeholder: "Placeholder" },
		{ type: "option", name: "Color", required: false, options: [{ name: "Red", price: 1.5 }, { name: "Blue" }] },
	],
} as Product;

export default function Home() {
	const priceWithDiscount =
		product.price -
		(product.discount
			? { percentage: product.price * product.discount.amount, price: product.discount.amount }[product.discount.type]
			: 0);

	const [cost, setCost] = useState(priceWithDiscount);

	const [customizations, setCustomizations] = useState({} as { [key: string]: { value: string; price?: number } });

	useEffect(
		() => setCost(priceWithDiscount + Object.values(customizations).reduce((sum, e) => sum + (e.price ?? 0), 0)),
		[customizations],
	);

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
								<label htmlFor={customization.name}>
									{customization.name}{" "}
									{customization.price &&
										`(+$${Math.round(customization.price) === customization.price ? customization.price : customization.price.toFixed(2)}
									)`}
								</label>
								<input
									type="text"
									id={customization.name}
									value={customizations[customization.name]?.value ?? ""}
									onChange={(e) =>
										setCustomizations((prev) => {
											return { ...prev, [customization.name]: { value: e.target.value, price: customization.price } };
										})
									}
									placeholder={customization.placeholder}
									className="w-full rounded-lg border border-slate-700 bg-transparent p-2 outline-none focus:border-indigo-500"
								/>
							</div>
						) : (
							<div className="space-y-2">
								<span>{customization.name}</span>
								<Listbox
									as="div"
									className="relative flex w-full rounded-lg border border-slate-700 outline-none"
									value={customizations[customization.name]}
									onChange={(e) =>
										setCustomizations((prev) => {
											return { ...prev, [customization.name]: { value: e.value, price: e.price } };
										})
									}>
									<ListboxButton className="h-full w-full p-2 text-left">
										{customizations[customization.name]?.value ?? customization.name}
									</ListboxButton>
									<ListboxOptions
										anchor="bottom"
										transition
										className="w-[var(--button-width)] rounded-xl border border-slate-600 bg-slate-700 p-1 transition duration-100 ease-in [--anchor-gap:var(--spacing-1)] focus:outline-none data-[leave]:data-[closed]:opacity-0">
										{customization.options.map((option) => (
											<ListboxOption
												key={option.name}
												value={option}
												className="group flex cursor-default select-none items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-white/10">
												<CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" />{" "}
												<div className="text-sm/6 text-white">{option.name}</div>
											</ListboxOption>
										))}
									</ListboxOptions>
								</Listbox>
							</div>
						)}
					</div>
				))}
				<Link
					href={product.etsy}
					className="mt-16 w-full rounded-full bg-indigo-600 p-3 text-center font-bold hover:bg-indigo-500">
					Purchase on Etsy
				</Link>
			</div>
		</div>
	);
}
