"use client";
import Link from "next/link";
import { useState } from "react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ loading: false, msg: "", ok: null });

  async function handleSubscribe(e) {
    e.preventDefault();
    setStatus({ loading: true, msg: "", ok: null });

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus({ loading: false, msg: "Subscription successful! Check your inbox.", ok: true });
        setEmail("");
      } else {
        throw new Error(data?.error || "Something went wrong");
      }
    } catch (err) {
      setStatus({ loading: false, msg: err.message, ok: false });
    }
  }

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white">SJ CodeLab</h3>
            <p className="mt-4 text-sm">Building quality web experiences with MERN Stack.</p>
            <div className="flex space-x-4 mt-6">
              <Link href="https://twitter.com/" aria-label="Twitter">
                <FaTwitter className="w-5 h-5 hover:text-[#1dd1a1] transition-colors" />
              </Link>
              <Link href="https://github.com/" aria-label="GitHub">
                <FaGithub className="w-5 h-5 hover:text-[#1dd1a1] transition-colors" />
              </Link>
              <Link href="https://linkedin.com/" aria-label="LinkedIn">
                <FaLinkedin className="w-5 h-5 hover:text-[#1dd1a1] transition-colors" />
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-[#1dd1a1] transition-colors">Home</Link></li> 
              <li><Link href="/about" className="hover:text-[#1dd1a1] transition-colors">About</Link></li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Subscribe</h4>
            <p className="text-sm mb-4">Get updates about new movie updates and features.</p>
            <form onSubmit={handleSubscribe} className="flex w-full">
              <input
                type="email"
                required
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 rounded-l-md focus:outline-none"
              />
              <button
                type="submit"
                disabled={status.loading}
                className="bg-[#1dd1a1] hover:bg-[#17b68e] disabled:opacity-60 text-white px-4 py-2 rounded-r-md transition-colors"
              >
                {status.loading ? "Joining..." : "Join"}
              </button>
            </form>
            {status.msg && (
              <p className={`mt-2 text-sm ${status.ok ? "text-green-400" : "text-red-400"}`}>
                {status.msg}
              </p>
            )}
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-sm flex flex-col md:flex-row justify-between items-center">
          <span>&copy; {year} SJ CodeLab. All rights reserved.</span>
          <span>
            Built with 
            <a href="https://nextjs.org/" className="hover:text-[#1dd1a1] transition-colors">Next.js</a>
             & <a href="https://tailwindcss.com/" className="hover:text-[#1dd1a1] transition-colors">Tailwind CSS</a>.
          </span>
        </div>
      </div>
    </footer>
  );
}
