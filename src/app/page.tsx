import webAbbey from 'public/web-abbey.jpg';
import Hero from '@/components/hero';

export default function Home() {
	return <Hero imgData={webAbbey} imgAlt="home" />;
}
