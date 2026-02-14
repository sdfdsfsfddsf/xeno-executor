import { Heart, ChevronRight, Check, Users } from "lucide-react";

export const metadata = {
  title: "Donate - Xeno Executor",
  description: "Help us keep Xeno free and continuously improving for everyone.",
};

const stats = [
  { value: "$12,450", label: "Total Raised", sublabel: "From 1,247 supporters" },
  { value: "$850", label: "This Month", sublabel: "89 contributions" },
  { value: "$1,500", label: "Monthly Goal", sublabel: "Server & development costs" },
];

const tiers = [
  { price: "$5", name: "Coffee Supporter", description: "Help fuel our late-night coding sessions", popular: false },
  { price: "$15", name: "Premium Supporter", description: "Helps cover server costs and development", popular: true },
  { price: "$50+", name: "Elite Supporter", description: "Major contribution to project development", popular: false },
];

const paymentMethods = [
  { name: "PayPal", sublabel: "donations@xeno.app", icon: "P" },
  { name: "Stripe", sublabel: "Credit card payments", icon: "S" },
  { name: "Crypto (ETH, BTC)", sublabel: "0x742d...89Af", icon: "C" },
];

const recentSupporters = [
  { initial: "M", name: "Marcus_Dev", time: "2 hours ago", amount: "$25", tier: "Premium Supporter" },
  { initial: "S", name: "Sarah_K", time: "5 hours ago", amount: "$10", tier: "Coffee Supporter" },
  { initial: "A", name: "Anonymous", time: "1 day ago", amount: "$100", tier: "Elite Supporter" },
  { initial: "J", name: "JohnDoe92", time: "2 days ago", amount: "$15", tier: "Premium Supporter" },
  { initial: "L", name: "Luna_Tech", time: "3 days ago", amount: "$50", tier: "Elite Supporter" },
];

const otherWays = [
  "Share Xeno with your friends and community",
  "Join our Discord and help other users",
  "Report bugs and suggest features",
  "Create tutorials and guides for new users",
];

export default function DonatePage() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-5xl font-bold mb-6 glow-text text-center">Support Xeno</h1>
        <p className="text-gray-400 text-lg leading-relaxed mb-12 text-center">
          Help us keep Xeno free and continuously improving for everyone.
        </p>

        {/* Thank You Card */}
        <div className="gradient-border rounded-xl p-12 card-glow text-center mb-12">
          <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Thank You for Your Support</h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Xeno is completely free and will always remain free. Your donations help us cover development costs, server infrastructure, and allow us to dedicate more time to improving Xeno for everyone.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat) => (
            <div key={stat.label} className="gradient-border rounded-xl p-6 card-glow text-center">
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <p className="text-gray-400 text-sm">{stat.label}</p>
              <p className="text-gray-500 text-xs mt-2">{stat.sublabel}</p>
            </div>
          ))}
        </div>

        {/* Tiers */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`gradient-border rounded-xl p-6 card-glow text-center ${
                tier.popular ? "border-2 border-white/20" : ""
              }`}
            >
              {tier.popular && (
                <div className="inline-block bg-white text-black text-xs px-3 py-1 rounded-full mb-2 font-bold">
                  Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{tier.price}</h3>
              <p className="text-gray-400 text-sm mb-4">{tier.name}</p>
              <p className="text-gray-500 text-xs">{tier.description}</p>
            </div>
          ))}
        </div>

        {/* Donation Methods */}
        <div className="gradient-border rounded-xl p-8 card-glow mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Donation Methods</h2>
          <div className="space-y-4">
            {paymentMethods.map((method) => (
              <button
                key={method.name}
                className="w-full gradient-border rounded-lg p-4 flex items-center justify-between hover:bg-white/5 transition"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                    <span className="font-bold">{method.icon}</span>
                  </div>
                  <div className="text-left">
                    <div className="font-medium">{method.name}</div>
                    <div className="text-xs text-gray-400">{method.sublabel}</div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            ))}
          </div>
        </div>

        {/* Recent Supporters */}
        <div className="gradient-border rounded-xl p-8 card-glow mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Users className="w-6 h-6" />
            Recent Supporters
          </h2>
          <div className="space-y-3">
            {recentSupporters.map((supporter) => (
              <div key={supporter.name} className="flex items-center justify-between p-4 rounded-lg bg-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center">
                    <span className="font-bold">{supporter.initial}</span>
                  </div>
                  <div>
                    <div className="font-medium">{supporter.name}</div>
                    <div className="text-xs text-gray-400">{supporter.time}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold">{supporter.amount}</div>
                  <div className="text-xs text-gray-400">{supporter.tier}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Ways to Support */}
        <div className="gradient-border rounded-xl p-8 card-glow">
          <h2 className="text-2xl font-bold mb-4">Other Ways to Support</h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            Can&apos;t donate? No problem! Here are other ways you can help:
          </p>
          <ul className="space-y-3 text-gray-400">
            {otherWays.map((way) => (
              <li key={way} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span>{way}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
