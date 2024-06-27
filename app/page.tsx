"use client";

import Spline from "@splinetool/react-spline";
import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

export default function Home() {
	const [tooltip, setTooltip] = useState(true);

	return (
		<div className="relative text-white">
			<Spline scene="https://prod.spline.design/yCqlyv1GCEbsBlFx/scene.splinecode" />
			<div
				className={`absolute bottom-12 left-1/2 flex -translate-x-1/2 items-center space-x-1 rounded-full bg-gray-700 px-5 py-3 ${!tooltip ? "hidden" : ""}`}>
				<span>Click and drag the objects!</span>
				<button type="button" onClick={() => setTooltip(false)}>
					<XMarkIcon className="h-4 w-4" />
				</button>
			</div>
		</div>
	);
}
