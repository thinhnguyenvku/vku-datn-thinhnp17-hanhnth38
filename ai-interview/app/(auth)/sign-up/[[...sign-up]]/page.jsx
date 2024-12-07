import { SignUp } from "@clerk/nextjs";

export default function Page() {
	return (
		<>
			<div className="bg-white">
				<div className="flex items-center justify-between mx-auto max-w-7xl h-16">
					<h1 className="text-2xl font-bold">
						<a href="http://localhost:5173">
							Job
							<span className="text-[#F83002]">Portal</span>
						</a>
					</h1>
				</div>
			</div>

			<div className="flex items-start justify-center min-h-screen pt-12">
				<SignUp />
			</div>
		</>
	);
}
