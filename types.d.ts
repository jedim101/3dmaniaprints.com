interface BaseCustomization {
	name: string;
	name: string;
	required: boolean;
}

interface CustomText {
	type: "text";
	maxChars?: number;
	price?: number;
	placeholder?: string;
}

interface CustomOption {
	type: "option";
	options: { name: string; price?: number }[];
}

type Customizations = (CustomText | CustomOption) & BaseCustomization;

export interface Product {
	name: string;
	description: string;
	spline: string; //Public Spline embed url
	etsy: string; //etsy purchase url
	price: number;
	discount?: {
		type: "percentage" | "price";
		amount: number;
	};
	customizations?: Customizations[];
}
