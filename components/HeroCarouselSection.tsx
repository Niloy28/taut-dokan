import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

export default function HeroCarouselSection() {
	return (
		<Carousel
			width="99vw"
			centerMode
			autoFocus
			autoPlay
			infiniteLoop
			showThumbs={false}
			showStatus={false}
			className="py-14"
		>
			<div>
				<Image
					src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420"
					alt=""
					layout="responsive"
					width="100%"
					height="50%"
				/>
			</div>
			<div>
				<Image
					src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420"
					alt=""
					layout="responsive"
					width="100%"
					height="50%"
				/>
			</div>
			<div>
				<Image
					src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420"
					alt=""
					layout="responsive"
					width="100%"
					height="50%"
				/>
			</div>
		</Carousel>
	);
}
