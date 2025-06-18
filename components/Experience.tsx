export default function Experience() {
  const experiences = [
    {
      title: "Senior Data Engineer",
      company: "Crosby Health",
      date: "Dec 2024 – Present",
      description:
        "First engineer in the data team, I’ve created standards and process for a data driven culture. Migrated infrastructure from AWS to GCP with Terraform. Deployed Airflow and Metabase in GKE. Built and maintained pipelines using Kubernetes operators. Designed the data lake using GCS and Big Query. Created multiple integrations between clients, suppliers and internal with FastAPI.",
    },
    {
      title: "Senior Data Engineer",
      company: "Anchor Loans",
      date: "Dec 2023 – Dec 2024",
      description:
        "Responsible for improving data infrastructure using Kubernetes for hosting tools such as Airflow and creating ETL pipelines using Object Oriented Python classes and design patterns.",
    },
    {
      title: "Senior Data Engineer",
      company: "Terramagna",
      date: "May 2022 – Nov 2023",
      description:
        "Support business teams with the creation of data pipelines. Using Airflow for orchestration, and Python or PySpark for ingestion, and DBT for data transformation. Structuring a datalake to store and provide business value with scalability and security. Define standard data ingestion tools to be used in the data platform such as NiFi and Airbyte. Create template functions to accelerate development time. Build GitHub Actions pipelines for CI/CD.",
    },
    {
      title: "Cloud Data Engineer",
      company: "Questrade",
      date: "Sep 2021 – May 2022",
      description:
        "Creation and maintenance of a data platform, using GCP cloud resources with Terraform for high processing and scalability. Data ingestion and processing in streaming or batch. Programming in Apache Beam and Kafka for streaming pipelines and Spark for batch pipelines. Deploy of Astronomer platform in GKE cluster, and resources monitoring with Datadog. Creation of CI/CD pipelines in GitLab.",
    },
    {
      title: "Data Engineer",
      company: "Inter",
      date: "Sep 2020 – Aug 2021",
      description:
        "Creation and maintenance of big data pipelines, using AWS cloud resources for high processing and scalability. Data ingestion and processing in streaming or batch. Programming in PySpark to work with an enormous quantity of data in parallel on EMR clusters.",
    },
    {
      title: "Business Intelligence Analyst",
      company: "Syngenta Digital",
      date: "Feb 2020 – Sep 2020",
      description:
        "Use of Python and Pentaho to create ETLs, involving different data sources such as MySQL, MongoDB, Salesforce. Using Tableau to create interactive dashboards, and generate value and intelligence for customers and internal managers. AWS cloud to store and process data. APEX programming to generate automations and layouts inside Salesforce.",
    },
    {
      title: "Business Intelligence Intern",
      company: "Strider Agro",
      date: "Aug 2019 – Feb 2020",
      description:
        "Data treatment through Python; Integrating systems via API; Creation of Dashboards for strategic data analysis in Tableau. Continuous improvement in Salesforce environment.",
    },
    {
      title: "Network Intern",
      company: "Prodemge",
      date: "May 2017 – Feb 2018",
      description:
        "Support in dealing with internal and external network incidents, implementation and support in wireless networks, and optimization of network topologies.",
    },
  ];

  return (
    <section id="experience" className="py-16 bg-black">
      <div className="container mx-auto px-2 sm:px-4">
        <h2 className="text-3xl font-extrabold text-center text-white mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-600">
            Experience
          </span>
        </h2>
        <div className="relative flex flex-col items-center">
          {/* Timeline vertical line */}
          <div className="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-purple-700 to-blue-700 h-full -translate-x-1/2 z-0 rounded"></div>
          <div className="w-full flex flex-col gap-16">
            {experiences.map((exp, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-center w-full`}
                >
                  {/* Left side */}
                  <div className={`md:w-1/2 flex ${isLeft ? "justify-end pr-8" : "justify-start pl-8"} z-10`}>
                    {isLeft && (
                      <div className="relative group bg-gray-900/70 border border-white/30 rounded-2xl p-8 shadow-xl w-full max-w-3xl text-left backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_24px_4px_rgba(139,92,246,0.3)] hover:border-purple-600">
                        {/* Accent bar and icon */}
                        <div className="absolute -left-4 top-6 h-12 w-1 bg-gradient-to-b from-purple-600 to-blue-600 rounded"></div>
                        <div className="absolute -left-10 top-6 flex items-center justify-center w-8 h-8 bg-black border-2 border-purple-700 rounded-full shadow-lg">
                          <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 7V6a6 6 0 1112 0v1M5 11h14l-1.5 9h-11L5 11z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                        <div className="flex flex-row items-center gap-2 mb-2">
                          <span className="font-mono text-blue-400 text-sm">{exp.company}</span>
                          <span className="font-mono text-gray-400 text-xs">|</span>
                          <span className="font-mono text-purple-300 text-sm">{exp.date}</span>
                        </div>
                        <hr className="my-4 border-t border-white/10" />
                        <p className="text-gray-300">{exp.description}</p>
                      </div>
                    )}
                  </div>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-purple-700 border-4 border-black rounded-full z-20 shadow-lg"></div>
                  {/* Right side */}
                  <div className={`md:w-1/2 flex ${!isLeft ? "justify-start pl-8" : "justify-end pr-8"} z-10`}>
                    {!isLeft && (
                      <div className="relative group bg-gray-900/70 border border-white/30 rounded-2xl p-8 shadow-xl w-full max-w-3xl text-left backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_24px_4px_rgba(59,130,246,0.3)] hover:border-blue-600">
                        {/* Accent bar and icon */}
                        <div className="absolute -right-4 top-6 h-12 w-1 bg-gradient-to-b from-blue-600 to-purple-600 rounded"></div>
                        <div className="absolute -right-10 top-6 flex items-center justify-center w-8 h-8 bg-black border-2 border-blue-700 rounded-full shadow-lg">
                          <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 7V6a6 6 0 1112 0v1M5 11h14l-1.5 9h-11L5 11z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                        <div className="flex flex-row items-center gap-2 mb-2">
                          <span className="font-mono text-purple-400 text-sm">{exp.company}</span>
                          <span className="font-mono text-gray-400 text-xs">|</span>
                          <span className="font-mono text-blue-300 text-sm">{exp.date}</span>
                        </div>
                        <hr className="my-4 border-t border-white/10" />
                        <p className="text-gray-300">{exp.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}