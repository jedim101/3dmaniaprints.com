import type { Product } from "@/types";

export const products = [
	{
		name: "Product 1",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab veritatis saepe consectetur itaque vel id ipsa perferendis adipisci ea, ut officia beatae autem rerum, voluptate laborum accusamus inventore quidem tempora!Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, quis?",
		spline: "https://prod.spline.design/HD1hNm0sTCIs2TZr/scene.splinecode",
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
	},
	{
		name: "Product 2",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab veritatis saepe consectetur itaque vel id ipsa perferendis adipisci ea, ut officia beatae autem rerum, voluptate laborum accusamus inventore quidem tempora!Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, quis?",
		spline: "https://prod.spline.design/HD1hNm0sTCIs2TZr/scene.splinecode",
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
	},
	{
		name: "Product 3",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab veritatis saepe consectetur itaque vel id ipsa perferendis adipisci ea, ut officia beatae autem rerum, voluptate laborum accusamus inventore quidem tempora!Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, quis?",
		spline: "https://prod.spline.design/HD1hNm0sTCIs2TZr/scene.splinecode",
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
	},
	{
		name: "Product 4",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab veritatis saepe consectetur itaque vel id ipsa perferendis adipisci ea, ut officia beatae autem rerum, voluptate laborum accusamus inventore quidem tempora!Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, quis?",
		spline: "https://prod.spline.design/HD1hNm0sTCIs2TZr/scene.splinecode",
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
	},
	{
		name: "Product 4",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab veritatis saepe consectetur itaque vel id ipsa perferendis adipisci ea, ut officia beatae autem rerum, voluptate laborum accusamus inventore quidem tempora!Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, quis?",
		spline: "https://prod.spline.design/HD1hNm0sTCIs2TZr/scene.splinecode",
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
	},
	{
		name: "Product 5",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab veritatis saepe consectetur itaque vel id ipsa perferendis adipisci ea, ut officia beatae autem rerum, voluptate laborum accusamus inventore quidem tempora!Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, quis?",
		spline: "https://prod.spline.design/HD1hNm0sTCIs2TZr/scene.splinecode",
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
	},
] as Product[];
