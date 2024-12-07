"use client";
import React, { useState } from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "../../../components/ui/dialog";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import { chatSession } from "../../../utils/GeminiAIModal";
import { LoaderCircle } from "lucide-react";
import { MockInterview } from "../../../utils/schema";
import { db } from "../../../utils/db";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { useRouter } from "next/navigation";

function AddNewInterview() {
	const [openDialog, setOpenDialog] = useState(false);
	const [jobPosition, setJobPosition] = useState();
	const [jobDesc, setJobDesc] = useState();
	const [jobExperience, setJobExperience] = useState();
	const [questionNumber, setQuestionNumber] = useState();
	const [lang, setLang] = useState();
	const [loading, setLoading] = useState(false);
	const [JsonResponse, setJsonResponse] = useState([]);
	const { user } = useUser();
	const router = useRouter();

	const onSubmit = async (e) => {
		setLoading(true);
		e.preventDefault();

		const InputPrompt =
			lang === "English"
				? "Job Position: " +
				  jobPosition +
				  ", Job Description: " +
				  jobDesc +
				  ", Years of Experience: " +
				  jobExperience +
				  ", Depends on this information please give me " +
				  questionNumber +
				  " interview question by english with answers in JSON format [{}, {}, ...] only with no backticks. Doesn't need extra info, only questions and answers."
				: "Vị trí công việc: " +
				  jobPosition +
				  ", Mô tả công việc: " +
				  jobDesc +
				  ", Số năm kinh nghiệm: " +
				  jobExperience +
				  ", Dựa vào thông tin này xin vui lòng cho tôi biết " +
				  questionNumber +
				  " câu hỏi phỏng vấn bằng tiếng Việt có câu trả lời ở định dạng JSON với dấu [] ở bên ngoài và các dấu {} ở bên trong, 2 từ khóa bên trong là question và answer. Không cần thông tin bổ sung, chỉ có câu hỏi và câu trả lời.";

		const result = await chatSession.sendMessage(InputPrompt);
		const MockJsonResp = result.response
			.text()
			.replace("```json", "")
			.replace("```", "");

		setJsonResponse(MockJsonResp);

		if (MockJsonResp) {
			const resp = await db
				.insert(MockInterview)
				.values({
					mockId: uuidv4(),
					jsonMockResp: MockJsonResp,
					jobPosition: jobPosition,
					jobDesc: jobDesc,
					jobExperience: jobExperience,
					questionNumber: questionNumber,
					lang: lang,
					createdBy: user?.primaryEmailAddress?.emailAddress,
					createdAt: moment().format("DD-MM-yyyy"),
				})
				.returning({ mockId: MockInterview.mockId });

			if (resp) {
				setOpenDialog(false);
				router.push("/ai-interview/interview/" + resp[0]?.mockId);
			}
		} else {
			console.log("ERR");
		}

		setLoading(false);
	};
	return (
		<div>
			<div
				className="p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all"
				onClick={() => setOpenDialog(true)}
			>
				<h2 className=" text-lg text-center">+ Add New</h2>
			</div>
			<Dialog open={openDialog} onOpenChange={setOpenDialog}>
				<DialogContent className="max-w-2xl">
					<DialogHeader>
						<DialogTitle className="text-2xl">
							Tell us more about your job interview
						</DialogTitle>
						<DialogDescription>
							<form onSubmit={onSubmit}>
								<div>
									<h2>
										Add details about your job
										positions/role, Job description and
										years of experience.
									</h2>
									<div className="mt-7 my-2">
										<label
											htmlFor=""
											className="font-semibold"
										>
											Job Role/Job Position
										</label>
										<Input
											placeholder="Ex. Full Stack Developer"
											required
											onChange={(event) =>
												setJobPosition(
													event.target.value
												)
											}
										/>
									</div>
									<div className="mt-7 my-2">
										<label
											htmlFor=""
											className="font-semibold"
										>
											Job Description/ Tech Stack (In
											Short)
										</label>
										<Textarea
											placeholder="Ex. React, Node.js, Next.js and PostgreSQL etc."
											onChange={(event) =>
												setJobDesc(event.target.value)
											}
											required
										/>
									</div>
									<div className="mt-7 my-2">
										<label
											htmlFor=""
											className="font-semibold"
										>
											Years of experience.
										</label>
										<Input
											placeholder="Ex. 5"
											type="number"
											max="50"
											onChange={(event) =>
												setJobExperience(
													event.target.value
												)
											}
											required
										/>
									</div>
									<div className="mt-7 my-2">
										<label
											htmlFor="lang"
											className="font-semibold"
										>
											Select Language
										</label>
										<div className="flex gap-5 mt-3">
											<label className="flex items-center space-x-3">
												<input
													type="radio"
													value="English"
													checked={lang === "English"}
													onChange={() =>
														setLang("English")
													}
													className="form-radio h-5 w-5 text-blue-600"
												/>
												<span className="text-md">
													English
												</span>
											</label>
											<label className="flex items-center space-x-3">
												<input
													type="radio"
													value="Vietnamese"
													checked={
														lang === "Vietnamese"
													}
													onChange={() =>
														setLang("Vietnamese")
													}
													className="form-radio h-5 w-5 text-blue-600"
												/>
												<span className="text-md">
													Vietnamese
												</span>
											</label>
										</div>
									</div>

									<div className="mt-7 my-2">
										<label
											htmlFor=""
											className="font-semibold"
										>
											Number of Questions.
										</label>
										<Input
											placeholder="Ex. 5"
											type="number"
											max="50"
											onChange={(event) =>
												setQuestionNumber(
													event.target.value
												)
											}
											required
										/>
									</div>
								</div>
								<div className="flex gap-5 justify-end">
									<Button
										type="button"
										variant="ghost"
										onClick={() => setOpenDialog(false)}
									>
										Cancel
									</Button>
									<Button type="submit" disabled={loading}>
										{loading ? (
											<>
												<LoaderCircle className="animate-spin" />
												Generating from AI
											</>
										) : (
											"Start Interview"
										)}
									</Button>
								</div>
							</form>
						</DialogDescription>
					</DialogHeader>
				</DialogContent>
			</Dialog>
		</div>
	);
}

export default AddNewInterview;
