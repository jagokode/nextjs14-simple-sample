'use client';

import Image from 'next/image';
import Link from 'next/link';
import jago from 'public/j.png';
import { useState } from 'react';

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="flex flex-wrap justify-between p-4 items-center">
			<Link
				href="/"
				className="flex items-center flex-shrink-0 mr-6 space-x-2 lg:mr-96"
			>
				<Image src={jago} alt="logo" className="h-8 w-8" />
				<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
					Jago
				</span>
			</Link>
			<div className="block lg:hidden">
				<button
					onClick={() => setIsOpen(!isOpen)}
					className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
				>
					<svg
						className={`fill-current h-3 w-3 ${
							isOpen ? 'hidden' : 'block'
						}`}
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
					</svg>
					<svg
						className={`fill-current h-3 w-3 ${
							isOpen ? 'block' : 'hidden'
						}`}
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
					</svg>
				</button>
			</div>
			<div
				className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${
					isOpen ? 'block' : 'hidden'
				}`}
			>
				<div className="text-sm lg:flex-grow">
					<Link
						href="/hail-holy-queen"
						className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
					>
						Hail Holy Queen
					</Link>
					<Link
						href="/archangel-raphael"
						className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
					>
						Archangel Raphael
					</Link>
					<Link
						href="/purgatory-prayer"
						className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
					>
						Purgatory
					</Link>
				</div>
			</div>
		</nav>
	);
}
