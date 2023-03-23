import * as Dialog from "@radix-ui/react-dialog";
import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartInfo";

export default function CartModal() {
	const { isOnCart, setIsOnCart } = useContext(CartContext);
	const [topPos, setTopPos] = useState("140px");
	console.log(topPos);

	return (
		<Dialog.Portal>
			<Dialog.Overlay className="inset-0 fixed z-30 ">
				<Dialog.Content
					style={{
						top: topPos,
					}}
					className="fixed bg-white text-blue-very_dark  left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg shadow-black/40 w-[95%] max-w-screen-sm"
				>
					<Dialog.Title className="text-sm font-black p-4">
						Cart
					</Dialog.Title>
					<div className="border-t-2">
						<div className="p-4">
							{isOnCart !== 0 ? (
								<div
									onLoad={() => setTopPos("170px")}
									className="flex flex-col gap-4"
								>
									<div className="flex flex-row items-center gap-3 text-blue-dark_gray text-base">
										<img
											src="/image-product-1-thumbnail.jpg"
											alt="Fall Limited Edition Sneakers thumbnail image"
											className="w-14 h-14 rounded-md"
										/>
										<div className="flex-1">
											<div>
												Fall Limited Edition Sneakers
											</div>
											<div>
												$125.00 x {isOnCart}{" "}
												<strong className="text-black">
													${isOnCart * 125}.00
												</strong>
											</div>
										</div>
										<button
											onClick={() => {
												setIsOnCart(0);
												setTopPos("140px");
											}}
											className="justify-center flex"
										>
											<img
												src="/icon-delete.svg"
												alt=""
											/>
										</button>
									</div>
									<button className="w-full bg-orange-default text-orange-pale p-4 rounded-xl">
										Checkout
									</button>
								</div>
							) : (
								<h3 onLoad={() => setTopPos("140px")}>
									Your cart is empty
								</h3>
							)}
						</div>
					</div>
				</Dialog.Content>
			</Dialog.Overlay>
		</Dialog.Portal>
	);
}
