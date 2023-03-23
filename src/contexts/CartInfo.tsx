import { ReactNode, createContext, useState } from "react";

interface CartProvider {
	children: ReactNode;
}

interface CartInfoContextData {
	sneakerQuantity: number;
	setSneakerQuantity: (value: number | ((prevVar: number) => number)) => void;
	isOnCart: number;
	setIsOnCart: (value: number | ((prevVar: number) => number)) => void;
}

export const CartContext = createContext({} as CartInfoContextData);

export default function CartProvider(props: CartProvider) {
	const [sneakerQuantity, setSneakerQuantity] = useState(0);
	const [isOnCart, setIsOnCart] = useState(0);
	return (
		<CartContext.Provider
			value={{
				setSneakerQuantity,
				sneakerQuantity,
				setIsOnCart,
				isOnCart,
			}}
		>
			{props.children}
		</CartContext.Provider>
	);
}
