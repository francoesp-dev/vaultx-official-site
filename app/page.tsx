"use client";

import Image from "next/image";
import { Shield, Smartphone, Lock, Globe, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen selection:bg-emerald-500/30 font-sans overflow-hidden">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <Image
            src="/screenshots/logo.png"
            alt="VaultX Logo"
            width={32}
            height={32}
            priority
          />
          <span className="text-xl font-bold tracking-widest">
            VAULT<span className="text-emerald-400">X</span>
          </span>
        </motion.div>
        <motion.a
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          href="https://github.com/francoesp-dev/vaultx-password-manager"
          target="_blank"
          rel="noreferrer"
          className="text-zinc-400 hover:text-white transition-colors"
        >
          <GithubIcon className="w- h-6" />
        </motion.a>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center pt-16 pb-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-mono mb-8"
        >
          <Shield size={14} />
          <span>v1.0.0 is now live</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-8xl font-black tracking-tighter mb-6 bg-linear-to-br from-white via-zinc-200 to-zinc-600 bg-clip-text text-transparent"
        >
          YOUR DATA.
          <br />
          YOUR RULES.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-zinc-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
        >
          The open-source, military-grade password manager that keeps your
          credentials encrypted, local, and exclusively on your device.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button
            onClick={() =>
              alert(
                "The v1.0.0 APK is currently compiling on our servers. Please check back in a few minutes!",
              )
            }
            className="flex items-center justify-center gap-2 bg-emerald-600/60 cursor-not-allowed text-white px-8 py-4 rounded-full font-bold text-lg transition-all border border-emerald-500/30"
          >
            <Download size={20} className="animate-pulse" />
            Compiling APK...
          </button>
          <a
            href="https://github.com/francoesp-dev/vaultx-password-manager"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 px-8 py-4 rounded-full font-bold text-lg transition-all text-white hover:scale-105 active:scale-95"
          >
            <GithubIcon className="w-5 h-5" />
            View Source
          </a>
        </motion.div>
      </section>

      {/* App Showcase (Screenshots) */}
      <section className="max-w-6xl mx-auto px-4 pb-32 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
          {/* Auth Screen (Izquierda) */}
          <motion.div
            initial={{ opacity: 0, x: -50, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-linear-to-b from-emerald-500 to-transparent rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <Image
              src="/screenshots/auth_unlock.jpg"
              alt="VaultX Authentication"
              width={280}
              height={600}
              priority
              className="relative rounded-4xl border border-zinc-800 shadow-2xl"
            />
          </motion.div>

          {/* Vault Screen (Centro Flotante) */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              type: "spring",
              bounce: 0.3,
            }}
            className="relative group md:-translate-y-8 z-10"
          >
            <div className="absolute -inset-1 bg-linear-to-b from-emerald-400 to-transparent rounded-[2.5rem] blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
            <Image
              src="/screenshots/vault_list.jpg"
              alt="VaultX Credentials List"
              width={300}
              height={640}
              priority
              className="relative rounded-4xl border border-zinc-700 shadow-2xl"
            />
          </motion.div>

          {/* Generator Screen (Derecha) */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-linear-to-b from-emerald-500 to-transparent rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <Image
              src="/screenshots/generator.jpg"
              alt="VaultX Password Generator"
              width={280}
              height={600}
              priority
              className="relative rounded-4xl border border-zinc-800 shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-8 py-24 border-t border-white/5">
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              icon: <Lock className="text-emerald-400" size={24} />,
              title: "AES-256 Encryption",
              desc: "Industry-standard encryption for maximum security. Your master key is never stored in plain text.",
            },
            {
              icon: <Globe className="text-emerald-400" size={24} />,
              title: "100% Offline",
              desc: "No cloud, no trackers. Your database lives strictly in your device's isolated storage.",
            },
            {
              icon: <Smartphone className="text-emerald-400" size={24} />,
              title: "Biometric Auth",
              desc: "Seamless and secure access integrating directly with your device's FaceID or Fingerprint sensor.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="space-y-4 hover:bg-white/20 p-6 rounded-2xl transition-colors border border-transparent hover:border-white/5"
            >
              <div className="bg-emerald-500/10 w-14 h-14 rounded-2xl flex items-center justify-center border border-emerald-500/20">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-zinc-500 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-white/5">
        <p className="text-zinc-600 text-xs tracking-widest uppercase font-mono">
          © {new Date().getFullYear()} VaultX Core. Open Source Software.
        </p>
      </footer>
    </div>
  );
}

// Componente SVG puro para Github
function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4" />
    </svg>
  );
}
