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
  Sun
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { useCardGradient } from "@/hooks/useCardGradient";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { use3DTilt } from "@/hooks/use3DTilt";
import ContactForm from "@/components/ContactForm";

const experiences = [
  {
    title: "Document Control Lead",
    company: "KOLIN Construction",
    period: "06/2024 - Present",
    location: "Sitalchay, Azerbaijan",
    website: "kolin.com.tr",
    highlights: [
      "Architected and managed complete document lifecycle (creation, review, approval, distribution, archiving) in line with FIDIC-based requirements",
      "Directed full control over all outgoing and incoming documentation (TRN, LET, STQ, MAR, MIR, ITP, SHD, MOM, DR, NCR)",
      "Led MDR governance, enforcing strict numbering, revision, and metadata protocols across all disciplines",
      "Designed and implemented structured server architecture for 5+ engineering disciplines and 20+ subcontractors",
      "Developed automation tools (PowerShell/Python) reducing manual processing time by over 60%"
    ]
  },
  {
    title: "Document Controller",
    company: "KOLIN Construction",
    period: "04/2021 - 06/2024",
    location: "Kalbajar, Azerbaijan",
    website: "kolin.com.tr",
    highlights: [
      "Controlled all incoming/outgoing project documentation across civil, mechanical, electrical disciplines",
      "Maintained MDR ensuring continuous accuracy, revision integrity, and audit readiness",
      "Ensured compliance with document numbering, revision control, and metadata rules",
      "Monitored EDMS workflows and email-based routing systems"
    ]
  },
  {
    title: "IT Specialist",
    company: "Clopos POS",
    period: "06/2018 - 02/2021",
    location: "Baku, Azerbaijan",
    website: "clopos.com",
    highlights: [
      "Provided technical support for POS system operations across multiple restaurant clients",
      "Installed and configured servers, networks, routers, switches, and UniFi access points",
      "Maintained and repaired hardware systems (SSD, HDD, RAM, CPU)",
      "Performed OS installation, printer configuration, and general IT support"
    ]
  }
];

const skills = {
  "Document Control & Governance": [
    "Document Control Governance",
    "Documentation Management",
    "Document Control Lifecycle (End-to-End)",
    "Revision Control & Compliance",
    "Team Leadership & Training"
  ],
  "EDMS Expertise": [
    "EDMS Administration (Aconex, SharePoint, FileOrbis)",
    "Workflow Design & Optimization",
    "Metadata Structuring & Numbering Systems",
    "MDR & DDM Management",
    "Permission & Access Control"
  ],
  "Automation & Tools": [
    "Python Automation (DCC scripts)",
    "PowerShell Automation",
    "Advanced Excel (Dashboards, Trackers, PivotTables)",
    "PDF Tools (Markups, Stamps, Merging)"
  ],
  "Quality & Compliance": [
    "Audit Preparation & Document Integrity",
    "Controlled Document Distribution",
    "Risk Identification in Document Flow"
  ],
  "Reporting & Communication": [
    "KPI Reporting & Analytics"
  ]
};

const education = [
  {
    degree: "Master's Degree",
    field: "Hotel Management",
    institution: "Baku State University",
    period: "09/2021 - 06/2023"
  },
  {
    degree: "Bachelor's Degree",
    field: "Business Management",
    institution: "Baku State University",
    period: "09/2017 - 06/2021"
  }
];

const languages = [
  { name: "English", level: "Upper-Intermediate" },
  { name: "Russian", level: "Intermediate" }
];

// Experience Card Component with Gradient
function ExperienceCard({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  const gradientRef = useCardGradient();
  const { cardRef: tiltRef, tilt, isMobile, isHovering } = use3DTilt();
  
  return (
    <div 
      ref={tiltRef}
      className="relative rounded-lg overflow-hidden transition-all duration-300"
      style={!isMobile ? {
        perspective: '1000px',
        transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      } : {}}
    >
      <div
        className="absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${tilt.glowX}% ${tilt.glowY}%, rgba(0, 200, 200, ${0.3 * tilt.intensity}) 0%, rgba(0, 150, 150, ${0.15 * tilt.intensity}) 25%, transparent 60%)`,
          filter: 'blur(25px)',
          opacity: isHovering ? 1 : 0,
          transition: 'opacity 0.3s ease-out',
        }}
      />
      <Card className="overflow-hidden border-l-4 border-l-primary transition-all duration-300 relative z-10"
        style={!isMobile ? {
          boxShadow: `0 ${8 + tilt.intensity * 12}px ${20 + tilt.intensity * 20}px rgba(0, 200, 200, ${0.15 + tilt.intensity * 0.15})`,
          transition: 'box-shadow 0.15s ease-out',
        } : {}}
      >
        <CardContent className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">{exp.title}</h3>
              <div className="flex flex-wrap items-center gap-3 text-muted-foreground">
                <span className="font-semibold text-foreground">{exp.company}</span>
                <span>•</span>
                <span>{exp.location}</span>
                {exp.website && (
                  <>
                    <span>•</span>
                    <a href={`https://${exp.website}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      {exp.website}
                    </a>
                  </>
                )}
              </div>
            </div>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium whitespace-nowrap">
              {exp.period}
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

// Skill Card Component with Gradient
function SkillCard({ category, items, index }: { category: string; items: string[]; index: number }) {
  const gradientRef = useCardGradient();
  const { cardRef: tiltRef, tilt, isMobile, isHovering } = use3DTilt();
  const icons = [FileText, Database, Code, Shield, BarChart3];
  const Icon = icons[index % icons.length];
  
  return (
    <div 
      ref={tiltRef}
      className="relative rounded-lg overflow-hidden transition-all duration-300 h-full"
      style={!isMobile ? {
        perspective: '1000px',
        transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      } : {}}
    >
      <div
        className="absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${tilt.glowX}% ${tilt.glowY}%, rgba(0, 200, 200, ${0.3 * tilt.intensity}) 0%, rgba(0, 150, 150, ${0.15 * tilt.intensity}) 25%, transparent 60%)`,
          filter: 'blur(25px)',
          opacity: isHovering ? 1 : 0,
          transition: 'opacity 0.3s ease-out',
        }}
      />
      <Card className="transition-all duration-300 relative z-10 h-full flex flex-col"
        style={!isMobile ? {
          boxShadow: `0 ${8 + tilt.intensity * 12}px ${20 + tilt.intensity * 20}px rgba(0, 200, 200, ${0.15 + tilt.intensity * 0.15})`,
          transition: 'box-shadow 0.15s ease-out',
        } : {}}
      >
        <CardContent className="p-6 flex flex-col h-full">
          <div className="flex items-center gap-3 mb-4 flex-shrink-0">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-bold text-lg line-clamp-2">{category}</h3>
          </div>
          <ul className="space-y-2 flex-1 overflow-y-auto">
            {items.map((skill, sIndex) => (
              <li key={sIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
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
function EducationCard({ edu, index }: { edu: typeof education[0]; index: number }) {
  const gradientRef = useCardGradient();
  const { cardRef: tiltRef, tilt, isMobile, isHovering } = use3DTilt();
  
  return (
    <div 
      ref={tiltRef}
      className="relative rounded-lg overflow-hidden transition-all duration-300 h-full"
      style={!isMobile ? {
        perspective: '1000px',
        transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      } : {}}
    >
      <div
        className="absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${tilt.glowX}% ${tilt.glowY}%, rgba(0, 200, 200, ${0.3 * tilt.intensity}) 0%, rgba(0, 150, 150, ${0.15 * tilt.intensity}) 25%, transparent 60%)`,
          filter: 'blur(25px)',
          opacity: isHovering ? 1 : 0,
          transition: 'opacity 0.3s ease-out',
        }}
      />
      <Card className="transition-all duration-300 relative z-10 h-full flex flex-col"
        style={!isMobile ? {
          boxShadow: `0 ${8 + tilt.intensity * 12}px ${20 + tilt.intensity * 20}px rgba(0, 200, 200, ${0.15 + tilt.intensity * 0.15})`,
          transition: 'box-shadow 0.15s ease-out',
        } : {}}
      >
        <CardContent className="p-6 flex flex-col h-full">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 flex-1">
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-1 line-clamp-2">{edu.degree}</h3>
              <p className="text-primary font-medium mb-2">{edu.field}</p>
              <p className="text-muted-foreground text-sm">{edu.institution}</p>
            </div>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs sm:text-sm font-medium whitespace-nowrap flex-shrink-0">
              {edu.period}
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
  const activeSection = useScrollSpy(['about', 'experience', 'skills', 'education', 'contact']);
  const scrollToSection = useSmoothScroll();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-300 ease-out ${
          navbarVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div className="container flex items-center justify-between h-16">
          <img 
            src="/avatar.png" 
            alt="Huseyn Cavid" 
            className="w-10 h-10 rounded-full object-cover border border-primary/20 shadow-sm"
          />
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`text-sm font-medium transition-colors relative cursor-pointer ${
                  activeSection === link.id
                    ? 'text-primary font-semibold'
                    : 'text-muted-foreground hover:text-foreground'
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
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-muted-foreground" />
              ) : (
                <Moon className="h-5 w-5 text-muted-foreground" />
              )}
            </button>
            <a href="mailto:huseyn.cavid.dev@gmail.com">
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                Get in Touch
              </Button>
            </a>
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
              Available for opportunities
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-2 leading-[1.1]">
              Huseyn Cavid
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground font-medium mb-6 italic">
              Building Compliant, Scalable Document Control Ecosystems
            </p>
            
            <h2 className="text-2xl md:text-3xl text-primary font-semibold mb-6">
              Document Controller Lead
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
              Document Control Lead with a proven track record of building fast, scalable, and fully compliant 
              document control ecosystems for large-scale construction and industrial projects. Expert in EDMS 
              administration, lifecycle governance, and workflow automation using PowerShell and Python.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <a href="mailto:huseyn.cavid.dev@gmail.com" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-5 w-5" />
                <span>huseyn.cavid.dev@gmail.com</span>
              </a>
              <a href="tel:+994993442414" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="h-5 w-5" />
                <span>+994 99 344 24 14</span>
              </a>
              <span className="inline-flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                <span>Azerbaijan, Baku</span>
              </span>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a href="/Huseyn-Cavid-Resume.docx" download onClick={(e) => e.stopPropagation()}>
                <Button size="lg" className="bg-primary hover:bg-primary/90 gap-2">
                  <FileText className="h-5 w-5" />
                  Download CV
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/huseyncavid" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="gap-2">
                  <Linkedin className="h-5 w-5" />
                  Connect on LinkedIn
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </a>
              <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>
                <Button size="lg" variant="outline" className="gap-2">
                  <Mail className="h-5 w-5" />
                  Send Message
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
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">About Me</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a Document Control Lead with extensive experience in managing document control ecosystems 
              for large-scale construction projects. My expertise lies in EDMS administration, lifecycle governance, 
              revision control, and stakeholder coordination across Contractor–Engineer–Employer environments. 
              I am highly skilled in workflow automation using PowerShell and Python, having reduced manual workloads 
              by 60%+ and transformed document turnaround speed and accuracy. Known for strong operational discipline, 
              precision, and a process-driven mindset, ensuring zero deviation from FIDIC, project procedures, and QA/QC requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24">
        <div className="container">
          <div className="flex items-center gap-3 mb-12">
            <Building2 className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-display font-bold">Experience</h2>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-muted/30">
        <div className="container">
          <div className="flex items-center gap-3 mb-12">
            <Code className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-display font-bold">Core Competencies</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {Object.entries(skills).map(([category, items], index) => (
              <SkillCard key={category} category={category} items={items} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24">
        <div className="container">
          <div className="flex items-center gap-3 mb-12">
            <GraduationCap className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-display font-bold">Education</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 auto-rows-fr">
            {education.map((edu, index) => (
              <EducationCard key={index} edu={edu} index={index} />
            ))}
          </div>
          
          {/* Languages */}
          <div className="flex items-center gap-3 mb-6">
            <Languages className="h-6 w-6 text-primary" />
            <h3 className="text-xl font-bold">Languages</h3>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {languages.map((lang, index) => (
              <div key={index} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted">
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
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">Get in Touch</h2>
            <p className="text-lg text-muted-foreground mb-12 text-center">
              Have a question or project in mind? Fill out the form below and I'll get back to you as soon as possible.
            </p>
            
            <div className="mb-12">
              <ContactForm />
            </div>

            <div className="border-t border-border pt-12">
              <h3 className="text-xl font-semibold mb-8 text-center">Or reach out directly:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a href="mailto:huseyn.cavid.dev@gmail.com" className="text-center p-6 rounded-lg border border-border hover:bg-muted transition-colors">
                  <Mail className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <p className="font-medium mb-1">Email</p>
                  <p className="text-sm text-muted-foreground break-all">huseyn.cavid.dev@gmail.com</p>
                </a>
                <a href="tel:+994993442414" className="text-center p-6 rounded-lg border border-border hover:bg-muted transition-colors">
                  <Phone className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <p className="font-medium mb-1">Phone</p>
                  <p className="text-sm text-muted-foreground">+994 99 344 24 14</p>
                </a>
                <a href="https://www.linkedin.com/in/huseyncavid" target="_blank" rel="noopener noreferrer" className="text-center p-6 rounded-lg border border-border hover:bg-muted transition-colors">
                  <Linkedin className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <p className="font-medium mb-1">LinkedIn</p>
                  <p className="text-sm text-muted-foreground">Connect with me</p>
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
            <span>© {new Date().getFullYear()} Huseyn Cavid. All rights reserved.</span>
            <span>Document Controller Lead • Azerbaijan, Baku</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
