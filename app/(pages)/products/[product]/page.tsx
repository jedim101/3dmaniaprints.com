"use client";

import type { Product } from "@/types";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
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

	const [customizations, setCustomizations] = useState(
		product.customizations?.map((c) => {
			return { name: c.name, value: "" };
		}) as { name: string; value: string; price?: number }[],
	);

	useEffect(
		() => setCost(priceWithDiscount + customizations.reduce((sum, e) => sum + (e.value && e.price ? e.price : 0), 0)),
		[customizations],
	);

	const findCustomizationByName = (name: string) => customizations.find((e) => e.name === name);

	const toDecimalPlaces = (value: number) => (Math.round(value) === value ? value : value.toFixed(2));

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
										`(+$${toDecimalPlaces(customization.price)}
									)`}
								</label>
								<input
									type="text"
									id={customization.name}
									value={findCustomizationByName(customization.name)?.value ?? ""}
									onChange={(e) =>
										setCustomizations((prev) =>
											prev.map((pre) =>
												pre.name === customization.name
													? { name: customization.name, value: e.target.value, price: customization.price }
													: pre,
											),
										)
									}
									placeholder={customization.placeholder}
									className="w-full rounded-lg border border-slate-700 bg-transparent p-2 outline-none focus:border-indigo-500"
								/>
							</div>
						) : (
							<div className="space-y-2">
								<span>{customization.name}</span>
								<Listbox
									value={findCustomizationByName(customization.name) ?? { name: customization.name, value: "" }}
									onChange={(e) =>
										setCustomizations((prev) =>
											prev.map((pre) =>
												pre.name === customization.name
													? { name: customization.name, value: e.value, price: e.price }
													: pre,
											),
										)
									}>
									<ListboxButton
										className={`relative block w-full rounded-lg border border-slate-700 p-2 text-left focus:border-indigo-500 ${findCustomizationByName(customization.name)?.value ? "text-white" : "text-slate-400"}`}>
										{findCustomizationByName(customization.name)?.value
											? `${findCustomizationByName(customization.name)?.value}${findCustomizationByName(customization.name)?.price ? `(+$${toDecimalPlaces(findCustomizationByName(customization.name)?.price as number)})` : ""}`
											: customization.name}
										<ChevronDownIcon
											className="group pointer-events-none absolute right-2.5 top-2.5 size-4 fill-white/60"
											aria-hidden="true"
										/>
									</ListboxButton>
									<ListboxOptions
										anchor="bottom"
										transition
										className="w-[var(--button-width)] rounded-xl border border-slate-600 bg-slate-700 p-1 transition duration-100 ease-in [--anchor-gap:var(--spacing-1)] focus:outline-none data-[leave]:data-[closed]:opacity-0">
										{customization.options.map((option) => (
											<ListboxOption
												key={option.name}
												value={{ value: option.name, price: option.price }}
												className="group flex cursor-default select-none items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-white/10">
												<CheckIcon
													className={`size-4 fill-white ${customizations.find((c) => c.name === customization.name)?.value === option.name ? "visible" : "invisible"}`}
												/>
												<div className="text-sm/6 text-white">
													{option.name} {option.price && `(+$${toDecimalPlaces(option.price)})`}
												</div>
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
