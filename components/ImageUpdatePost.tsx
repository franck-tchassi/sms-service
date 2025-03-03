"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface ImageUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpload: (file: File) => void;
}

const ImageUploadModal: React.FC<ImageUploadModalProps> = ({ isOpen, onClose, onUpload }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      onUpload(selectedFile);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-5 rounded-lg shadow-lg w-96">
        {/* Bouton Fermer */}
        <div className="flex justify-end pb-2">
          <X className="text-gray-500 hover:text-gray-700 text-xl cursor-pointer" onClick={onClose} />
        </div>

        {/* Input pour choisir l'image */}
        <input type="file" accept="image/*" onChange={handleFileChange} className="w-full p-2 border rounded-lg mb-4" />

        {/* Prévisualisation de l'image */}
        {selectedFile && (
          <div className="mb-4 flex justify-center">
            <Image
              src={URL.createObjectURL(selectedFile)}
              alt="Prévisualisation"
              width={300}
              height={200}
              className="rounded-lg shadow-md mt-2"
            />
          </div>
        )}

        {/* Bouton Modifier */}
        <div className="flex justify-center">
          <button
            onClick={handleUpload}
            disabled={!selectedFile}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition disabled:bg-gray-400"
          >
            Modifier
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageUploadModal;
