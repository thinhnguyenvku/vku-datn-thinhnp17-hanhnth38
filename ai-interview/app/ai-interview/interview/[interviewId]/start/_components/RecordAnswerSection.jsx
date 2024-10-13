import Image from "next/image";
import React, { useState, useEffect } from "react";
import Webcam from "react-webcam";
import { Button } from "../../../../../../components/ui/button";
import useSpeechToText from "react-hook-speech-to-text";
import { Mic } from "lucide-react";
import { toast } from "sonner";
import { chatSession } from "../../../../../../utils/GeminiAIModal";
import { db } from "../../../../../../utils/db";
import { UserAnswer } from "../../../../../../utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";

function RecordAnswerSection({
	activeQuestionIndex,
	mockInterviewQuestions,
	interviewData,
}) {
	const [userAnswer, setUserAnswer] = useState("");
	const { user } = useUser();
	const [loading, setLoading] = useState(false);

	const [lang] = useState();

	const {
		error,
		interimResult,
		isRecording,
		results,
		startSpeechToText,
		stopSpeechToText,
		setResults,
	} = useSpeechToText({
		continuous: true,
		useLegacyResults: false,
	});

	useEffect(() => {
		results?.map((result) =>
			setUserAnswer((prevAns) => prevAns + result?.transcript)
		);
	}, [results]);

	useEffect(() => {
		if (!isRecording && userAnswer?.length > 10) {
			UpdateUserAnswer();
		}
	}, [userAnswer]);

	const StartStopRecording = async () => {
		if (isRecording) {
			stopSpeechToText();
		} else {
			startSpeechToText();
		}
	};

	const UpdateUserAnswer = async () => {
		setLoading(true);
		// const feedbackPrompt =
		// 	lang === "English"
		// 		? "Question : " +
		// 		  mockInterviewQuestions[activeQuestionIndex]?.question +
		// 		  ", User Answer : " +
		// 		  userAnswer +
		// 		  ", Depends on the question and answer for given interview question" +
		// 		  "Please give me rating for answer out of 10 and feedback as area of improvement if any in just 3 to 5 lines to improve it in JSON format with rating field and feedback field"
		// 		: "Câu hỏi : " +
		// 		  mockInterviewQuestions[activeQuestionIndex]?.question +
		// 		  ", Người dùng trả lời : " +
		// 		  userAnswer +
		// 		  ", Dựa vào câu hỏi và câu trả lời cho câu hỏi phỏng vấn" +
		// 		  "Vui lòng cho tôi xếp hạng cho câu trả lời trên 10 và phản hồi những điều cần cải thiện nếu có bằng tiếng Việt chỉ trong 3 đến 5 dòng để cải thiện câu trả lời đó ở định dạng JSON với trường xếp hạng và trường phản hồi";

		const feedbackPrompt =
			"Question : " +
			mockInterviewQuestions[activeQuestionIndex]?.question +
			", User Answer : " +
			userAnswer +
			", Depends on the question and answer for given interview question" +
			"Please give me rating for answer out of 10 and feedback as area of improvement if any in just 3 to 5 lines to improve it in JSON format with rating field and feedback field (Feedback bằng tiếng Anh hoặc tiếng Việt dựa vào ngôn ngữ của câu trả lời)";

		const result = await chatSession.sendMessage(feedbackPrompt);
		const mockJsonResp = result.response
			.text()
			.replace("```json", "")
			.replace("```", "");

		const JsonFeedbackResp = JSON.parse(mockJsonResp);

		const resp = await db.insert(UserAnswer).values({
			mockIdRef: interviewData?.mockId,
			question: mockInterviewQuestions[activeQuestionIndex]?.question,
			correctAns: mockInterviewQuestions[activeQuestionIndex]?.answer,
			userAns: userAnswer,
			feedback: JsonFeedbackResp?.feedback,
			rating: JsonFeedbackResp?.rating,
			userEmail: user?.primaryEmailAddress?.emailAddress,
			createdAt: moment().format("DD-MM-yyyy"),
		});

		if (resp) {
			toast("User Answer recorded successfully");
			setUserAnswer([]);
			setUserAnswer("");
		}
		setResults([]);
		setLoading(false);
	};

	return (
		<div className="flex items-center justify-center flex-col">
			<div className="flex flex-col mt-20 justify-center bg-teal-600 items-center rounded-lg p-5">
				<Image
					src={"/webcam.png"}
					width={150}
					height={150}
					className="absolute"
					alt="webcam"
				/>
				<Webcam
					mirrored={true}
					style={{
						height: 300,
						width: "100%",
						zIndex: 10,
					}}
				/>
			</div>
			<Button
				variant="outline"
				className="my-10"
				onClick={StartStopRecording}
				disabled={loading}
			>
				{isRecording ? (
					<h2 className="text-red-600 flex gap-2">
						<Mic />
						Stop Recording
					</h2>
				) : (
					"Record Answer"
				)}
			</Button>
		</div>
	);
}

export default RecordAnswerSection;
