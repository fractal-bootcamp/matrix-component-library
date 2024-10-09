// Description: a file uploader for uploading files with drag-and-drop support
// Requirements:
// - Drag-and-drop area
// - Multiple file upload support --
// - File type validation --
// - Error handling for unsupporter files --

import { useState } from "react";

function getSecondElement(input: string): string | undefined {
	const parts = input.split(".");
	return parts.length > 1 ? parts[1] : undefined;
}

interface FileUploaderProps {
	submitButtonText: string;
	supportedTypes: string[];
}

const FileUploader = ({ submitButtonText, supportedTypes }: FileUploaderProps) => {
	const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
	const [errorMessages, setErrorMessages] = useState<string[]>([]);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files ? Array.from(e.target.files) : [];
		handleFiles(files);
	};

	const handleFiles = (files: File[]) => {
		const errors: string[] = [];
		const validFiles: File[] = [];

		files.forEach((file) => {
			const fileType = getSecondElement(file.name);
			if (fileType && supportedTypes.includes(fileType)) {
				validFiles.push(file);
			} else {
				errors.push(`Unsupported file type: ${file.name}`);
			}
		});

		setSelectedFiles((prevFiles) => [...prevFiles, ...validFiles]);
		setErrorMessages(errors);
	};

	const handleFileUpload = () => {
		if (selectedFiles.length === 0) {
			alert("Please select at least one file first");
			return;
		}

		const formData = new FormData();
		selectedFiles.forEach((file) => {
			formData.append("files", file);
		});
	};

	return (
		<div className="font-mono">
			<div className="font-mono appearance-none flex items-center h-12">
				<input
					type="file"
					multiple
					onChange={handleFileChange}
					className="bg-matrixGreen border-2 border-black p-2 h-full"
				/>
				<button onClick={handleFileUpload} className="p-2 border-2 border-black h-full">
					{submitButtonText}
				</button>
			</div>
			<div className="text-sm">
				{errorMessages.length > 0 && (
					<div className="text-red-500 mt-2">
						{errorMessages.map((error, index) => (
							<p key={index}>{error}</p>
						))}
					</div>
				)}
				{selectedFiles.length > 0 && (
					<div>
						<ul>
							{selectedFiles.map((file, index) => (
								<li key={index}>{file.name}</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</div>
	);
};

export default FileUploader;
