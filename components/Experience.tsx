export default function Experience() {
  const experiences = [
    {
      title: "Senior Data Engineer – [Company]",
      date: "Jan 2022 – Present",
      description: [
        "Built scalable pipelines using Airflow and Spark",
        "Designed Redshift data models and optimized ETL performance",
      ],
    },
    {
      title: "Data Engineer – [Previous Company]",
      date: "Aug 2020 – Dec 2021",
      description: [
        "Developed Python scripts for data ingestion",
        "Maintained data warehouse using BigQuery",
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 bg-black">
      <div className="container mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-white mb-10">
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-600">Experience</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
              <p className="text-gray">{exp.date}</p>
              <ul className="mt-4 list-disc list-inside text-gray-400">
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}