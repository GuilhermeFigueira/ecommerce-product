import * as Dialog from "@radix-ui/react-dialog";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import "swiper/css";
import SwiperModalNav from "./SwiperModalNav";

export default function CartModal() {
	const swiperRef = useRef(null);
	const buttonRef = useRef(null);

	const toSlide = (num: any) => {
		// @ts-ignore
		swiperRef.current?.swiper.slideTo(num);
	};
	return (
		<Dialog.Portal>
			<Dialog.Overlay className="DialogOverlay" />
			<Dialog.Content className="fixed z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg  w-[95%] max-w-screen-sm flex flex-col">
				<Dialog.Close className="self-end">
					<svg
						width="20"
						height="15"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
							fill="#fff"
							fill-rule="evenodd"
						/>
					</svg>
				</Dialog.Close>
				<div className="flex flex-col gap-8 ">
					<img src="" alt="" />
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
						<SwiperModalNav />
					</Swiper>
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
				</div>
			</Dialog.Content>
		</Dialog.Portal>
	);
}
