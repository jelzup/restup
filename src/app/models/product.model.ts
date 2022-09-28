export interface Product {
	id: number;
	img?: string;
	type?: string;
	name?: string;
	category?: string;
	ingredient?: string;
	description?: string;
	price?: number;
	createdAt?: Date;
}