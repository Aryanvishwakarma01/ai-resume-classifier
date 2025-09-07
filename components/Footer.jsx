import React from "react";
import { Info } from "lucide-react"; 

const Footer = () => {
  return (
    <div className="bg-gray-50  mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center text-xs sm:text-base text-gray-600">
          <p>© 2025 AI Resume Classifier. Powered by advanced AI technology.</p>
          <p className="mt-2 text-sm">
            <span className="inline-flex items-center text-xs sm:text-base">
              <Info className="h-4 w-4 mr-1" />
              Your resume data is processed securely and not stored permanently.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
