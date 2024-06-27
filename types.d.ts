interface CustomText {
	name: string;
	type: "text";
	maxChars: number;
	price: string;
}

interface CustomOption {
	name: string;
	type: "option";
	options: { name: string; price: number }[];
}

export type Customization = CustomText | CustomOption;

export interface Product {
	name: string;
	description: string;
	spline: string; //Public Spline embed url
	etsy: string; //etsy purchase url
	price: number;
	discount: {
		type: "percentage" | "price";
		amount: number;
	};
	customization: Customization[];
}
