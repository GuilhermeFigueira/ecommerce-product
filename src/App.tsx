import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import SwiperNav from "./components/SwiperNav";
import { useContext, useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import CartModal from "./components/CartModal";
import { CartContext } from "./contexts/CartInfo";
import { motion } from "framer-motion";
import SneakerModal from "./components/SneakerModal";

function App() {
	function incrementQuantity(increment: boolean) {
		increment
			? setSneakerQuantity((sneakerQuantity) => sneakerQuantity + 1)
			: sneakerQuantity !== 0 &&
			  setSneakerQuantity((sneakerQuantity) => sneakerQuantity - 1);
	}
	const { setSneakerQuantity, sneakerQuantity, setIsOnCart } =
		useContext(CartContext);
	const [navActive, setNavActive] = useState(false);
	const swiperRef = useRef(null);
	const buttonRef = useRef(null);

	const toSlide = (num: any) => {
		// @ts-ignore
		swiperRef.current?.swiper.slideTo(num);
	};

	return (
		<div>
			<nav className="sticky top-0 z-10 flex flex-row w-full justify-between p-4 md:mx-auto md:justify-around bg-white o md:pb-7 md:border-b-2">
				<div className="flex flex-row gap-8 items-center">
					<div className="flex flex-row gap-4 items-center">
						<button onClick={() => setNavActive(true)}>
							<img
								src="/icon-menu.svg"
								alt=""
								className="md:hidden"
							/>
						</button>
						<img src="/logo.svg" alt="" />
					</div>
					<motion.div
						initial={{ left: "-100vw" }}
						animate={navActive ? { left: 0 } : { left: "-100vw" }}
						transition={{
							type: "spring",
							stiffness: 400,
							damping: 100,
						}}
						className="absolute top-0 left-0 bg-white h-screen w-64 gap-14 flex flex-col items-start p-8 drop-shadow-2xl md:flex-row md:static md:h-auto md:w-auto md:bg-transparent md:text-blue-gray"
					>
						<button
							onClick={() => setNavActive(false)}
							className="md:hidden"
						>
							<img src="/icon-close.svg" alt="" />
						</button>
						<ul className="flex flex-col md:flex-row gap-4 font-bold text-md ">
							<li>Collections</li>
							<li>Men</li>
							<li>Women</li>
							<li>About</li>
							<li>Contact</li>
						</ul>
					</motion.div>
				</div>
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
			<div className="md:grid md:grid-cols-2 md:max-w-screen-xl md:m-auto md:content-center md:mt-14 md:gap-8">
				<div className="md:w-5/6 md:[grid-area:1_/_1_/_1_/_2] md:self-center md:justify-self-center ">
					<Swiper
						className="mySwiper md:w-full md:h-full md:flex md:flex-col md:gap-8"
						ref={swiperRef}
					>
						<SwiperSlide>
							<img
								src="/image-product-1.jpg"
								alt="Shoe image 1"
								className="w-full h-full"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								src="/image-product-2.jpg"
								alt="Shoe image 2"
								className="w-full h-full"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								src="/image-product-3.jpg"
								alt="Shoe image 3"
								className="w-full h-full"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								src="/image-product-4.jpg"
								alt="Shoe image 4"
								className="w-full h-full"
							/>
						</SwiperSlide>
						<SwiperNav />
					</Swiper>
				</div>
				<div className="hidden md:grid grid-flow-col gap-8 h-fit md:[grid-area:2_/_1_/_2_/_2] md:h-5/6 md:w-5/6 md:self-center md:justify-self-center">
					<button onClick={() => toSlide(0)} ref={buttonRef}>
						<img
							src="/image-product-1-thumbnail.jpg"
							alt=""
							className="rounded-xl"
						/>
					</button>
					<button onClick={() => toSlide(1)} ref={buttonRef}>
						<img
							src="/image-product-2-thumbnail.jpg"
							alt=""
							className="rounded-xl"
						/>
					</button>
					<button onClick={() => toSlide(2)} ref={buttonRef}>
						<img
							src="/image-product-3-thumbnail.jpg"
							alt=""
							className="rounded-xl"
						/>
					</button>
					<button onClick={() => toSlide(3)} ref={buttonRef}>
						<img
							src="/image-product-4-thumbnail.jpg"
							alt=""
							className="rounded-xl"
						/>
					</button>
				</div>
				<div className="md:h-full md:w-5/6 hidden md:[display:grid] md:[grid-area:1_/_1_/_1_/_2] md:z-50 md:self-center md:justify-self-center">
					<Dialog.Root>
						<Dialog.Trigger className="h-full">
							<div className="h-full"></div>
						</Dialog.Trigger>
						<SneakerModal />
					</Dialog.Root>
				</div>
				<div className="flex flex-col gap-6 p-8 md:justify-center md:max-w-screen-sm md:m-auto md:[grid-area:1_/_2_/_3_/_3]">
					<div className="flex flex-col gap-2">
						<span className="text-sm text-orange-default font-bold uppercase">
							Sneaker Company
						</span>
						<h1 className="text-blue-very_dark font-bold text-3xl md:text-5xl">
							Fall Limited Edition Sneakers
						</h1>
						<p className="text-blue-dark_gray text-sm">
							These low-profile sneakers are your perfect casual
							wear companion. Featuring a durable rubber outer
							sole, they'll withstand everything the weather can
							offer
						</p>
					</div>
					<div className="flex flex-row justify-between items-center md:flex-col md:items-start">
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
					<div className="flex flex-col gap-8 md:grid md:[grid-template-columns:30%_1fr] md:gap-4">
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
								sneakerQuantity !== 0 &&
									setIsOnCart(sneakerQuantity);
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
			</div>
		</div>
	);
}

export default App;
