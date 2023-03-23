import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperNav from "./components/SwiperNav";
import { useContext, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import CartModal from "./components/CartModal";
import { CartContext } from "./contexts/CartInfo";

function App() {
	function incrementQuantity(increment: boolean) {
		increment
			? setSneakerQuantity((sneakerQuantity) => sneakerQuantity + 1)
			: sneakerQuantity !== 0 &&
			  setSneakerQuantity((sneakerQuantity) => sneakerQuantity - 1);
	}
	const { setSneakerQuantity, sneakerQuantity, setIsOnCart } =
		useContext(CartContext);
	return (
		<div>
			<nav className="sticky top-0  z-10 flex flex-row w-full justify-between p-4 bg-white">
				<div className="flex flex-row gap-4 items-center">
					<img src="/icon-menu.svg" alt="" />
					<img src="/logo.svg" alt="" />
				</div>
				{/* <ul className="flex flex-col ">
					<li>Collections</li>
					<li>Men</li>
					<li>Women</li>
					<li>About</li>
					<li>Contact</li>
				</ul> */}
				<div className="flex flex-row gap-4 items-center  ">
					<Dialog.Root>
						<Dialog.Trigger>
							<svg
								width="22"
								height="20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
									fill="black"
									fill-rule="nonzero"
								/>
							</svg>
						</Dialog.Trigger>
						<CartModal />
					</Dialog.Root>
					<img
						src="https://github.com/guilhermefigueira.png"
						alt="Guilherme Figueira"
						className="rounded-full h-8 w-8"
					/>
				</div>
			</nav>

			<Swiper className="mySwiper">
				<SwiperSlide>
					<img src="/image-product-1.jpg" alt="Shoe image 1" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="/image-product-2.jpg" alt="Shoe image 2" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="/image-product-3.jpg" alt="Shoe image 3" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="/image-product-4.jpg" alt="Shoe image 4" />
				</SwiperSlide>
				<SwiperNav />
			</Swiper>
			<div className="flex flex-col gap-6 p-8">
				<div className="flex flex-col gap-2">
					<span className="text-sm text-orange-default font-bold uppercase">
						Sneaker Company
					</span>
					<h1 className="text-blue-very_dark font-bold text-3xl">
						Fall Limited Edition Sneaker
					</h1>
					<p className="text-blue-dark_gray text-sm">
						These low-profile sneakers are your perfect casual wear
						companion. Featuring a durable rubber outer sole,
						they'll withstand everything the weather can offer
					</p>
				</div>
				<div className="flex flex-row justify-between items-center">
					<div className="flex flex-row gap-2 items-center">
						<h2 className="font-bold text-3xl text-blue-very_dark">
							$125.00
						</h2>
						<h3 className="text-sm font-bold text-orange-default bg-orange-pale p-1 px-2 rounded-md">
							50%
						</h3>
					</div>
					<h5 className="line-through text-blue-dark_gray">
						$250.00
					</h5>
				</div>
				<div className="flex flex-row justify-between items-center bg-blue-light_gray rounded-md p-3 text-center">
					<button
						onClick={() => incrementQuantity(false)}
						className="font-bold text-orange-default text-2xl"
					>
						-
					</button>
					<h4 className="text-blue-very_dark font-bold text-xl">
						{sneakerQuantity}
					</h4>
					<button
						onClick={() => incrementQuantity(true)}
						className="font-bold text-orange-default text-2xl"
					>
						+
					</button>
				</div>
				<button
					onClick={() => {
						sneakerQuantity !== 0 && setIsOnCart(sneakerQuantity);
					}}
					className="flex flex-row justify-center w-full gap-4 bg-orange-default rounded-xl p-4 text-white"
				>
					<svg
						width="22"
						height="20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
							fill="#fff"
							fill-rule="nonzero"
						/>
					</svg>
					Add to cart
				</button>
			</div>
		</div>
	);
}

export default App;
