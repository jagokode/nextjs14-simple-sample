import type { StaticImageData } from 'next/image';
import Image from 'next/image';

interface HeroProps {
	imgData: StaticImageData;
	imgAlt: string;
	title: string;
}

export default function Hero(props: HeroProps) {
	return (
		<div className="flex flex-wrap justify-center  text-center">
			<div className="pt-8">
				<h1 className="font-bold pb-5">{props.title}</h1>
				<Image
					src={props.imgData}
					alt={props.imgAlt}
					style={{ objectFit: 'cover' }}
				/>
			</div>
		</div>
	);
}
