import React from 'react'

const HomePage = () => {
    return (
        <>
            <div className="text-center p-10">
                <h2 className="text-xl sm:text-4xl font-bold text-gray-900 mb-4">
                    Get Your Resume <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AI-Analyzed</span>
                </h2>
                <p className="text-sm sm:text-xl px-5 sm:px-0 text-gray-600  max-w-3xl mx-auto">
                    Upload your resume and get instant feedback on ATS compatibility, category fit, skill matching, and improvement suggestions.
                </p>
            </div>
        </>
    )
}

export default HomePage