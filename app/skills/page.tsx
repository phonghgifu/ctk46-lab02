export default function SkillsPage() {
  const skills = [
    {
      category: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "React", "Next.JS", "Tailwind CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
    },
    {
      category: "Tools & Others",
      items: ["Git", "GitHub", "TypeScript", "REST API"],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Kỹ năng lập trình</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <div key={skill.category} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-4 text-blue-600">
              {skill.category}
            </h2>
            <ul className="space-y-2">
              {skill.items.map((item) => (
                <li key={item} className="flex items-center text-gray-700">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
