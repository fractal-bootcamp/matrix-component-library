// Description: a file uploader for uploading files with drag-and-drop support
// Requirements:
// - Drag-and-drop area
// - Multiple file upload support --
// - File type validation --
// - Error handling for unsupporter files --
import React from "react";
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
	const [isDragging, setIsDragging] = useState<boolean>(false);

	// Basic functionality
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

	// Drag and drop functionality
	const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsDragging(false);
		const files = e.dataTransfer.files ? Array.from(e.dataTransfer.files) : [];
		handleFiles(files);
	};

	const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
	};

	const handleDragEnter = () => {
		setIsDragging(true);
	};

	const handleDragLeave = () => {
		setIsDragging(false);
	};

	return (
		<div className="font-mono flex flex-col items-center">
			<div
				onDragOver={handleDragOver}
				onDragEnter={handleDragEnter}
				onDragLeave={handleDragLeave}
				onDrop={handleDrop}
				className={`border-2 border-dashed p-6 ${isDragging ? "border-green-500" : "border-gray-500"}`}
			>
				<p className="text-center text-xs p-2">
					Drag and drop files here, or click to select files
				</p>
				<input
					id="file-input"
					type="file"
					multiple
					onChange={handleFileChange}
					className="hidden"
				/>
				<label
					htmlFor="file-input"
					className="block text-center cursor-pointer p-2 bg-matrixGreen border-2 border-black"
				>
					Choose files
				</label>
			</div>
			<button onClick={handleFileUpload} className="p-2 border-2 border-black h-full m-2">
				{submitButtonText}
			</button>
			<div className="text-xs">
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
