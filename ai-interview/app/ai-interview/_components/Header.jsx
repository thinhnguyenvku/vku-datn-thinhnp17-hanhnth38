"use client";
import { Button } from "@/components/ui/button";
import { SignOutButton } from "@clerk/nextjs";
import React from "react";

function Header() {
	return (
		<div className="bg-white">
			<div className="flex items-center justify-between mx-auto max-w-8xl h-16">
				<h1 className="text-2xl font-bold">
					<a href="http://localhost:5173">
						Job
						<span className="text-[#F83002]">Portal</span>
					</a>
				</h1>

				<div className="flex items-center space-x-4">
					<SignOutButton redirectUrl="/ai-interview">
						<Button
							variant="outline"
							className="ml-4 bg-gray-500 text-white px-4 py-2 rounded"
						>
							Sign Out
						</Button>
					</SignOutButton>
				</div>
			</div>
		</div>
	);
}

export default Header;
