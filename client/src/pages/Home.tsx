import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  Phone,
  Linkedin,
  MapPin,
  FileText,
  Database,
  Shield,
  Code,
  BarChart3,
  Building2,
  GraduationCap,
  Languages,
  ChevronRight,
  ExternalLink,
  Moon,
  Sun,
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { useCardGradient } from "@/hooks/useCardGradient";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { use3DTilt } from "@/hooks/use3DTilt";
import ContactForm from "@/components/ContactForm";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

// Language-agnostic data
const experienceWebsites = ["kolin.com.tr", "kolin.com.tr", "clopos.com"];

const educationPeriods = ["09/2021 - 06/2023", "09/2017 - 06/2021"];

// Competency keys for iteration
const competencyKeys = [
  "documentControl",
  "edms",
  "automation",
  "quality",
  "reporting",
] as const;

// Experience Card Component with Gradient
function ExperienceCard({
  exp,
  index,
  period,
  website,
}: {
  exp: {
    title: string;
    company: string;
    location: string;
    highlights: string[];
  };
  index: number;
  period: string;
  website?: string;
}) {
  const gradientRef = useCardGradient();
  const { cardRef: tiltRef, tilt, isMobile, isHovering } = use3DTilt();

  return (
    <div
      ref={tiltRef}
      className="relative rounded-lg overflow-hidden transition-all duration-300"
      style={
        !isMobile
          ? {
              perspective: "1000px",
              transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
              transformStyle: "preserve-3d",
              transition:
                "transform 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }
          : {}
      }
    >
      <div
        className="absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${tilt.glowX}% ${tilt.glowY}%, rgba(0, 200, 200, ${0.3 * tilt.intensity}) 0%, rgba(0, 150, 150, ${0.15 * tilt.intensity}) 25%, transparent 60%)`,
          filter: "blur(25px)",
          opacity: isHovering ? 1 : 0,
          transition: "opacity 0.3s ease-out",
        }}
      />
      <Card
        className="overflow-hidden border-l-4 border-l-primary transition-all duration-300 relative z-10"
        style={
          !isMobile
            ? {
                boxShadow: `0 ${8 + tilt.intensity * 12}px ${20 + tilt.intensity * 20}px rgba(0, 200, 200, ${0.15 + tilt.intensity * 0.15})`,
                transition: "box-shadow 0.15s ease-out",
              }
            : {}
        }
      >
        <CardContent className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                {exp.title}
              </h3>
              <div className="flex flex-wrap items-center gap-3 text-muted-foreground">
                <span className="font-semibold text-foreground">
                  {exp.company}
                </span>
                <span>•</span>
                <span>{exp.location}</span>
                {website && (
                  <>
                    <span>•</span>
                    <a
                      href={`https://${website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {website}
                    </a>
                  </>
                )}
              </div>
            </div>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium whitespace-nowrap">
              {period}
            </span>
          </div>

          <ul className="space-y-3">
            {exp.highlights.map((highlight, hIndex) => (
              <li key={hIndex} className="flex items-start gap-3">
                <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{highlight}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

// Skill Card Component with Premium 3D Effect
function SkillCard({
  category,
  items,
  index,
}: {
  category: string;
  items: string[];
  index: number;
}) {
  const gradientRef = useCardGradient();
  const { cardRef: tiltRef, tilt, scale, isMobile, isHovering } = use3DTilt();
  const { theme } = useTheme();
  const icons = [FileText, Database, Code, Shield, BarChart3];
  const Icon = icons[index % icons.length];

  // Theme-aware colors
  const isDark = theme === "dark";
  const glowColor = isDark
    ? `rgba(255, 255, 255, ${0.08 * tilt.intensity})`
    : `rgba(20, 184, 166, ${0.06 * tilt.intensity})`; // Teal-500

  const edgeGlowColor = isDark
    ? `rgba(255, 255, 255, 0.04)`
    : `rgba(20, 184, 166, 0.03)`;

  const borderColorRest = isDark
    ? "rgba(255, 255, 255, 0.06)"
    : "rgba(20, 184, 166, 0.08)";
  const borderColorHover = isDark
    ? "rgba(255, 255, 255, 0.12)"
    : "rgba(20, 184, 166, 0.15)";

  const bgColorRest = isDark
    ? "rgba(255, 255, 255, 0.02)"
    : "rgba(255, 255, 255, 0.7)";
  const bgColorHover = isDark
    ? "rgba(255, 255, 255, 0.04)"
    : "rgba(255, 255, 255, 0.85)";

  const shadowRest = isDark
    ? "0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 4px 8px -4px rgba(0, 0, 0, 0.2)"
    : "0 4px 12px -4px rgba(0, 0, 0, 0.08), 0 2px 6px -2px rgba(0, 0, 0, 0.05)";

  const shadowHover = isDark
    ? `0 20px 40px -15px rgba(0, 0, 0, 0.4), 0 8px 16px -8px rgba(0, 0, 0, 0.3), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)`
    : `0 16px 32px -12px rgba(20, 184, 166, 0.15), 0 8px 16px -8px rgba(0, 0, 0, 0.1), inset 0 1px 0 0 rgba(20, 184, 166, 0.08)`;

  return (
    <div
      ref={tiltRef}
      className="relative rounded-xl h-full group"
      style={
        !isMobile
          ? {
              transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(${scale})`,
              transformStyle: "preserve-3d",
              willChange: "transform",
              // @ts-ignore - CSS variables
              "--mx": `${tilt.glowX}%`,
              "--my": `${tilt.glowY}%`,
            }
          : {}
      }
    >
      <Card
        className="relative z-10 h-full flex flex-col rounded-xl border backdrop-blur-sm overflow-hidden"
        style={
          !isMobile
            ? {
                backgroundColor: isHovering ? bgColorHover : bgColorRest,
                borderColor: isHovering ? borderColorHover : borderColorRest,
                boxShadow: isHovering ? shadowHover : shadowRest,
                transition:
                  "background-color 0.3s cubic-bezier(0.23, 1, 0.32, 1), border-color 0.3s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                transform: "translateZ(40px)",
              }
            : {}
        }
      >
        {/* Cursor-following spotlight overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-50"
          style={{
            background: isDark
              ? `radial-gradient(circle 350px at var(--mx, 50%) var(--my, 50%), rgba(255, 255, 255, ${0.12 * tilt.intensity}), rgba(255, 255, 255, ${0.04 * tilt.intensity}) 40%, transparent 70%)`
              : `radial-gradient(circle 350px at var(--mx, 50%) var(--my, 50%), rgba(20, 184, 166, ${0.08 * tilt.intensity}), rgba(20, 184, 166, ${0.02 * tilt.intensity}) 40%, transparent 70%)`,
            mixBlendMode: isDark ? "overlay" : "normal",
            opacity: isHovering ? 1 : 0,
            transition: "opacity 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
          }}
        />

        {/* Subtle edge glow (static background) */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background: isDark
              ? `radial-gradient(circle 600px at var(--mx, 50%) var(--my, 50%), rgba(255, 255, 255, 0.02), transparent 60%)`
              : `radial-gradient(circle 600px at var(--mx, 50%) var(--my, 50%), rgba(20, 184, 166, 0.015), transparent 60%)`,
            opacity: isHovering ? 1 : 0,
            transition: "opacity 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
          }}
        />
        <CardContent className="p-6 flex flex-col h-full">
          <div className="flex items-center gap-3 mb-4 flex-shrink-0">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-bold text-lg line-clamp-2">{category}</h3>
          </div>
          <ul className="space-y-2 flex-1 overflow-y-auto">
            {items.map((skill, sIndex) => (
              <li
                key={sIndex}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-1"></span>
                <span className="break-words">{skill}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

// Education Card Component with Gradient
function EducationCard({
  edu,
  index,
  period,
}: {
  edu: { degree: string; field: string; institution: string };
  index: number;
  period: string;
}) {
  const gradientRef = useCardGradient();
  const { cardRef: tiltRef, tilt, isMobile, isHovering } = use3DTilt();

  return (
    <div
      ref={tiltRef}
      className="relative rounded-lg overflow-hidden transition-all duration-300 h-full"
      style={
        !isMobile
          ? {
              perspective: "1000px",
              transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
              transformStyle: "preserve-3d",
              transition:
                "transform 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }
          : {}
      }
    >
      <div
        className="absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${tilt.glowX}% ${tilt.glowY}%, rgba(0, 200, 200, ${0.3 * tilt.intensity}) 0%, rgba(0, 150, 150, ${0.15 * tilt.intensity}) 25%, transparent 60%)`,
          filter: "blur(25px)",
          opacity: isHovering ? 1 : 0,
          transition: "opacity 0.3s ease-out",
        }}
      />
      <Card
        className="transition-all duration-300 relative z-10 h-full flex flex-col"
        style={
          !isMobile
            ? {
                boxShadow: `0 ${8 + tilt.intensity * 12}px ${20 + tilt.intensity * 20}px rgba(0, 200, 200, ${0.15 + tilt.intensity * 0.15})`,
                transition: "box-shadow 0.15s ease-out",
              }
            : {}
        }
      >
        <CardContent className="p-6 flex flex-col h-full">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 flex-1">
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-1 line-clamp-2">
                {edu.degree}
              </h3>
              <p className="text-primary font-medium mb-2">{edu.field}</p>
              <p className="text-muted-foreground text-sm">{edu.institution}</p>
            </div>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs sm:text-sm font-medium whitespace-nowrap flex-shrink-0">
              {period}
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function Home() {
  const navbarVisible = useScrollDirection();
  const { theme, toggleTheme } = useTheme();
  const { t, tList, tObject } = useLanguage();
  const activeSection = useScrollSpy([
    "about",
    "experience",
    "skills",
    "education",
    "contact",
  ]);
  const scrollToSection = useSmoothScroll();

  // Get translated data
  const experiences =
    tObject<
      Array<{
        title: string;
        company: string;
        location: string;
        highlights: string[];
      }>
    >("experience.items");
  const education =
    tObject<Array<{ degree: string; field: string; institution: string }>>(
      "education.items"
    );
  const spokenLanguages = tObject<Array<{ name: string; level: string }>>(
    "spokenLanguages.items"
  );

  // Date periods with localized "Present"
  const experiencePeriods = [
    `06/2024 - ${t("common.present")}`,
    "04/2021 - 06/2024",
    "06/2018 - 02/2021",
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  const navLinks = [
    { id: "about", label: t("nav.about") },
    { id: "experience", label: t("nav.experience") },
    { id: "skills", label: t("nav.skills") },
    { id: "education", label: t("nav.education") },
    { id: "contact", label: t("nav.contact") },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-300 ease-out ${
          navbarVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="container flex items-center justify-between h-16">
          <img
            src="/avatar.png"
            alt={t("hero.altText")}
            className="w-10 h-10 rounded-full object-cover border border-primary/20 shadow-sm"
          />
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={e => handleNavClick(e, link.id)}
                className={`text-sm font-medium transition-colors relative cursor-pointer ${
                  activeSection === link.id
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"></span>
                )}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-muted-foreground" />
              ) : (
                <Moon className="h-5 w-5 text-muted-foreground" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>

        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              {t("hero.availability")}
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-2 leading-[1.1]">
              {t("hero.name")}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground font-medium mb-6 italic">
              {t("hero.tagline")}
            </p>

            <h2 className="text-2xl md:text-3xl text-primary font-semibold mb-6">
              {t("hero.role")}
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
              {t("hero.description")}
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="mailto:huseyn.cavid.dev@gmail.com"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>huseyn.cavid.dev@gmail.com</span>
              </a>
              <a
                href="tel:+994993442414"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>+994 99 344 24 14</span>
              </a>
              <span className="inline-flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                <span>{t("hero.location")}</span>
              </span>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="/Huseyn-Cavid-Resume.pdf"
                download
                onClick={e => e.stopPropagation()}
              >
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 gap-2"
                >
                  <FileText className="h-5 w-5" />
                  {t("buttons.downloadCV")}
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/huseyncavid"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="gap-2">
                  <Linkedin className="h-5 w-5" />
                  {t("buttons.connectLinkedIn")}
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </a>
              <a href="#contact" onClick={e => handleNavClick(e, "contact")}>
                <Button size="lg" variant="outline" className="gap-2">
                  <Mail className="h-5 w-5" />
                  {t("buttons.sendMessage")}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              {t("sections.about")}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("about.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24">
        <div className="container">
          <div className="flex items-center gap-3 mb-12">
            <Building2 className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              {t("sections.experience")}
            </h2>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={index}
                exp={exp}
                index={index}
                period={experiencePeriods[index]}
                website={experienceWebsites[index]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-muted/30">
        <div className="container">
          <div className="flex items-center gap-3 mb-12">
            <Code className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              {t("sections.skills")}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
            {competencyKeys.map((key, index) => {
              const title = t(`competencies.${key}.title`);
              const items = tList(`competencies.${key}.items`);
              return (
                <SkillCard
                  key={key}
                  category={title}
                  items={items}
                  index={index}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24">
        <div className="container">
          <div className="flex items-center gap-3 mb-12">
            <GraduationCap className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              {t("sections.education")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 auto-rows-fr">
            {education.map((edu, index) => (
              <EducationCard
                key={index}
                edu={edu}
                index={index}
                period={educationPeriods[index]}
              />
            ))}
          </div>

          {/* Languages */}
          <div className="flex items-center gap-3 mb-6">
            <Languages className="h-6 w-6 text-primary" />
            <h3 className="text-xl font-bold">{t("sections.languages")}</h3>
          </div>

          <div className="flex flex-wrap gap-4">
            {spokenLanguages.map((lang, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted"
              >
                <span className="font-medium">{lang.name}</span>
                <span className="text-muted-foreground">—</span>
                <span className="text-muted-foreground">{lang.level}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
              {t("contact.title")}
            </h2>
            <p className="text-lg text-muted-foreground mb-12 text-center">
              {t("contact.description")}
            </p>

            <div className="mb-12">
              <ContactForm />
            </div>

            <div className="border-t border-border pt-12">
              <h3 className="text-xl font-semibold mb-8 text-center">
                {t("contact.reachOut")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a
                  href="mailto:huseyn.cavid.dev@gmail.com"
                  className="text-center p-6 rounded-lg border border-border hover:bg-muted transition-colors"
                >
                  <Mail className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <p className="font-medium mb-1">
                    {t("contact.cards.email.label")}
                  </p>
                  <p className="text-sm text-muted-foreground break-all">
                    huseyn.cavid.dev@gmail.com
                  </p>
                </a>
                <a
                  href="tel:+994993442414"
                  className="text-center p-6 rounded-lg border border-border hover:bg-muted transition-colors"
                >
                  <Phone className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <p className="font-medium mb-1">
                    {t("contact.cards.phone.label")}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    +994 99 344 24 14
                  </p>
                </a>
                <a
                  href="https://www.linkedin.com/in/huseyncavid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center p-6 rounded-lg border border-border hover:bg-muted transition-colors"
                >
                  <Linkedin className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <p className="font-medium mb-1">
                    {t("contact.cards.linkedin.label")}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {t("contact.cards.linkedin.subtitle")}
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <span>
              © {new Date().getFullYear()} {t("hero.name")}.{" "}
              {t("footer.copyright")}.
            </span>
            <span>{t("footer.tagline")}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
