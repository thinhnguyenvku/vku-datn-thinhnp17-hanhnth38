import { Link, useNavigate } from "react-router-dom";
import NavBar from "../shared/NavBar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup } from "../ui/radio-group";
import { useState } from "react";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constants";
import { toast } from "sonner";

const Signup = () => {
	const [input, setInput] = useState({
		fullName: "",
		email: "",
		phoneNumber: "",
		password: "",
		role: "",
		file: "",
	});

	const changeEventHandler = (e) => {
		setInput({ ...input, [e.target.name]: e.target.value });
	};

	const changeFileHandler = (e) => {
		setInput({ ...input, file: e.target.files?.[0] });
	};

	const navigate = useNavigate();

	const submitHandler = async (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append("fullname", input.fullname);
		formData.append("email", input.email);
		formData.append("phoneNumber", input.phoneNumber);
		formData.append("password", input.password);
		formData.append("role", input.role);
		if (input.file) {
			formData.append("file", input.file);
		}

		try {
			const res = await axios.post(
				`${USER_API_END_POINT}/register`,
				formData,
				{
					headers: { "Content-Type": "multipart/form-data" },
					withCredentials: true,
				}
			);
			if (res.data.success) {
				navigate("/login");
				toast.success(res.data.message);
			}
		} catch (error) {
			console.log(error);
			toast.error(error.response.data.message);
		}
	};

	return (
		<div>
			<NavBar />

			<div className="flex items-center justify-center max-w7xl mx-auto">
				<form
					onSubmit={submitHandler}
					className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
				>
					<h1 className="font-bold text-xl mb-5">Sign Up</h1>
					<div className="my-2">
						<Label>Full Name</Label>
						<Input
							type="text"
							value={input.fullName}
							name="fullName"
							onChange={changeEventHandler}
							placeholder="Enter your fullname"
						/>
					</div>
					<div className="my-2">
						<Label>Email</Label>
						<Input
							type="email"
							value={input.email}
							name="email"
							onChange={changeEventHandler}
							placeholder="Enter your email address"
						/>
					</div>
					<div className="my-2">
						<Label>Phone Number</Label>
						<Input
							type="text"
							value={input.phoneNumber}
							name="phoneNumber"
							onChange={changeEventHandler}
							placeholder="Enter your phone number"
						/>
					</div>
					<div className="my-2">
						<Label>Password</Label>
						<Input
							type="password"
							value={input.password}
							name="password"
							onChange={changeEventHandler}
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
									checked={input.role == "student"}
									onChange={changeEventHandler}
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
									checked={input.role == "recruiter"}
									onChange={changeEventHandler}
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
								onChange={changeFileHandler}
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
