import type { Product } from "@/types";

export const products: Product[] = [
	{
		name: "Trophy",
		description:
			"This customizable, 3d Printed Trophy is perfect for any occasion!\nIt can be made in various colors, with any text you want on the optional plaque on the front.\nThe trophy is approximately 6.5 in. (165 mm) tall and 5.5 in (140 mm) wide (handle to handle), however, it can be scaled if you contact me.\n\nFeel free to contact me for special requests or questions!\n\n♻️ Polylactic Acid (PLA) is an eco-friendly, reusable, and recyclable material derived from natural polymers such as corn starch.",
		spline: "https://prod.spline.design/HD1hNm0sTCIs2TZr/scene.splinecode",
		etsy: "https://www.etsy.com/listing/1547691925/customizable-trophy",
		price: 15,
		customizations: [
			{ name: "Custom Text", price: 2, required: false, type: "text", placeholder: "My Trophy!" },
			{
				type: "option",
				name: "Color",
				required: false,
				options: [
					{ name: "Red" },
					{ name: "Blue" },
					{ name: "Yellow" },
					{ name: "Orange" },
					{ name: "Black" },
					{ name: "Brown" },
					{ name: "Gold" },
					{ name: "Silver" },
					{ name: "Bronze" },
					{ name: "Purple" },
					{ name: "White" },
					{ name: "Gray" },
					{ name: "Green" },
					{ name: "Pink" },
				],
			},
		],
	},
	{
		name: "Pumpkin",
		description:
			"These 3D Printed Halloween decorations are sure to get you in the Halloween spirit. I am currently selling both pumpkins and skulls, in three sizes each.\n\nSmall: 3.3 in (85mm) tall, 3 in (78mm) wide\nMedium: 4.4 in (112mm) tall, 4 in (100mm) wide\nLarge: 5.5 in (140mm) tall, 5 in (130mm) wide\n\n♻️ Polylactic Acid (PLA) is an eco-friendly, reusable, and recyclable material derived from natural polymers such as corn starch.",
		spline: "https://prod.spline.design/uoJSg7W2b0wZVcMB/scene.splinecode",
		etsy: "https://www.etsy.com/listing/1564301424/halloween-decorations-pumpkins-and",
		price: 5,
		customizations: [
			{
				type: "option",
				name: "Size",
				required: true,
				options: [{ name: "Small" }, { name: "Medium", price: 5 }, { name: "Large", price: 10 }],
			},
		],
	},
];
