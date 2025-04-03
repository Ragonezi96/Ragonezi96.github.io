export default function Resume() {
  return (
    <section id="resume" className="py-16 bg-black">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl font-extrabold text-white mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-600">My Resume</span>
        </h2>
        <p className="text-gray-400 mb-6">
          Download my resume to learn more about my professional journey and skills.
        </p>
        <a
          href="/assets/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-purple-500 to-purple-800 text-black px-6 py-3 rounded-md font-semibold hover:opacity-90"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}