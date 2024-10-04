import { Link } from "react-router-dom";
import NavBar from "../shared/NavBar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup } from "../ui/radio-group";

const Login = () => {
	return (
		<div>
			<NavBar />

			<div className="flex items-center justify-center max-w7xl mx-auto">
				<form
					action=""
					className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
				>
					<h1 className="font-bold text-xl mb-5">Login</h1>

					<div className="my-2">
						<Label>Email</Label>
						<Input
							type="email"
							placeholder="Enter your email address"
						/>
					</div>

					<div className="my-2">
						<Label>Password</Label>
						<Input
							type="password"
							placeholder="Enter your password"
						/>
					</div>
					<div className="flex items-center justify-between">
						<RadioGroup className="flex items-center gap-4 my-5">
							<div className="flex items-center space-x-2">
								<Input
									type="radio"
									name="role"
									value="student"
									id="student"
									className="cursor-pointer"
								/>
								<Label htmlFor="student">Student</Label>
							</div>
							<div className="flex items-center space-x-2">
								<Input
									type="radio"
									name="role"
									value="recruiter"
									id="recruiter"
									className="cursor-pointer"
								/>
								<Label htmlFor="recruiter">Recruiter</Label>
							</div>
						</RadioGroup>
					</div>
					<Button type="submit" className="w-full my-4">
						Login
					</Button>
					<span className="text-sm">
						Don&#39;t have an account?{" "}
						<Link to="/signup" className="text-blue-600">
							Signup
						</Link>
					</span>
				</form>
			</div>
		</div>
	);
};

export default Login;
