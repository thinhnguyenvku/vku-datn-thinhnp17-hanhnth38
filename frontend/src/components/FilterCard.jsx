import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

const fitlerData = [
	{
		fitlerType: "Location",
		array: ["Hanoi", "Hochiminh", "Danang", "Hue", "Quynhon"],
	},
	{
		fitlerType: "Industry",
		array: [
			"Frontend Developer",
			"Backend Developer",
			"FullStack Developer",
		],
	},
	{
		fitlerType: "Salary",
		array: ["0-300", "300-1000", ">1000"],
	},
];

const FilterCard = () => {
	return (
		<div className="w-full bg-white p-3 rounded-md">
			<h1 className="font-bold text-lg">Filter Jobs</h1>
			<hr className="mt-3" />
			<RadioGroup>
				{fitlerData.map((data, index) => (
					<div>
						<h1 className="font-bold text-lg">{data.fitlerType}</h1>
						{data.array.map((item, idx) => {
							return (
								<div className="flex items-center space-x-2 my-2">
									<RadioGroupItem value={item} id={item} />
									<Label htmlFor={item}>{item}</Label>
								</div>
							);
						})}
					</div>
				))}
			</RadioGroup>
		</div>
	);
};

export default FilterCard;
