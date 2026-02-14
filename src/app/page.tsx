import { Zap, BarChart3, Clock, CheckCircle } from "lucide-react";
import { TrackedDownloadLink } from "@/components/TrackedDownloadLink";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text leading-tight">
            Experience the Best <span className="text-gray-400">Reliable</span> Executor
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Xeno provides lightning-fast execution, minimal script support, and a simple interface - all completely free and keyless.
          </p>

          <TrackedDownloadLink href="/download" source="home_hero">
            Download Now
          </TrackedDownloadLink>
        </div>
      </section>

      {/* Executor Section */}
      <section id="executor" className="py-12 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* External Execution Card */}
            <div className="gradient-border rounded-xl p-6 card-glow">
              <h2 className="text-2xl font-bold mb-2">External Execution</h2>
              <p className="text-gray-400 text-sm mb-6">Execute scripts externally with our executor interface.</p>

              <div className="code-window">
                <div className="code-header">
                  <div className="code-dot bg-red-500" />
                  <div className="code-dot bg-yellow-500 ml-2" />
                  <div className="code-dot bg-green-500 ml-2" />
                  <span className="text-xs text-gray-400 ml-3">script.lua</span>
                </div>
                <div className="p-4 font-mono text-sm text-gray-300 space-y-1">
                  <div><span className="text-purple-400">local</span> <span className="text-blue-400">player</span> = <span className="text-green-400">game</span>.<span className="text-blue-400">Players</span>.<span className="text-blue-400">LocalPlayer</span></div>
                  <div><span className="text-purple-400">local</span> <span className="text-blue-400">character</span> = <span className="text-blue-400">player</span>.<span className="text-blue-400">Character</span></div>
                  <div className="text-gray-500">-- Execute your scripts here</div>
                  <div><span className="text-purple-400">function</span> <span className="text-yellow-400">executeScript</span>()</div>
                  <div className="pl-4"><span className="text-blue-400">print</span>(<span className="text-green-400">&quot;Script executed successfully!&quot;</span>)</div>
                  <div className="pl-4"><span className="text-gray-500">-- Your code here</span></div>
                  <div><span className="text-purple-400">end</span></div>
                  <div className="mt-4"><span className="text-yellow-400">executeScript</span>()</div>
                </div>
              </div>
            </div>

            {/* Performance Card */}
            <div className="gradient-border rounded-xl p-6 card-glow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Lightning Fast Performance</h2>
                  <p className="text-gray-400 text-sm">Experience lightning-fast script execution with the highest executor.</p>
                </div>
              </div>

              <div className="space-y-6 mt-8">
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      <span className="font-medium">Execution Speed</span>
                    </div>
                    <span className="text-sm font-bold">Lightning Fast</span>
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="w-4 h-4" />
                      <span className="font-medium">Performance</span>
                    </div>
                    <span className="text-sm font-bold">99.9%</span>
                  </div>
                  <p className="text-xs text-gray-400">Optimal performance</p>
                </div>

                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span className="font-medium">Response Time</span>
                    </div>
                    <span className="text-sm font-bold">Fast</span>
                  </div>
                  <p className="text-xs text-gray-400">Instant response</p>
                </div>

                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      <span className="font-medium">Reliability</span>
                    </div>
                    <span className="text-sm font-bold">100%</span>
                  </div>
                  <p className="text-xs text-gray-400">Always stable</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials & Users Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Free & Keyless */}
            <div>
              <h2 className="text-3xl font-bold mb-3">100% Free & Keyless</h2>
              <p className="text-gray-400 mb-8">
                No keys, no payments, no downloads - it&apos;s completely free to use and trusted by{" "}
                <span className="text-white font-bold">919,948</span> users worldwide.
              </p>

              <div className="space-y-4">
                <div className="testimonial-card">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold">A</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium">Alpha Tester</span>
                        <span className="text-xs text-gray-500">used Xeno</span>
                      </div>
                      <p className="text-sm text-gray-400">&quot;Best executor I&apos;ve ever used. Fast, reliable, and completely free!&quot;</p>
                      <span className="text-xs text-gray-500 mt-2 inline-block">Recently</span>
                    </div>
                  </div>
                </div>

                <div className="testimonial-card">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold">J</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium">J. Smith</span>
                        <span className="text-xs text-gray-500">used Xeno</span>
                      </div>
                      <p className="text-sm text-gray-400">&quot;Amazing performance and no annoying keys. Highly recommended!&quot;</p>
                      <span className="text-xs text-gray-500 mt-2 inline-block">Recently</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Users Worldwide */}
            <div>
              <h2 className="text-3xl font-bold mb-3">Users Worldwide</h2>
              <p className="text-gray-400 mb-8">Join our growing community of users who trust and use Xeno daily.</p>

              <div className="flex justify-center items-center">
                <div className="relative w-full max-w-lg aspect-square flex items-center justify-center globe-container">
                  {/* Globe SVG */}
                  <svg viewBox="0 0 464 464" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Main circle */}
                    <circle cx="232" cy="232" r="200" stroke="rgba(255,255,255,0.3)" strokeWidth="1" fill="none"/>
                    {/* Horizontal lines */}
                    <ellipse cx="232" cy="232" rx="200" ry="50" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none"/>
                    <ellipse cx="232" cy="232" rx="200" ry="100" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none"/>
                    <ellipse cx="232" cy="232" rx="200" ry="150" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none"/>
                    {/* Vertical lines */}
                    <ellipse cx="232" cy="232" rx="50" ry="200" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none"/>
                    <ellipse cx="232" cy="232" rx="100" ry="200" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none"/>
                    <ellipse cx="232" cy="232" rx="150" ry="200" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none"/>
                    {/* Dots representing users */}
                    <circle cx="180" cy="150" r="4" fill="white"/>
                    <circle cx="185" cy="160" r="3" fill="white"/>
                    <circle cx="175" cy="145" r="3" fill="white"/>
                    <circle cx="280" cy="120" r="4" fill="white"/>
                    <circle cx="285" cy="130" r="3" fill="white"/>
                    <circle cx="275" cy="115" r="3" fill="white"/>
                    <circle cx="320" cy="180" r="4" fill="white"/>
                    <circle cx="325" cy="190" r="3" fill="white"/>
                    {/* Glow effect */}
                    <circle cx="232" cy="432" r="100" fill="url(#glow)" opacity="0.3"/>
                    <defs>
                      <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="white" stopOpacity="0.5"/>
                        <stop offset="100%" stopColor="white" stopOpacity="0"/>
                      </radialGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
