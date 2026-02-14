import { Code } from "lucide-react";

export const metadata = {
  title: "Credits - Xeno Executor",
  description: "Xeno wouldn't be possible without the dedication and talent of our team and community.",
};

const teamMembers = [
  {
    initial: "A",
    name: "Alex Chen",
    role: "Lead Developer",
    description: "Core architecture and execution engine development",
  },
  {
    initial: "S",
    name: "Sarah Kim",
    role: "UI/UX Designer",
    description: "Interface design and user experience optimization",
  },
  {
    initial: "M",
    name: "Marcus Silva",
    role: "Backend Engineer",
    description: "Server infrastructure and performance optimization",
  },
  {
    initial: "L",
    name: "Lisa Wang",
    role: "Community Manager",
    description: "Community support and user engagement",
  },
];

const stats = [
  { value: "919K+", label: "Active Users" },
  { value: "150+", label: "Beta Testers" },
  { value: "50+", label: "Contributors" },
  { value: "2.5K+", label: "Discord Members" },
];

const technologies = ["C++ Core", ".NET Framework", "Lua VM"];

export default function CreditsPage() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-5xl font-bold mb-6 glow-text">Credits</h1>
        <p className="text-gray-400 text-lg leading-relaxed mb-12">
          Xeno wouldn&apos;t be possible without the dedication and talent of our team and community.
        </p>

        {/* Core Team */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Core Team</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {teamMembers.map((member) => (
              <div key={member.name} className="gradient-border rounded-xl p-6 card-glow">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold">{member.initial}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-gray-400 text-sm mb-2">{member.role}</p>
                    <p className="text-gray-500 text-sm">{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Special Thanks */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Special Thanks</h2>
          <div className="gradient-border rounded-xl p-8 card-glow">
            <p className="text-gray-400 leading-relaxed mb-6">
              We would like to extend our gratitude to all the contributors, beta testers, and community members who have helped shape Xeno into what it is today.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold mb-1">{stat.value}</p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Built With */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Built With</h2>
          <div className="gradient-border rounded-xl p-8 card-glow">
            <p className="text-gray-400 leading-relaxed mb-4">
              Xeno is built using modern technologies and tools:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {technologies.map((tech) => (
                <div key={tech} className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
                  <Code className="w-5 h-5" />
                  <span className="font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
