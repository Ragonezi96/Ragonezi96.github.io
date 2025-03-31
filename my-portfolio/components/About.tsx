export default function About() {
  return (
    <section id="about" className="py-16 bg-black">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start text-center md:text-left px-6 gap-8">
        {/* Photo */}
        <div className="photo-container flex-shrink-0">
          <img
            src="/profile_photo.PNG" /* Replace with the actual path to your photo */
            alt="Bernardo Ragonezi"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-gray-500 shadow-lg object-cover"
          />
        </div>

        {/* Text */}
        <div className="text-container max-w-2xl">
          <h2 className="text-3xl font-extrabold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-600">
              About Me
            </span>
          </h2>
          <p className="text-gray-400">
          I am a Data Engineer with 5 years of experience and a Bachelor's degree in Computer Engineering from PUC-MG. Throughout my career, I have worked with large-scale data architectures, utilizing tools such as Kubernetes, Airflow, Spark, and DBT. With experience in cloud environments (AWS and GCP), I specialize in building and optimizing data pipelines to ensure scalability and security. My design-pattern-oriented and automation-driven approach allows me to develop agile and efficient solutions to meet business needs.
          </p>
        </div>
      </div>
    </section>
  );
}