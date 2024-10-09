// Description: a file uploader for uploading files with drag-and-drop support
// Requirements:
// - Drag-and-drop area
// - Multiple file upload support
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
	const [selectedFile, setSelectedFile] = useState<File | null>(null);
	const [fileType, setFileType] = useState<string>();
	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file && file.name) {
			setSelectedFile(file);
			setFileType(getSecondElement(file.name));
		}
	};
	const handleFileUpload = () => {
		if (!selectedFile) {
			alert("Please select a file first");
			return;
		}
		if (!fileType || !supportedTypes.includes(fileType)) {
			alert(
				`
Unsupported file type. 
Supported file types: ${supportedTypes.map((x) => ` .${x}`)}`
			);
		}
		const formData = new FormData();
		formData.append("file", selectedFile);
	};
	return (
		<div className="font-mono appearance-none flex items-center h-12">
			<input
				type="file"
				onChange={handleFileChange}
				className="bg-matrixGreen border-2 border-black p-2 h-full"
			/>
			<button onClick={handleFileUpload} className="p-2 border-2 border-black h-full">
				{submitButtonText}
			</button>
		</div>
	);
};

export default FileUploader;
