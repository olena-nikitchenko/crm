"use client";

import React from "react";

export interface GlobalErrorProps {}

export default function GlobalError({}: GlobalErrorProps) {
	return (
		<html>
			<body>
				<div>
					<p>Something globaly went wrong </p>
				</div>
			</body>
		</html>
	);
}
