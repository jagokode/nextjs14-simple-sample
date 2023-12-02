import Hero from '@/components/hero';
import HailHolyQueenPrayer from 'public/HailHolyQueen.jpg';

export default function HailHolyQueen() {
	return (
		<div>
			<Hero
				imgData={HailHolyQueenPrayer}
				imgAlt="Hail Holy Queen"
				title="Hail Holy Queen Prayer"
			/>
		</div>
	);
}
