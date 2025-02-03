interface Project {
  org_name: string;
  role: string;
  from_date: Date;
  to_date: Date;
  description: string;
  responsibilities: string;
}
const Projects = () => {
  const projects: Project[] = [
    {
      org_name: "Birlasoft",
      role: "Senior Consaultant",
      from_date: new Date(6 / 9 / 2021),
      to_date: new Date(27 / 12 / 2024),
      description: "Worked here",
      responsibilities: "my responsibilities",
    },
  ];
  return (
    <div>
      {projects.map((item, idx) => {
        return (
          <div key={idx}>
            <section className="hero-section bg-gray-600 px-32 py-32 max-sm:px-20 max-sm:py-20 sm:px-20 sm:py-20">
              <h1>{item.org_name}</h1>
              <h2>{item.role}</h2>
              <h4>
                {item.from_date.toString()} - {item.to_date.toString()}
              </h4>
              <p>{item.description}</p>
              <p>{item.responsibilities}</p>
            </section>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
