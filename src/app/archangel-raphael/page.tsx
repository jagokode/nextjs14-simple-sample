import Hero from '@/components/hero';
import RaphaelPrayer from 'public/ArchangelRaphaelPrayer.jpg';

export default function ArchangelRaphael() {
	return (
		<div>
			<Hero
				imgData={RaphaelPrayer}
				imgAlt="Archangel Raphael Prayer"
				title="Prayer to The Archangel Raphael"
			/>
		</div>
	);
}
