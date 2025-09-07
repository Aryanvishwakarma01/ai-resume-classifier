import React from "react";
import { Upload } from "lucide-react";

const UploadSection = () => {
    return (
        <div className="bg-white rounded-2xl shadow-sm border-2 border-dashed border-gray-300 hover:border-blue-400 transition-colors">
            <div className="p-12 text-center cursor-pointer">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full w-fit mx-auto mb-6">
                    <Upload className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-sm sm:text-xl font-semibold text-gray-900 mb-2">
                    Drop your resume here or click to upload
                </h3>
                <p className="text-gray-600 text-[12px] sm:text-[16px] mb-6">
                    Supports PDF files up to 10MB
                </p>
                <button
                    type="button"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-colors text-[12px] sm:text-xl"
                >
                    Choose File
                </button>
                <input
                    type="file"
                    accept=".pdf"
                    className="hidden"
                />
            </div>
        </div>
    );
};

export default UploadSection;
