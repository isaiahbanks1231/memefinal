'use client'

import { motion } from 'framer-motion'
import {
  GraduationCap,
  Shield,
  BookOpen,
  Users,
  ArrowRight,
  Star,
  ChevronDown,
  Wallet,
  AlertTriangle,
  Lock,
  MessageCircle,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import Image from 'next/image'

// Navigation
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-strong py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>

          <span className="text-xl font-bold text-white">
            Meme<span className="text-violet-400">Academy</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {['Learn', 'Safety', 'Community', 'FAQ'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://t.me/cryptovicfeed?text=MEMEACADEMY"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-4 py-2 rounded-xl glass text-sm text-white hover:bg-white/10 transition-colors">
              Message Us
            </button>
          </a>

          <a
            href="https://t.me/memecoinbootcamp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-4 py-2 rounded-xl bg-primary text-white text-sm hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(139,92,246,0.5)]">
              Get Free Course
            </button>
          </a>
        </div>
      </div>
    </motion.header>
  )
}

// Aurora Background
function AuroraBackground() {
  return (
    <div className="aurora-bg">
      <motion.div
        className="aurora-blob aurora-blob-1"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      <motion.div
        className="aurora-blob aurora-blob-2"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, delay: 2 }}
      />

      <motion.div
        className="aurora-blob aurora-blob-3"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 18, repeat: Infinity, delay: 4 }}
      />

      <div className="noise" />
    </div>
  )
}

// Hero Section
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

          <span className="text-sm text-white/80">
            100% Free Beginner Education
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
        >
          <span className="text-gradient">Learn How Memecoins</span>
          <br />
          <span className="text-white/90">Actually Work</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg sm:text-xl text-white/60 mb-6 max-w-2xl mx-auto"
        >
          Learn cryptocurrency fundamentals, wallet security, token research,
          risk management, Axiom setup, and how to recognize common scams.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="text-sm sm:text-base text-white/50 mb-10 max-w-3xl mx-auto"
        >
          No payment required. No wallet connection. No hidden upsells. Just
          free beginner education.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://t.me/memecoinbootcamp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-4 rounded-xl bg-primary text-white font-medium flex items-center gap-2 shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:shadow-[0_0_30px_rgba(139,92,246,0.7)] transition-all">
              Get the Free Course
              <ArrowRight className="w-4 h-4" />
            </button>
          </a>

          <a href="#learn">
            <button className="px-8 py-4 rounded-xl glass text-white font-medium hover:bg-white/10 transition-colors">
              View Curriculum
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

// Logo Marquee
function LogoMarquee() {
  const partners = [
    { name: 'MetaMask', logo: '/logos/metamask.png' },
    { name: 'Phantom', logo: '/logos/phantom.png' },
    { name: 'Coinbase Wallet', logo: '/logos/coinbase.png' },
    { name: 'Ledger', logo: '/logos/ledger.png' },
    { name: 'Rainbow', logo: '/logos/rainbow.png' },
    { name: 'Trust Wallet', logo: '/logos/trustwallet.png' },
  ]

  return (
    <section className="py-20 border-y border-white/5 overflow-hidden">
      <p className="text-center text-sm text-white/40 uppercase tracking-widest mb-12">
        Learn about popular crypto wallets
      </p>

      <div className="flex overflow-hidden">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex gap-16 items-center shrink-0"
        >
          {[...partners, ...partners].map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="flex items-center gap-3 px-6 py-3 rounded-xl glass opacity-80 hover:opacity-100 transition-all"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={34}
                height={34}
                className="rounded-lg grayscale hover:grayscale-0 transition-all"
              />

              <span className="text-white/70 font-medium whitespace-nowrap">
                {partner.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Course Features
function BentoGrid() {
  const features = [
    {
      icon: Wallet,
      title: 'Wallet Basics',
      desc: 'Set up, secure, and manage your crypto wallet. Understand seed phrases and private keys.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Shield,
      title: 'Security First',
      desc: 'Learn practical security measures, including two-factor authentication and wallet protection.',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: AlertTriangle,
      title: 'Spot Scams',
      desc: 'Identify common warning signs, rug pulls, impersonators, and suspicious crypto projects.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: BookOpen,
      title: 'Tokenomics 101',
      desc: 'Understand supply, demand, liquidity, holder distribution, and basic project research.',
      color: 'from-violet-500 to-purple-500',
    },
    {
      icon: Lock,
      title: 'Risk Management',
      desc: 'Understand position sizing, risk limits, and why you should never risk money you cannot afford to lose.',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: Users,
      title: 'Community Support',
      desc: 'Join our Telegram community for beginner education, discussions, updates, and support.',
      color: 'from-amber-500 to-yellow-500',
    },
  ]

  return (
    <section id="learn" className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Everything You Need to{' '}
            <span className="text-gradient-primary">Get Started</span>
          </h2>

          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            A structured learning path designed to help complete beginners
            understand memecoins, tools, security, and research.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              whileHover={{ y: -5 }}
              className="group glass rounded-3xl p-8"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>

              <p className="text-white/60">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Trust Benefits
function Stats() {
  const benefits = [
    {
      value: '100%',
      label: 'Completely Free',
    },
    {
      value: 'No',
      label: 'Payment Required',
    },
    {
      value: 'No',
      label: 'Wallet Connection',
    },
    {
      value: 'Anytime',
      label: 'Free to Leave',
    },
  ]

  return (
    <section id="safety" className="py-20 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Learn Without the Pressure
          </h2>

          <p className="text-white/60 max-w-2xl mx-auto">
            Explore the course at your own pace without payments, wallet
            connections, hidden charges, or long-term commitments.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.label}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">
                {benefit.value}
              </div>

              <div className="text-sm text-white/60 uppercase tracking-wider">
                {benefit.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// What Learners Can Expect
function Testimonials() {
  const expectations = [
    {
      title: 'Understand the Basics',
      text: 'Learn how wallets, blockchains, liquidity, token supply, and memecoin markets work in beginner-friendly language.',
      role: 'Beginner Foundation',
      initial: 'B',
    },
    {
      title: 'Research More Carefully',
      text: 'Learn what to examine before interacting with a token, including common warning signs and useful research tools.',
      role: 'Research Skills',
      initial: 'R',
    },
    {
      title: 'Protect Yourself',
      text: 'Understand wallet safety, seed phrases, private keys, impersonation scams, and other risks beginners frequently face.',
      role: 'Security Awareness',
      initial: 'S',
    },
  ]

  return (
    <section id="community" className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            What You Can{' '}
            <span className="text-gradient-primary">Expect to Learn</span>
          </h2>

          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Practical beginner education focused on understanding risk,
            improving research, and staying safer in the memecoin market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {expectations.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -5 }}
              className="glass rounded-3xl p-8"
            >
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">
                {item.title}
              </h3>

              <p className="text-white/70 mb-6">{item.text}</p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-bold">
                  {item.initial}
                </div>

                <div>
                  <div className="font-medium text-white">MemeAcademy</div>

                  <div className="text-sm text-white/50">{item.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// FAQ
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const items = [
    {
      q: 'Is MemeAcademy really free?',
      a: 'Yes. The beginner course and community resources are completely free. No payment or wallet connection is required.',
    },
    {
      q: 'Do you provide financial advice?',
      a: 'No. MemeAcademy is strictly educational. We do not guarantee results or recommend that you purchase any specific cryptocurrency.',
    },
    {
      q: 'What makes memecoins risky?',
      a: 'Memecoins can be extremely volatile and speculative. Prices can fall quickly, liquidity may be limited, and scams are common.',
    },
    {
      q: 'How do I spot scams?',
      a: 'The course covers warning signs such as suspicious links, impersonators, requests for seed phrases, unrealistic promises, and questionable token activity.',
    },
    {
      q: 'How do I access the course?',
      a: 'Join the Telegram channel, message the word MEMEACADEMY using the official contact provided, and follow the registration instructions.',
    },
  ]

  return (
    <section id="faq" className="py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Frequently Asked{' '}
            <span className="text-gradient-primary">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {items.map((item, i) => (
            <div
              key={item.q}
              className={`rounded-2xl border border-white/10 overflow-hidden ${
                openIndex === i ? 'bg-white/[0.05]' : 'bg-white/[0.02]'
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-medium text-white/90">
                  {item.q}
                </span>

                <ChevronDown
                  className={`w-5 h-5 text-white/50 transition-transform ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === i && (
                <div className="px-6 pb-6 text-white/60">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Final CTA
function JoinCTA() {
  return (
    <section className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="glass rounded-[32px] p-10 md:p-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center rounded-full bg-violet-500/10 border border-violet-500/20 px-4 py-2 mb-6">
                <span className="text-violet-300 text-sm font-medium">
                  Join 100% Free
                </span>
              </div>

              <h2 className="text-5xl font-bold text-white mb-6">
                Start Learning
                <br />
                <span className="text-gradient">Today</span>
              </h2>

              <p className="text-white/60 text-lg mb-6">
                Join the Telegram community and get access to beginner lessons,
                wallet guides, Axiom tutorials, research tools, scam prevention,
                and educational content.
              </p>

              <div className="space-y-3 mb-8 text-white/70">
                <p>
                  <span className="text-violet-300 font-semibold">1.</span>{' '}
                  Join the Telegram channel.
                </p>

                <p>
                  <span className="text-violet-300 font-semibold">2.</span>{' '}
                  Message the word{' '}
                  <span className="font-bold text-white">MEMEACADEMY</span>.
                </p>

                <p>
                  <span className="text-violet-300 font-semibold">3.</span>{' '}
                  Complete your registration and receive the course information
                  and tools.
                </p>
              </div>

              <p className="text-sm text-white/50 mb-8">
                No payment required. No wallet connection. No hidden upsells.
                You are free to leave anytime.
              </p>

              <a
                href="https://t.me/memecoinbootcamp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-8 py-4 rounded-xl bg-primary text-white font-semibold shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:shadow-[0_0_30px_rgba(139,92,246,0.7)] transition-all">
                  Get the Free Beginner Course
                </button>
              </a>
            </div>

            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <Image
                  src="/qrcode.png"
                  alt="Scan to join the MemeAcademy Telegram community"
                  width={320}
                  height={320}
                  className="rounded-3xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>

            <span className="text-xl font-bold text-white">
              Meme<span className="text-violet-400">Academy</span>
            </span>
          </div>

          <div className="flex gap-4">
            <a
              href="https://t.me/memecoinbootcamp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join MemeAcademy on Telegram"
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 hover:text-white"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>

        <p className="text-xs text-white/40 text-center max-w-3xl mx-auto">
          Disclaimer: MemeAcademy is for educational purposes only. We do not
          provide financial advice or guarantee financial results.
          Cryptocurrency and memecoin activity carries substantial risk of
          loss. Never share your private keys, seed phrase, or recovery phrase
          with anyone.
        </p>

        <p className="text-sm text-white/40 text-center mt-8">
          © 2026 MemeAcademy. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

// Floating Telegram Button
function FloatingTelegram() {
  return (
    <a
      href="https://t.me/memecoinbootcamp"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Join MemeAcademy Telegram"
      className="fixed bottom-8 right-8 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-[#229ED9]/30 animate-ping" />

      <motion.div
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <Image
          src="/logos/telegram.png"
          alt="Telegram"
          width={60}
          height={60}
        />
      </motion.div>

      <span className="absolute right-20 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition bg-black/80 text-white text-sm px-3 py-2 rounded-xl whitespace-nowrap">
        Get the Free Course
      </span>
    </a>
  )
}

// Main Page
export default function Home() {
  return (
    <main className="relative">
      <AuroraBackground />
      <Navbar />
      <Hero />
      <LogoMarquee />
      <BentoGrid />
      <Stats />
      <Testimonials />
      <FAQ />
      <JoinCTA />
      <Footer />
      <FloatingTelegram />
    </main>
  )
}