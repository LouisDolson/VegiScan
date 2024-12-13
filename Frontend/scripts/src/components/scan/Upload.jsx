import React, { useState } from "react";

const UploadPopup = ({ isOpenTwo, onCloseTwo }) => {
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const [notification, setNotification] = useState({ message: "", type: "" });
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile && uploadedFile.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => setImage(e.target.result);
      setFile(uploadedFile);
      reader.readAsDataURL(uploadedFile);

      setNotification({ message: "", type: "" });
    } else {
      setNotification({
        message: "Invalid file type. Please upload an image.",
        type: "error",
      });
    }
  };

  const handleDragOver = (event) => event.preventDefault();

  const handleDrop = (event) => {
    event.preventDefault();
    const uploadedFile = event.dataTransfer.files[0];
    if (uploadedFile && uploadedFile.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => setImage(e.target.result);
      setFile(uploadedFile);
      reader.readAsDataURL(uploadedFile);

      setNotification({ message: "", type: "" });
    } else {
      setNotification({
        message: "Invalid file type. Please upload an image.",
        type: "error",
      });
    }
  };

  const handleCancelUpload = () => {
    setImage(null);
    setFile(null);
  };

  const handleSubmit = async () => {
    if (!file) {
      setNotification({
        message: "Woops! You haven't uploaded an image yet.",
        type: "error",
      });
      return;
    }

    setIsUploading(true);
    const formData = new FormData();
    formData.append("image", file, file.name);

    try {
      const response = await fetch(
        "https://javascript-backend2-623812248472.asia-southeast2.run.app/predict",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) throw new Error("Failed to upload image");

      const result = await response.json();
      setNotification({ message: "Successfully submitted!", type: "success" });
      onCloseTwo({
        label: result.data.label,
        link: result.data.link
      });
    } catch (error) {
      setNotification({
        message: "Error uploading image. Please try again.",
        type: "error",
      });
    } finally {
      setIsUploading(false);
    }
  };

  if (!isOpenTwo) return null;

  return (
    <div>
      {/* Notification */}
      {notification.message && (
        <div
          className={`fixed top-4 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg shadow-md text-white z-50 ${
            notification.type === "error" ? "bg-red-500" : "bg-green-500"
          }`}
        >
          {notification.message}
        </div>
      )}

      {/* Popup */}
      <div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40"
        onClick={(e) => {
          if (e.target === e.currentTarget) onCloseTwo(null); // Close popup if clicked outside
        }}
      >
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full relative">
          <button
            className="absolute top-4 right-4 text-gray-400 hover:text-black"
            onClick={() => onCloseTwo(null)}
          >
            ✕
          </button>
          <div
            className="mb-4 border-2 border-dashed rounded-lg p-6 text-center transition-all"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            {image ? (
              <img src={image} alt="Preview" className="max-h-40 mx-auto mb-2" />
            ) : (
              <p className="text-gray-500">Drag & Drop or Click to Upload</p>
            )}
            <input
              type="file"
              accept="image/*"
              className="hidden"
              id="fileUpload"
              onChange={handleFileChange}
            />
            {!image && (
              <label
                htmlFor="fileUpload"
                className="cursor-pointer text-secondary-500 underline"
              >
                Browse files
              </label>
            )}
          </div>
          {image && (
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 w-full mb-2"
              onClick={handleCancelUpload}
            >
              Cancel Image
            </button>
          )}
          <button
            className={`w-full bg-primary-500 text-white py-3 rounded-lg font-semibold ${
              isUploading ? "opacity-50 cursor-not-allowed" : "hover:bg-primary-600"
            }`}
            onClick={handleSubmit}
            disabled={isUploading}
          >
            {isUploading ? "Uploading..." : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadPopup;