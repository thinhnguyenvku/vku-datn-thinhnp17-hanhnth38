import { Bookmark } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";

const Job = () => {
	return (
		<div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
			<div className="flex items-center justify-between">
				<p className="text-sm text-gray-500">2 days ago</p>
				<Button variant="outline" className="rounded-full" size="icon">
					<Bookmark />
				</Button>
			</div>

			<div className="flex items-center gap-2 my-2">
				<Button className="p-6" variant="outline" size="icon">
					<Avatar>
						<AvatarImage src="https://imgthumb-cdn.thethao247.vn/thumbamp/storage/files/tranvutung/2024/01/20/lionel-messi-argentina-olympic-2024-1705722503-105044avatar.jpg" />
					</Avatar>
				</Button>

				<div>
					<h1 className="font-medium text-lg">VKU Company name</h1>
					<p className="text-sm text-gray-500">Vietnam</p>
				</div>
			</div>

			<div>
				<h1 className="font-bold text-lg my-2">Fullstack JS Developer</h1>
				<p className="text-sm text-gray-600">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
					corrupti itaque nihil, culpa soluta laborum officiis quaerat
					dolore eum sunt ipsum, quasi nam ex libero natus? Tempora
					quo voluptates doloremque.
				</p>
			</div>

			<div className="flex items-center gap-2 mt-4">
				<Badge className={"text-blue-700 font-bold"} variant="ghost">
					12 Positions
				</Badge>
				<Badge className={"text-[#F83002] font-bold"} variant="ghost">
					part time
				</Badge>
				<Badge className={"text-[#7209b7] font-bold"} variant="ghost">
					24 LPA
				</Badge>
			</div>

			<div className="flex items-center gap-4 mt-4">
				<Button variant="outline">Details</Button>
				<Button className="bg-[#7209b7]">Save For Later</Button>
			</div>
		</div>
	);
};

export default Job;
