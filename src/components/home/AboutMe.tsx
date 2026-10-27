export default function AboutMe() {
  const data = {
    education: "BSTU, ISIT, 2022/2026",
    languages: [
      { lang: "Russian - native" },
      { lang: "English - B2" },
    ],
    domains: [
      { domain: "HR tech" },
      { domain: "3D Printing" },
      { domain: "CMS" },
      { domain: "E-commerce" },
      { domain: "Productivity" },
      { domain: "AI" },
      {domain: "HealthCare"},
    ],
    skills: [
      { skill: "Figma" },
      { skill: "3D and graphics" },
      { skill: "CMS" },
      { skill: "Frontend" },
      { skill: "TypeScript" },
      { skill: "React" },
      { skill: "JS" },
      { skill: "Next.js" },
      { skill: "Nest.js" },
      { skill: "DevOps and tools" },
      {skill: "Databases"},
    ],
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-5 md:px-8 py-8 w-full justify-between items-start">
      <div className="m-2 grid grid-cols-[120px_1fr] gap-2 md:grid-cols-1">
        <p className="text-2xl md:text-4xl underline md:mb-5"><i>education</i></p>
        <p className="text-base md:text-lg">{data.education}</p>
      </div>
  
      <div className="m-2 grid grid-cols-[120px_1fr] gap-2 md:grid-cols-1">
        <p className="text-2xl md:text-4xl underline md:mb-5"><i>languages</i></p>
        <div>
          {data.languages.map((language, index) => (
            <p key={index} className="text-base md:text-lg">{language.lang}</p>
          ))}
        </div>
      </div>

      <div className="m-2 grid grid-cols-[120px_1fr] gap-2 md:grid-cols-1">
        <p className="text-2xl md:text-4xl underline md:mb-5"><i>domains</i></p>
        <div className="grid grid-cols-2 items-start justify-items-start">
          {data.domains.map((domain, index) => (
            <p key={index} className="text-base md:text-lg">{domain.domain}</p>
          ))}
        </div>
      </div>

      <div className="m-2 grid grid-cols-[120px_1fr] gap-2 md:grid-cols-1">
        <p className="text-2xl md:text-4xl underline md:mb-5"><i>skills</i></p>
        <div className="grid grid-cols-2 items-start justify-items-start">
          {data.skills.map((s, index) => (
            <p key={index} className="text-base md:text-lg">{s.skill}</p>
          ))}
        </div>
      </div>
    </div>
  );
}