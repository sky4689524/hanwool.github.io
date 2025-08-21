"use client";

import { useState } from "react";
import Image from "next/image";
import { Inter, Noto_Sans_KR } from "next/font/google";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  GlobalStyles,
  AppBar,
  Toolbar,
  Container,
  Box,
  Button,
  Chip,
  Typography,
  Stack,
  Grid,
  Card,
  CardContent,
  Link as MUILink,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { alpha } from "@mui/material/styles";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const noto = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-noto",
});

export default function Page() {
  const [lang, setLang] = useState("ko");

  const t =
    {
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
        subtitle:
          "Discover Your Dating Style – Teto vs Egen in Just 12 Questions",
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

  // MUI theme: hard-force black bg + white text everywhere
  const theme = createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "#000000",
        paper: "#0a0a0b",
      },
      text: {
        primary: "#ffffff",
        secondary: "#ffffff",
      },
      primary: {
        main: "#ffffff", // we’ll style buttons via sx for gradients, but text remains white
      },
    },
    typography: {
      allVariants: {
        color: "#ffffff",
      },
      fontFamily: `${noto.style.fontFamily}, ${inter.style.fontFamily}, system-ui, -apple-system, Segoe UI, Roboto, sans-serif`,
    },
    components: {
      MuiLink: {
        styleOverrides: {
          root: {
            color: "#ffffff",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            color: "#ffffff",
            textTransform: "none",
            borderRadius: 16,
            fontWeight: 700,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            color: "#ffffff",
          },
        },
      },
    },
  });

  const panel = alpha("#ffffff", 0.06);
  const panelStrong = alpha("#ffffff", 0.12);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Make sure the entire app is pitch black and text is white */}
      <GlobalStyles
        styles={{
          "html, body, #__next": {
            background: "#000000 !important",
            color: "#ffffff !important",
            minHeight: "100%",
          },
          a: { color: "#ffffff" },
        }}
      />

      <Box
        className={`page ${inter.variable} ${noto.variable}`}
        sx={{
          minHeight: "100dvh",
          display: "flex",
          flexDirection: "column",
          // Subtle gradients on black (kept, but text remains white)
          backgroundColor: "#000",
          backgroundImage: `
            radial-gradient(1200px 700px at 20% -10%, ${alpha("#4287f5", 0.15)}, transparent 60%),
            radial-gradient(1200px 700px at 120% 10%, ${alpha("#ff69b4", 0.16)}, transparent 60%),
            linear-gradient(180deg, #09090b, #0a0a0b)
          `,
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Top bar */}
        <AppBar
          position="static"
          elevation={0}
          sx={{ background: "transparent", borderBottom: `1px solid ${panelStrong}` }}
        >
          <Toolbar
            sx={{
              px: { xs: 2, sm: 4, md: 5 },
              py: 1.5,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Stack direction="row" spacing={1.25} alignItems="center">
              <Box
                aria-hidden
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, rgba(255,105,180,1), rgba(66,135,245,1))",
                }}
              />
              <Typography variant="h6" fontWeight={700}>
                {t.appname}
              </Typography>
            </Stack>

            <Stack direction="row" spacing={1.25} alignItems="center">
              <Button
                variant="outlined"
                aria-pressed={lang === "ko"}
                onClick={() => setLang("ko")}
                sx={{
                  borderColor: panelStrong,
                  backgroundColor: lang === "ko" ? alpha("#4287f5", 0.25) : panel,
                  "&:hover": { borderColor: panelStrong, backgroundColor: panel },
                  borderRadius: "999px",
                  px: 1.5,
                  py: 0.75,
                }}
              >
                KO
              </Button>
              <Button
                variant="outlined"
                aria-pressed={lang === "en"}
                onClick={() => setLang("en")}
                sx={{
                  borderColor: panelStrong,
                  backgroundColor: lang === "en" ? alpha("#4287f5", 0.25) : panel,
                  "&:hover": { borderColor: panelStrong, backgroundColor: panel },
                  borderRadius: "999px",
                  px: 1.5,
                  py: 0.75,
                }}
              >
                EN
              </Button>
              <Button
                component={MUILink}
                href={APP_STORE_HREF}
                target="_blank"
                rel="noreferrer"
                variant="outlined"
                sx={{
                  borderColor: panelStrong,
                  backgroundColor: panel,
                  backdropFilter: "blur(8px)",
                  borderRadius: "999px",
                  px: 1.75,
                  py: 1,
                  textDecoration: "none",
                }}
              >
                {t.ctaSecondary}
              </Button>
            </Stack>
          </Toolbar>
        </AppBar>

        {/* Hero */}
        <Container
          maxWidth="lg"
          sx={{
            py: { xs: 3, sm: 6, md: 8 },
            flexGrow: 1,
          }}
        >
          <Grid
            container
            spacing={{ xs: 3, md: 6 }}
            alignItems="center"
            sx={{ mb: { xs: 6, md: 12 } }}
          >
            {/* Copy */}
            <Grid item xs={12} md={7}>
              <Stack spacing={2}>
                <Chip
                  label={t.badge}
                  variant="outlined"
                  sx={{
                    alignSelf: "flex-start",
                    borderColor: panelStrong,
                    backgroundColor: panel,
                    color: "#ffffff",
                    borderRadius: "999px",
                  }}
                />

                <Box component="h1" sx={{ m: 0, lineHeight: 1.05 }}>
                  <Typography
                    component="span"
                    sx={{
                      display: "block",
                      color: alpha("#ffffff", 0.8),
                      fontWeight: 600,
                      letterSpacing: "-0.02em",
                      fontSize: { xs: 28, sm: 36, md: 40 },
                    }}
                  >
                    {t.titleTop}
                  </Typography>
                  <Typography
                    component="span"
                    sx={{
                      display: "block",
                      fontWeight: 800,
                      letterSpacing: "-0.02em",
                      fontSize: { xs: 40, sm: 54, md: 60 },
                      background:
                        "linear-gradient(90deg, rgba(66,135,245,1), rgba(255,105,180,1))",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    {t.titleMain}
                  </Typography>
                </Box>

                <Typography
                  variant="subtitle1"
                  sx={{ color: alpha("#ffffff", 0.9), fontWeight: 600 }}
                >
                  {t.subtitle}
                </Typography>

                <Typography sx={{ color: alpha("#ffffff", 0.9), maxWidth: 56 * 8 }}>
                  {t.pitch}
                </Typography>

                <Stack direction="row" spacing={1.5} flexWrap="wrap">
                  <Button
                    component={MUILink}
                    href={APP_STORE_HREF}
                    target="_blank"
                    rel="noreferrer"
                    variant="outlined"
                    sx={{
                      px: 2.25,
                      py: 1.25,
                      borderRadius: 2,
                      textDecoration: "none",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.45)",
                      background:
                        "linear-gradient(135deg, rgba(66,135,245,1), rgba(255,105,180,1))",
                      "&:hover": {
                        transform: "translateY(-1px)",
                        background:
                          "linear-gradient(135deg, rgba(66,135,245,0.95), rgba(255,105,180,0.95))",
                      },
                      transition: "transform 160ms ease, background 160ms ease",
                    }}
                  >
                    {t.ctaSecondary}
                  </Button>
                </Stack>

                <Typography sx={{ color: alpha("#ffffff", 0.9), fontStyle: "italic" }}>
                  {t.hook}
                </Typography>
              </Stack>
            </Grid>

            {/* Gallery */}
            <Grid item xs={12} md={5}>
              <Box aria-label={t.galleryTitle}>
                <Box
                  sx={{
                    display: { xs: "flex", md: "none" },
                    gap: 2,
                    overflowX: "auto",
                    pb: 1,
                    scrollSnapType: "x mandatory",
                    WebkitOverflowScrolling: "touch",
                  }}
                >
                  {[1, 2, 3].map((n, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        flex: "0 0 auto",
                        width: { xs: 240, sm: 280, md: 320 },
                        borderRadius: 3.5,
                        overflow: "hidden",
                        border: `1px solid ${panelStrong}`,
                        background: "#0f1114",
                        boxShadow:
                          "0 20px 60px rgba(0,0,0,0.55), inset 0 0 0 1px rgba(255,255,255,0.02)",
                      }}
                    >
                      <Image
                        src={`/teto_egen/${n}.png`}
                        alt={t[`alt${n}`]}
                        width={320}
                        height={640}
                        priority
                        unoptimized
                        style={{ width: "100%", height: "auto", display: "block" }}
                      />
                    </Box>
                  ))}
                </Box>

                {/* Desktop fan effect */}
                <Box
                  sx={{
                    display: { xs: "none", md: "flex" },
                    justifyContent: "center",
                    alignItems: "flex-start",
                    position: "relative",
                    height: 480,
                  }}
                >
                  {/* Left */}
                  <Box
                    sx={{
                      position: "absolute",
                      left: "50%",
                      transform: "translateX(-130%) rotate(-8deg) translateY(14px)",
                      width: 320,
                      borderRadius: 3.5,
                      overflow: "hidden",
                      border: `1px solid ${panelStrong}`,
                      background: "#0f1114",
                      opacity: 0.9,
                      boxShadow:
                        "0 20px 60px rgba(0,0,0,0.55), inset 0 0 0 1px rgba(255,255,255,0.02)",
                    }}
                  >
                    <Image
                      src="/teto_egen/1.png"
                      alt={t.alt1}
                      width={320}
                      height={640}
                      priority
                      unoptimized
                      style={{ width: "100%", height: "auto", display: "block" }}
                    />
                  </Box>

                  {/* Center */}
                  <Box
                    sx={{
                      position: "absolute",
                      left: "50%",
                      transform: "translateX(-50%) translateY(-6px)",
                      width: 320,
                      borderRadius: 3.5,
                      overflow: "hidden",
                      border: `1px solid ${panelStrong}`,
                      background: "#0f1114",
                      zIndex: 2,
                      boxShadow:
                        "0 20px 60px rgba(0,0,0,0.55), inset 0 0 0 1px rgba(255,255,255,0.02)",
                    }}
                  >
                    <Image
                      src="/teto_egen/2.png"
                      alt={t.alt2}
                      width={320}
                      height={640}
                      priority
                      unoptimized
                      style={{ width: "100%", height: "auto", display: "block" }}
                    />
                  </Box>

                  {/* Right */}
                  <Box
                    sx={{
                      position: "absolute",
                      left: "50%",
                      transform: "translateX(30%) rotate(8deg) translateY(14px)",
                      width: 320,
                      borderRadius: 3.5,
                      overflow: "hidden",
                      border: `1px solid ${panelStrong}`,
                      background: "#0f1114",
                      opacity: 0.95,
                      boxShadow:
                        "0 20px 60px rgba(0,0,0,0.55), inset 0 0 0 1px rgba(255,255,255,0.02)",
                    }}
                  >
                    <Image
                      src="/teto_egen/3.png"
                      alt={t.alt3}
                      width={320}
                      height={640}
                      priority
                      unoptimized
                      style={{ width: "100%", height: "auto", display: "block" }}
                    />
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>

          {/* Features */}
          <Box component="section" sx={{ py: { xs: 4, md: 20 } }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              {t.featuresTitle}
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }}>
              {t.features.map((f, i) => (
                <Grid item xs={12} sm={6} md={3} key={i}>
                  <Card
                    variant="outlined"
                    sx={{
                      height: "100%",
                      borderColor: panelStrong,
                      background: `linear-gradient(180deg, ${panel}, ${alpha(
                        "#ffffff",
                        0.03
                      )})`,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.45)",
                    }}
                  >
                    <CardContent
                      sx={{
                        display: "grid",
                        gridTemplateColumns: "36px 1fr",
                        gap: 1.5,
                        alignItems: "start",
                        py: 2.25,
                      }}
                    >
                      <Box
                        sx={{
                          width: 36,
                          height: 36,
                          borderRadius: 1.5,
                          display: "grid",
                          placeItems: "center",
                          background:
                            "radial-gradient(circle at 30% 30%, rgba(66,135,245,.8), rgba(255,105,180,.8))",
                          color: "#0a0a0b",
                          fontWeight: 900,
                        }}
                        aria-hidden
                      >
                        <StarIcon />
                      </Box>
                      <Typography sx={{ mt: 0.5 }}>{f}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>

        {/* Footer */}
        <Box
          component="footer"
          sx={{
            borderTop: `1px solid ${panelStrong}`,
            py: 2,
            px: { xs: 2, sm: 4, md: 5 },
            background: alpha("#ffffff", 0.02),
          }}
        >

          <Typography>
            © {new Date().getFullYear()} {t.appname}
          </Typography>

        </Box>
      </Box>
    </ThemeProvider>
  );
}
