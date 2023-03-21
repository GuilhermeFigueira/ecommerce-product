import { useSwiper } from "swiper/react";

export default function SlideNextButton() {
	const swiper = useSwiper();

	return (
		<div>
			<div className="swiperNavPrev">
				<button onClick={() => swiper.slidePrev()}>
					<img
						src="/icon-previous.svg"
						alt="Previous"
						className="h-4 w-3"
					/>
				</button>
			</div>
			<div className="swiperNavNext">
				<button onClick={() => swiper.slideNext()}>
					<img src="/icon-next.svg" alt="Next" className="h-4 w-3" />
				</button>
			</div>
		</div>
	);
}
