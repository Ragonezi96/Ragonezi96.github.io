export default function Resume() {
  return (
    <section id="resume" className="bg-black">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl font-extrabold text-white mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-600">Resume</span>
        </h2>
        <p className="text-gray-400 mb-6">
          View my resume below or download it for offline access.
        </p>

        {/* Resume viewer container */}
        <div className="max-w-5xl mx-auto bg-gray-900 rounded-lg p-4 mb-6 border border-gray-800">
          <div className="w-full h-[600px] md:h-[800px] bg-white rounded overflow-hidden">
            <iframe
              src="/assets/CV_Bernardo_English_US_EN_.pdf"
              className="w-full h-full"
              title="Resume PDF"
            />
          </div>
        </div>

        {/* Download button */}
        <a
          href="/assets/CV_Bernardo_English_US_EN_.pdf"
          download="Bernardo_Ragonezi_Resume.pdf"
          className="bg-gradient-to-r from-purple-500 to-purple-800 text-white px-6 py-3 rounded-md font-semibold hover:opacity-90 inline-block"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}