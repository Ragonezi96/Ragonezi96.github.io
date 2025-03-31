export default function Projects() {
  const projects = [
    {
      title: "Real-Time Data Pipeline",
      description: "Kafka + Spark Streaming + Redshift + Airflow",
      link: "https://github.com/yourusername/real-time-pipeline",
    },
    {
      title: "Data Quality Framework",
      description: "Great Expectations-based tool for validating ETL data quality",
      link: "https://github.com/yourusername/data-quality-framework",
    },
    {
      title: "Cloud Data Warehouse",
      description: "Designed and implemented a scalable data warehouse on AWS Redshift",
      link: "https://github.com/yourusername/cloud-data-warehouse",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-black">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl font-extrabold text-white mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-600">My Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="text-gray-400 mt-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-500 hover:underline mt-4 inline-block"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}