export default function GetInTouch() {
  return (
    <section id="contact" className="py-16 bg-black">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl font-extrabold text-white mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-600">
            Get in Touch
          </span>
        </h2>
        <p className="text-gray-400 mb-6">
          Feel free to reach out to me for collaborations, opportunities, or just to say hi!
        </p>
        <a
          href="mailto:bernardo_ragonezi@hotmail.com"
          className="bg-gradient-to-r from-purple-500 to-purple-800 text-black px-6 py-3 rounded-md font-semibold hover:opacity-90"
        >
          Send Email
        </a>
        <div className="space-y-4 mt-8">
          <p className="text-white">
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/bernardo-ragonezi-4b4292189/?locale=en_US"
              className="text-purple-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              bernardo-ragonezi
            </a>
          </p>
          <p className="text-white">
            GitHub:{" "}
            <a
              href="https://github.com/Ragonezi96"
              className="text-purple-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              @bernardo-ragonezi
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}