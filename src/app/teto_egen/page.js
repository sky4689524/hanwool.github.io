"use client";

import { useState } from "react";
import Image from "next/image";
import { Inter, Noto_Sans_KR } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const noto = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-noto",
});

export default function Page() {
  const [lang, setLang] = useState("ko"); // "ko" | "en"

  const t = {
    ko: {
      appname: "테토 vs 에겐",
      badge: "한국어",
      titleTop: "에겐? 테토?",
      titleMain: "나의 타입은?",
      subtitle: "12문항으로 알아보는 내 연애 성향 - 테토 vs 에겐",
      pitch:
        "재미로만 보는 테스트가 아닙니다! 당신의 성향을 정확하게 분석하고, 에겐/테토 지수를 점수로 알려드립니다. 한국에서 2025년 가장 핫한 성격 유형 테스트, 지금 바로 시작하세요!",
      featuresTitle: "특징",
      features: [
        "단 12문항, 3분이면 완료",
        "에겐/테토 성향 점수 + 분석 리포트 제공",
        "한국어 / 영어 지원",
        "결과를 친구와 쉽게 공유",
      ],
      hook: "나는 에겐일까, 테토일까? 이제 직접 확인해보세요!",
      ctaPrimary: "테스트 시작하기",
      ctaSecondary: "앱 스토어에서 보기",
      galleryTitle: "앱 미리보기",
      alt1: "성별 선택 화면",
      alt2: "질문 화면",
      alt3: "결과 화면",
    },
    en: {
      appname: "Teto vs Egen",
      badge: "English",
      titleTop: "Egen? Teto?",
      titleMain: "What’s My Type?",
      subtitle: "Discover Your Dating Style – Teto vs Egen in Just 12 Questions",
      pitch:
        "This isn't just another fun quiz! Get an accurate analysis of your personality and see your Egen/Teto score instantly. The hottest personality trend in Korea (2025) — find out where you belong!",
      featuresTitle: "Features",
      features: [
        "Just 12 questions, done in 3 minutes",
        "Detailed Egen/Teto score + analysis",
        "Available in Korean & English",
        "Easy sharing with friends",
      ],
      hook: "Am I more Egen or Teto? Find out now!",
      ctaPrimary: "Start the Test",
      ctaSecondary: "View on App Store",
      galleryTitle: "App Preview",
      alt1: "Gender selection screen",
      alt2: "Question screen",
      alt3: "Result screen",
    },
  }[lang];

  const START_TEST_HREF = "/quiz";
  const APP_STORE_HREF =
    "https://apps.apple.com/us/app/%ED%85%8C%ED%86%A0-vs-%EC%97%90%EA%B2%90/id6749515440";

  return (
    <main className={`page ${inter.variable} ${noto.variable}`}>
      {/* Top bar */}
      <header className="nav">
        <div className="brand">
          <span className="dot" aria-hidden />
          <span className="logo">{t.appname}</span>
        </div>
        <div className="actions">
          <button
            className={`lang ${lang === "ko" ? "active" : ""}`}
            onClick={() => setLang("ko")}
            aria-pressed={lang === "ko"}
          >
            KO
          </button>
          <button
            className={`lang ${lang === "en" ? "active" : ""}`}
            onClick={() => setLang("en")}
            aria-pressed={lang === "en"}
          >
            EN
          </button>
          <a className="ghost" href={APP_STORE_HREF} target="_blank" rel="noreferrer">
            {t.ctaSecondary}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="copy">
          <div className="badge">{t.badge}</div>
          <h1>
            <span className="muted">{t.titleTop}</span>
            <br />
            <span className="gradient">{t.titleMain}</span>
          </h1>
          <p className="subtitle">{t.subtitle}</p>
          <p className="pitch">{t.pitch}</p>
          <div className="ctaRow">
            <a className="primary" href={START_TEST_HREF}>
              {t.ctaPrimary}
            </a>
            <a className="secondary" href={APP_STORE_HREF} target="_blank" rel="noreferrer">
              {t.ctaSecondary}
            </a>
          </div>
          <p className="hook">{t.hook}</p>
        </div>

        {/* Gallery */}
        <div className="phoneRow" aria-label={t.galleryTitle}>
          <div className="phoneCard fan1">
            <Image
              src="/teto_egen/1.png"
              alt={t.alt1}
              width={320}
              height={640} // adjust to your real PNG height
              priority
              unoptimized
            />
          </div>
          <div className="phoneCard fan2">
            <Image
              src="/teto_egen/2.png"
              alt={t.alt2}
              width={320}
              height={640}
              priority
              unoptimized
            />
          </div>
          <div className="phoneCard fan3">
            <Image
              src="/teto_egen/3.png"
              alt={t.alt3}
              width={320}
              height={640}
              priority
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <h2>{t.featuresTitle}</h2>
        <ul className="grid">
          {t.features.map((f, i) => (
            <li key={i} className="card">
              <div className="icon" aria-hidden>
                ★
              </div>
              <p>{f}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} 테토 vs 에겐</p>
        <div className="links">
          <a href={APP_STORE_HREF} target="_blank" rel="noreferrer">
            App Store
          </a>
        </div>
      </footer>

      <style jsx>{`
        :root {
          --bg: #0a0a0b;
          --panel: rgba(255, 255, 255, 0.06);
          --panel-strong: rgba(255, 255, 255, 0.12);
          --text: #e7e7ea;
          --muted: #a3a3ad;
          --accent: 255, 105, 180;
          --accent2: 66, 135, 245;
          --radius-lg: 16px;
          --shadow: 0 10px 30px rgba(0, 0, 0, 0.45);
        }
        * {
          box-sizing: border-box;
        }
        .page {
          min-height: 100dvh;
          background: radial-gradient(
              1200px 700px at 20% -10%,
              rgba(var(--accent2), 0.15),
              transparent 60%
            ),
            radial-gradient(
              1200px 700px at 120% 10%,
              rgba(var(--accent), 0.16),
              transparent 60%
            ),
            linear-gradient(180deg, #09090b, #0a0a0b);
          color: var(--text);
          display: flex;
          flex-direction: column;
          font-family: var(--font-noto), var(--font-inter), system-ui,
            -apple-system, Segoe UI, Roboto, sans-serif;
        }
        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px clamp(16px, 4vw, 40px);
        }
        .brand {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 700;
        }
        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: linear-gradient(
            135deg,
            rgba(var(--accent), 1),
            rgba(var(--accent2), 1)
          );
        }
        .logo {
          letter-spacing: 0.4px;
        }
        .actions {
          display: flex;
          gap: 10px;
          align-items: center;
        }
        .lang {
          background: var(--panel);
          color: var(--text);
          border: 1px solid var(--panel-strong);
          padding: 8px 12px;
          border-radius: 999px;
          cursor: pointer;
          transition: 180ms ease;
        }
        .lang.active {
          background: rgba(var(--accent2), 0.25);
          border-color: rgba(var(--accent2), 0.4);
        }
        .ghost {
          padding: 9px 14px;
          border-radius: 999px;
          border: 1px solid var(--panel-strong);
          color: var(--text);
          text-decoration: none;
          backdrop-filter: blur(8px);
          background: var(--panel);
        }
        .hero {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: clamp(20px, 4vw, 56px);
          padding: clamp(24px, 5vw, 72px) clamp(16px, 5vw, 60px);
          align-items: center;
        }
        @media (max-width: 980px) {
          .hero {
            grid-template-columns: 1fr;
          }
        }
        .copy .badge {
          display: inline-block;
          padding: 6px 12px;
          border: 1px solid var(--panel-strong);
          border-radius: 999px;
          font-size: 12px;
          background: var(--panel);
          margin-bottom: 14px;
        }
        h1 {
          font-size: clamp(34px, 6vw, 60px);
          line-height: 1.05;
          margin: 0 0 12px;
          letter-spacing: -0.02em;
        }
        .muted {
          color: var(--muted);
          font-weight: 600;
        }
        .gradient {
          background: linear-gradient(
            90deg,
            rgba(var(--accent2), 1),
            rgba(var(--accent), 1)
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .subtitle {
          color: #cfcfd6;
          margin: 0 0 6px;
          font-weight: 600;
        }
        .pitch {
          color: #b8b8c2;
          margin: 8px 0 22px;
          max-width: 56ch;
        }
        .ctaRow {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin: 16px 0 6px;
        }
        .primary,
        .secondary {
          text-decoration: none;
          font-weight: 700;
          border-radius: 16px;
          padding: 12px 18px;
          display: inline-flex;
          align-items: center;
          border: 1px solid transparent;
          transition: transform 160ms ease, background 160ms ease;
        }
        .primary {
          background: linear-gradient(
            135deg,
            rgba(var(--accent2), 1),
            rgba(var(--accent), 1)
          );
          color: #0a0a0b;
          box-shadow: var(--shadow);
        }
        .primary:hover {
          transform: translateY(-1px);
        }
        .secondary {
          background: var(--panel);
          color: var(--text);
          border-color: var(--panel-strong);
          backdrop-filter: blur(6px);
        }
        .hook {
          color: #d7d7df;
          margin-top: 14px;
          font-style: italic;
        }
        /* Phone gallery */
        .phoneRow {
          display: flex;
          gap: 16px;
          overflow-x: auto;
          padding: 6px 6px 6px 0;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
        }
        .phoneCard {
          flex: 0 0 auto;
          width: clamp(240px, 32vw, 320px);
          border-radius: 28px;
          overflow: hidden;
          border: 1px solid var(--panel-strong);
          background: #0f1114;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.55),
            inset 0 0 0 1px rgba(255, 255, 255, 0.02);
        }
        .phoneCard :global(img) {
          width: 100%;
          height: auto;
          object-fit: contain;
          display: block;
        }
        /* Desktop fan effect */
        @media (min-width: 981px) {
          .phoneRow {
            overflow: visible;
            justify-content: center;
            gap: 0;
          }
          .phoneCard {
            margin: 0 -40px;
          }
          .fan1 {
            transform: rotate(-8deg) translateY(14px);
            opacity: 0.9;
          }
          .fan2 {
            transform: rotate(0deg) translateY(-6px);
            z-index: 2;
          }
          .fan3 {
            transform: rotate(8deg) translateY(14px);
            opacity: 0.95;
          }
        }
        .features {
          padding: 20px clamp(16px, 5vw, 60px) 80px;
        }
        .features h2 {
          font-size: clamp(22px, 3.5vw, 30px);
          margin: 0 0 16px;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 14px;
          list-style: none;
          padding: 0;
          margin: 0;
        }
        @media (max-width: 980px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .card {
          background: linear-gradient(180deg, var(--panel), rgba(255, 255, 255, 0.03));
          border: 1px solid var(--panel-strong);
          border-radius: var(--radius-lg);
          padding: 16px 16px 18px;
          min-height: 96px;
          display: grid;
          grid-template-columns: 36px 1fr;
          gap: 12px;
          align-items: start;
          box-shadow: var(--shadow);
        }
        .icon {
          width: 36px;
          height: 36px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          background: radial-gradient(
            circle at 30% 30%,
            rgba(var(--accent2), 0.8),
            rgba(var(--accent), 0.8)
          );
          color: #0a0a0b;
          font-weight: 900;
        }
        .card p {
          margin: 4px 0 0;
          color: #d6d6de;
        }
        .footer {
          border-top: 1px solid var(--panel-strong);
          padding: 18px clamp(16px, 5vw, 60px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: var(--muted);
          background: rgba(255, 255, 255, 0.02);
        }
        .links {
          display: flex;
          gap: 16px;
        }
        .links a {
          color: #e7e7ea;
          text-decoration: none;
        }
        .links a:hover {
          text-decoration: underline;
        }
      `}</style>
    </main>
  );
}
