import { Check } from "lucide-react";

export const metadata = {
  title: "About - Xeno Executor",
  description: "Learn more about our mission, technology, and commitment to providing the best executor experience.",
};

export default function AboutPage() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-5xl font-bold mb-6 glow-text">About Xeno</h1>
        <p className="text-gray-400 text-lg leading-relaxed mb-12">
          Learn more about our mission, technology, and commitment to providing the best executor experience.
        </p>

        <div className="space-y-8">
          {/* Our Mission */}
          <div className="gradient-border rounded-xl p-8 card-glow">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-400 leading-relaxed">
              Xeno was created with a simple mission: to provide the most reliable, fast, and user-friendly executor completely free of charge. We believe that everyone should have access to powerful tools without barriers like keys or payments.
            </p>
          </div>

          {/* Advanced Technology */}
          <div className="gradient-border rounded-xl p-8 card-glow">
            <h2 className="text-2xl font-bold mb-4">Advanced Technology</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Built with cutting-edge technology, Xeno delivers lightning-fast execution speeds and unmatched reliability. Our executor is designed to handle complex scripts with ease while maintaining a clean and intuitive interface.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                Lightning-fast execution engine
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                100% keyless system
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                Regular updates and improvements
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                24/7 community support
              </li>
            </ul>
          </div>

          {/* Growing Community */}
          <div className="gradient-border rounded-xl p-8 card-glow">
            <h2 className="text-2xl font-bold mb-4">Growing Community</h2>
            <p className="text-gray-400 leading-relaxed">
              With over 919,948 users worldwide, Xeno has built a thriving community of developers and enthusiasts. Join our Discord server to connect with other users, get support, and stay updated with the latest features and improvements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
