export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-black">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl font-extrabold text-white mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-600">Get in Touch</span>
        </h2>
        <p className="text-gray-400 mb-6">
          Feel free to reach out to me for collaborations, opportunities, or just to say hi!
        </p>
        <div className="space-y-4">
          <p className="text-white">
            Email:{" "}
            <a
              href="mailto:you@example.com"
              className="text-purple-500 hover:underline"
            >
              you@example.com
            </a>
          </p>
          <p className="text-white">
            LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/yourprofile"
              className="text-purple-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              yourprofile
            </a>
          </p>
          <p className="text-white">
            GitHub:{" "}
            <a
              href="https://github.com/yourusername"
              className="text-purple-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              @yourusername
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}