import { useState } from "react";
import axios from "axios";

const FileUploader = () => {
    const [file, setFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState("");

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) {
            setUploadStatus("No file selected!");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await axios.post(
                "http://localhost:5000/api/aws/upload",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            console.log("Upload Response:", response.data);
            setUploadStatus("Upload successful!");
        } catch (error) {
            console.error("Upload Error:", error);
            setUploadStatus("Upload failed!");
        }
    };

    return (
        <div>
            <h2>Call Center Summarization</h2>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
            <p>{uploadStatus}</p>
        </div>
    );
};

export default FileUploader;