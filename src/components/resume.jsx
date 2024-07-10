// components/ResumeViewer.js
import React from 'react';

const Resume = () => {
  // Assuming you have a resume PDF file uploaded to your server
  const resumeUrl = './src/assets/AryanResume.pdf';

  return (
    <div className="flex justify-center">
      <embed
        src={resumeUrl}
        type="application/pdf"
        width="100%"
        height="500px"
      />
    </div>
  );
};

export default Resume;