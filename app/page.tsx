export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          API Monitoring
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Monitor Webhook Delivery.<br />Debug Failures Instantly.
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Intercept, log, and analyze every webhook delivery attempt. Track retries, diagnose failures, and fix broken endpoints before they cost you customers.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg hover:bg-[#79b8ff] transition-colors text-base"
        >
          Start Monitoring — $12/mo
        </a>
        <div className="mt-8 grid grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-white">100%</div>
            <div className="text-[#8b949e] text-sm">Delivery visibility</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">&lt;1s</div>
            <div className="text-[#8b949e] text-sm">Log latency</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">∞</div>
            <div className="text-[#8b949e] text-sm">Retry tracking</div>
          </div>
        </div>
      </section>

      {/* Features strip */}
      <section className="mb-20 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {[
          ["Proxy Interception", "Route webhooks through our proxy to capture every payload, header, and response code."],
          ["Retry Pattern Analysis", "Visualize retry sequences and exponential backoff behavior from any provider."],
          ["Failure Reason Breakdown", "See exactly why deliveries fail — timeouts, 4xx, 5xx, TLS errors, and more."],
          ["Live Debugger", "Replay any webhook delivery with modified payloads to reproduce and fix issues fast."]
        ].map(([title, desc]) => (
          <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <div className="text-[#58a6ff] font-semibold mb-1">{title}</div>
            <div className="text-[#8b949e] text-sm">{desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$12</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited webhook endpoints",
              "30-day delivery history",
              "Real-time failure alerts",
              "Payload replay & debugging",
              "Retry pattern visualization",
              "Email + Slack notifications"
            ].map(f => (
              <li key={f} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "How does the proxy interception work?",
              "You point your webhook sender to our proxy URL. We forward the request to your real endpoint and log the full exchange — request, response, timing, and status — before returning the response."
            ],
            [
              "Which webhook providers are supported?",
              "Any HTTP webhook works — Stripe, GitHub, Shopify, Twilio, or your own custom service. If it sends HTTP POST requests, we can monitor it."
            ],
            [
              "What happens if my endpoint is down?",
              "We log the failure with the exact error, capture the payload, and alert you immediately. You can replay the webhook once your endpoint is back up."
            ]
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} Webhook Delivery Monitor. All rights reserved.
      </footer>
    </main>
  )
}
