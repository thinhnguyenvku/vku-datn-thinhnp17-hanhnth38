import { Link } from "react-router-dom";
import NavBar from "../shared/NavBar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup } from "../ui/radio-group";

const Signup = () => {
	return (
		<div>
			<NavBar />

			<div className="flex items-center justify-center max-w7xl mx-auto">
				<form
					action=""
					className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
				>
					<h1 className="font-bold text-xl mb-5">Sign Up</h1>
					<div className="my-2">
						<Label>Full Name</Label>
						<Input type="text" placeholder="Enter your fullname" />
					</div>
					<div className="my-2">
						<Label>Email</Label>
						<Input
							type="email"
							placeholder="Enter your email address"
						/>
					</div>
					<div className="my-2">
						<Label>Phone Number</Label>
						<Input
							type="text"
							placeholder="Enter your phone number"
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
						<div className="flex items-center gap-2">
							<Label>Profile</Label>
							<Input
								accept="image/*"
								type="file"
								className="cursor-pointer"
							/>
						</div>
					</div>
					<Button type="submit" className="w-full my-4">
						Signup
					</Button>
					<span className="text-sm">
						Already have an account?{" "}
						<Link to="/login" className="text-blue-600">
							Login
						</Link>
					</span>
				</form>
			</div>
		</div>
	);
};

export default Signup;
