import Hero from '@/components/hero';
import Purgatory from 'public/PurgatoryPrayer.jpg';

export default function PurgatoryPrayer() {
	return (
		<div>
			<Hero
				imgData={Purgatory}
				imgAlt="St. Bridget Prayers"
				title="Prayer for Holy Souls in Purgatory By St. Bridget"
			/>
		</div>
	);
}
