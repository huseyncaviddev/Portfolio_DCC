// Production-grade translations with full type safety and array support
export type Language = "en" | "az" | "ru";

const translations = {
  en: {
    // Common
    common: {
      present: "Present",
    },

    // Navigation
    nav: {
      about: "About",
      experience: "Experience",
      skills: "Skills",
      education: "Education",
      contact: "Contact",
    },

    // Hero Section
    hero: {
      availability: "Available for opportunities",
      name: "Huseyn Cavid",
      tagline: "Building Compliant, Scalable Document Control Ecosystems",
      role: "Lead Document Controller",
      description:
        "Results-driven Lead Document Controller with 4+ years of experience managing complex document ecosystems on large-scale international engineering and construction projects. Expert in EDMS administration, FIDIC-based document workflows, MDR governance, and cross-disciplinary coordination across 20+ subcontractors. Unique advantage: hands-on automation skills (PowerShell, Python) that have reduced manual processing time by 60%+, combined with deep IT infrastructure experience. Currently driving document control excellence at Wood Energy Group.",
      location: "Azerbaijan, Baku",
      altText: "Huseyn Cavid",
    },

    // Buttons
    buttons: {
      downloadCV: "Download CV",
      connectLinkedIn: "Connect on LinkedIn",
      sendMessage: "Send Message",
    },

    // Sections
    sections: {
      about: "About Me",
      experience: "Experience",
      skills: "Core Competencies",
      education: "Education",
      languages: "Languages",
      contact: "Get in Touch",
    },

    // About
    about: {
      description:
        "I am a Lead Document Controller with 4+ years of experience managing complex document ecosystems on large-scale international engineering and construction projects. My expertise spans EDMS administration, MDR governance, FIDIC-based document workflows, QA/QC validation, and cross-disciplinary coordination across 20+ subcontractors. I am highly skilled in workflow automation using PowerShell, Python, and n8n, having reduced manual workloads by 60%+ and transformed document turnaround speed and accuracy. Currently driving document control excellence at Wood Energy Group in Baku.",
    },

    // Contact
    contact: {
      title: "Get in Touch",
      description:
        "Have a question or project in mind? Fill out the form below and I'll get back to you as soon as possible.",
      reachOut: "Or reach out directly:",
      cards: {
        email: {
          label: "Email",
        },
        phone: {
          label: "Phone",
        },
        linkedin: {
          label: "LinkedIn",
          subtitle: "Connect with me",
        },
      },
      form: {
        name: {
          label: "Full Name",
          placeholder: "Your name",
        },
        email: {
          label: "Email Address",
          placeholder: "your.email@example.com",
        },
        subject: {
          label: "Subject",
          placeholder: "What is this about?",
        },
        message: {
          label: "Message",
          placeholder: "Your message here...",
        },
        submit: "Send Message",
        sending: "Sending...",
        helperText: "I typically respond within 24 hours.",
      },
      validation: {
        nameRequired: "Please enter your name",
        emailRequired: "Please enter your email",
        emailInvalid: "Please enter a valid email address",
        subjectRequired: "Please enter a subject",
        messageRequired: "Please enter a message",
        messageMinLength: "Message must be at least 10 characters long",
      },
      success: {
        title: "Your message has been sent successfully!",
        toast: "Message sent successfully! I'll get back to you soon.",
      },
      error: {
        title: "Failed to send message. Please try again.",
        toast: "Failed to send message. Please try again or email me directly.",
      },
    },

    // Footer
    footer: {
      copyright: "All rights reserved",
      tagline: "Lead Document Controller • Azerbaijan, Baku",
    },

    // Competencies (Skills with arrays)
    competencies: {
      documentControl: {
        title: "Document Control",
        items: [
          "MDR Governance",
          "Transmittal Management",
          "Revision Control",
          "QA/QC Validation",
          "Lifecycle Management",
        ],
      },
      edms: {
        title: "EDMS & Platforms",
        items: [
          "Internal EDMS (Wood Energy)",
          "Aconex (KOLIN)",
          "SharePoint",
          "Custom EDMS Solutions",
          "FIDIC-based Workflow Management",
        ],
      },
      automation: {
        title: "Automation & Dev",
        items: [
          "PowerShell Scripting",
          "Python Automation",
          "Workflow Automation (n8n)",
          "Advanced Excel & VBA",
          "PDF Tools (Markups, Stamps, Merging)",
        ],
      },
      quality: {
        title: "IT Infrastructure",
        items: [
          "Server Configuration & Administration",
          "Network Setup (UniFi, Routers, Switches)",
          "OS Installation & Maintenance",
          "Hardware Diagnostics & Repair",
          "POS System Integration",
        ],
      },
      reporting: {
        title: "Soft Skills",
        items: [
          "Cross-functional Coordination",
          "Stakeholder Communication",
          "Executive Reporting",
          "Team Leadership & Training",
          "KPI Reporting & Analytics",
        ],
      },
    },

    // Experience
    experience: {
      items: [
        {
          title: "Lead Document Controller",
          company: "Wood Energy Group",
          location: "Baku, Azerbaijan",
          highlights: [
            "Acting as the central document control interface between Client and Contractor organisations, managing all formal technical correspondence and ensuring full traceability of document exchanges.",
            "Reviewing, validating, and processing all incoming Contractor submittals against project document control procedures, contractual requirements, and applicable engineering standards prior to Client distribution.",
            "Governing transmittal workflows end-to-end — verifying completeness, enforcing submission protocols, and maintaining auditable records of all document movements across project parties.",
            "Monitoring and controlling document review cycles, tracking response deadlines, and escalating overdue actions to ensure zero impact on project schedule.",
            "Maintaining the Master Document Register (MDR) with accurate revision status, review codes, and submission history across all engineering disciplines.",
            "Ensuring strict compliance with document numbering conventions, metadata standards, and revision control protocols on all documents entering and leaving the project EDMS.",
          ],
        },
        {
          title: "Document Control Lead",
          company: "KOLIN Construction",
          location: "Sitalchay, Azerbaijan",
          highlights: [
            "Architected and managed the complete document lifecycle (creation, review, approval, distribution, archiving) in line with project procedures and FIDIC-based requirements.",
            "Directed full control over all outgoing and incoming documentation (TRN, LET, STQ, MAR, MIR, ITP, SHD, MOM, DR, NCR), ensuring zero errors and full traceability.",
            "Led MDR governance, enforcing strict numbering, revision, and metadata protocols across all disciplines.",
            "Designed and implemented structured server architecture optimising document flow across 5+ engineering disciplines and 20+ subcontractors.",
            "Developed and deployed automation tools (PowerShell/Python) to streamline filing, naming, routing, and archiving — reducing manual processing time by over 60%.",
            "Coordinated seamless document submissions between the Contractor, Engineer (Proyapi), and Employer (STP) via EDMS and automated Outlook workflows.",
            "Performed high-precision QA/QC validation prior to official issuance, including formatting, signatures, metadata, and drawing link checks.",
            "Monitored approval cycles, outstanding actions, deadlines, and comment resolutions; prepared weekly executive-level status reports.",
            "Strengthened cross-disciplinary coordination across civil, mechanical, electrical, fit-out, HSE, QC, and procurement teams.",
          ],
        },
        {
          title: "Document Controller",
          company: "KOLIN Construction",
          location: "Kalbajar, Azerbaijan",
          highlights: [
            "Controlled all incoming/outgoing project documentation across civil, mechanical, electrical, and other engineering disciplines.",
            "Registered, verified, formatted, and prepared documents prior to official issuance; maintained MDR with continuous revision integrity.",
            "Managed technical submissions including MAR, MES, and other project deliverables; ensured proper routing and distribution to stakeholders.",
            "Monitored EDMS workflows and email-based routing systems; submitted documents for approval and tracked review outcomes.",
            "Implemented consistent digital and physical storage structures, ensuring full compliance with document numbering, revision control, and metadata rules.",
          ],
        },
        {
          title: "IT Specialist",
          company: "Clopos POS",
          location: "Baku, Azerbaijan",
          highlights: [
            "Provided technical support for POS system operations across multiple restaurant and hospitality clients.",
            "Installed and configured servers, networks, routers, switches, and UniFi access points; troubleshot connectivity issues.",
            "Maintained and repaired hardware systems (SSD, HDD, RAM, CPU); performed OS installation, printer configuration, and general IT support.",
            "Integrated diverse hardware devices into the Clopos POS ecosystem, ensuring compatibility and uninterrupted operations.",
          ],
        },
      ],
    },

    // Education
    education: {
      items: [
        {
          degree: "Master's Degree",
          field: "Hotel Management",
          institution: "Baku State University",
        },
        {
          degree: "Bachelor's Degree",
          field: "Business Management",
          institution: "Baku State University",
        },
      ],
    },

    // Spoken Languages
    spokenLanguages: {
      items: [
        { name: "Azerbaijani", level: "Native" },
        { name: "English", level: "Upper-Intermediate (B2)" },
        { name: "Russian", level: "Intermediate (B1)" },
        { name: "Turkish", level: "Professional Working Proficiency" },
        { name: "German", level: "Elementary (A2)" },
      ],
    },
  },

  az: {
    // Common
    common: {
      present: "Hazırda",
    },

    // Navigation
    nav: {
      about: "Haqqında",
      experience: "Təcrübə",
      skills: "Bacarıqlar",
      education: "Təhsil",
      contact: "Əlaqə",
    },

    // Hero Section
    hero: {
      availability: "İş təklifləri üçün açığam",
      name: "Hüseyn Cavid",
      tagline:
        "Normativ tələblərə cavab verən, ölçülə bilən sənəd idarəetmə sistemlərinin qurulması",
      role: "Baş Sənəd Nəzarətçisi",
      description:
        "Böyük miqyaslı beynəlxalq mühəndislik və tikinti layihələrində mürəkkəb sənəd ekosistemlərini idarə etmək üzrə 4+ illik təcrübəyə malik nəticəyönümlü Baş Sənəd Nəzarətçisi. EDMS idarəçiliyi, FIDIC əsaslı sənəd iş axınları, MDR idarəetməsi və 20+ subpodratçı üzrə çoxintizamlı koordinasiya sahəsində ekspert. Unikal üstünlük: əl ilə işləmə vaxtını 60%+ azaldan avtomatlaşdırma bacarıqları (PowerShell, Python) ilə birlikdə dərin İT infrastruktur təcrübəsi. Hazırda Wood Energy Group-da sənəd nəzarəti mükəmməlliyini irəli aparır.",
      location: "Azərbaycan, Bakı",
      altText: "Hüseyn Cavid",
    },

    // Buttons
    buttons: {
      downloadCV: "CV -ni Yüklə",
      connectLinkedIn: "LinkedIn-ə bağlan",
      sendMessage: "Mesaj göndər",
    },

    // Sections
    sections: {
      about: "Haqqımda",
      experience: "Təcrübə",
      skills: "Əsas Bacarıqlar",
      education: "Təhsil",
      languages: "Dillər",
      contact: "Əlaqə saxla",
    },

    // About
    about: {
      description:
        "Mən böyük miqyaslı beynəlxalq mühəndislik və tikinti layihələrində mürəkkəb sənəd ekosistemlərini idarə etmək üzrə 4+ illik təcrübəyə malik Baş Sənəd Nəzarətçisiyəm. İxtisas sahəmə EDMS idarəçiliyi, MDR idarəetməsi, FIDIC əsaslı sənəd iş axınları, QA/QC yoxlaması və 20+ subpodratçı üzrə çoxintizamlı koordinasiya daxildir. PowerShell, Python və n8n vasitəsilə iş axınlarının avtomatlaşdırılması sahəsində yüksək bacarıqlıyam, bu da əl ilə işləmə vaxtını 60%+ azaltmağa imkan verib. Hal-hazırda Bakıda Wood Energy Group-da sənəd nəzarəti mükəmməlliyini irəli aparıram.",
    },

    // Contact
    contact: {
      title: "Əlaqə saxla",
      description:
        "Sualınız və ya layihəniz varmı? Aşağıdakı formu doldurun və mümkün qədər tez cavab verəcəyəm.",
      reachOut: "Və ya birbaşa əlaqə saxlayın:",
      cards: {
        email: {
          label: "E-poçt",
        },
        phone: {
          label: "Telefon",
        },
        linkedin: {
          label: "LinkedIn",
          subtitle: "Mənimlə əlaqə saxla",
        },
      },
      form: {
        name: {
          label: "Tam ad",
          placeholder: "Adınız",
        },
        email: {
          label: "E-poçt ünvanı",
          placeholder: "sizin.email@ornek.com",
        },
        subject: {
          label: "Mövzu",
          placeholder: "Bu nə haqqındadır?",
        },
        message: {
          label: "Mesaj",
          placeholder: "Mesajınız buraya...",
        },
        submit: "Mesaj göndər",
        sending: "Göndərilir...",
        helperText: "Adətən 24 saat ərzində cavab verirəm.",
      },
      validation: {
        nameRequired: "Zəhmət olmasa adınızı daxil edin",
        emailRequired: "Zəhmət olmasa e-poçtunuzu daxil edin",
        emailInvalid: "Zəhmət olmasa düzgün e-poçt ünvanı daxil edin",
        subjectRequired: "Zəhmət olmasa mövzu daxil edin",
        messageRequired: "Zəhmət olmasa mesaj daxil edin",
        messageMinLength: "Mesaj ən azı 10 simvol olmalıdır",
      },
      success: {
        title: "Mesajınız uğurla göndərildi!",
        toast: "Mesaj uğurla göndərildi! Tezliklə sizinlə əlaqə saxlayacağam.",
      },
      error: {
        title: "Mesaj göndərilmədi. Zəhmət olmasa yenidən cəhd edin.",
        toast:
          "Mesaj göndərilmədi. Zəhmət olmasa yenidən cəhd edin və ya birbaşa e-poçt göndərin.",
      },
    },

    // Footer
    footer: {
      copyright: "Bütün hüquqlar qorunur",
      tagline: "Baş Sənəd Nəzarətçisi • Azərbaycan, Bakı",
    },

    // Competencies (Skills with arrays)
    competencies: {
      documentControl: {
        title: "Sənəd Nəzarəti",
        items: [
          "MDR İdarəetməsi",
          "Ötürmə İdarəetməsi",
          "Reviziya Nəzarəti",
          "QA/QC Yoxlaması",
          "Həyat Dövrü İdarəetməsi",
        ],
      },
      edms: {
        title: "EDMS və Platformlar",
        items: [
          "Daxili EDMS (Wood Energy)",
          "Aconex (KOLIN)",
          "SharePoint",
          "Xüsusi EDMS Həlləri",
          "FIDIC Əsaslı İş Axını İdarəetməsi",
        ],
      },
      automation: {
        title: "Avtomatlaşdırma və İnkişaf",
        items: [
          "PowerShell Skriptinq",
          "Python Avtomatlaşdırması",
          "İş Axını Avtomatlaşdırması (n8n)",
          "Qabaqcıl Excel və VBA",
          "PDF Alətləri (İşarələmə, Möhürlər, Birləşdirmə)",
        ],
      },
      quality: {
        title: "İT İnfrastrukturu",
        items: [
          "Server Konfiqurasiyası və İdarəetmə",
          "Şəbəkə Qurulumu (UniFi, Router, Switch)",
          "OS Quraşdırılması və Baxımı",
          "Avadanlıq Diaqnostikası və Təmiri",
          "POS Sistemi İnteqrasiyası",
        ],
      },
      reporting: {
        title: "Soft Bacarıqlar",
        items: [
          "Çoxfunksiyalı Koordinasiya",
          "Maraqlı Tərəflərlə Əlaqə",
          "Rəhbərliyə Hesabat",
          "Komanda Rəhbərliyi və Təlim",
          "KPI Hesabatı və Analitika",
        ],
      },
    },

    // Experience
    experience: {
      items: [
        {
          title: "Baş Sənəd Nəzarətçisi",
          company: "Wood Energy Group",
          location: "Bakı, Azərbaycan",
          highlights: [
            "Müştəri və Podratçı təşkilatları arasında mərkəzi sənəd nəzarəti interfeysi kimi fəaliyyət göstərmək, bütün rəsmi texniki yazışmaları idarə etmək və sənəd mübadiləsinin tam izlənə bilməsini təmin etmək.",
            "Rəsmi paylanmadan əvvəl bütün daxil olan Podratçı təqdimatlarını layihə sənəd nəzarəti prosedurlarına, müqavilə tələblərinə və tətbiq edilən mühəndislik standartlarına uyğun nəzərdən keçirmək, yoxlamaq və emal etmək.",
            "Ötürmə iş axınlarını başdan sona idarə etmək — tamlığı yoxlamaq, təqdimat protokollarını tətbiq etmək və layihə tərəfləri arasında bütün sənəd hərəkətlərinin auditvari qeydlərini saxlamaq.",
            "Sənəd nəzərdən keçirmə tsiklərini izləmək və nəzarət etmək, cavab müddətlərini izləmək və layihə cədvəlinə sıfır təsiri təmin etmək üçün gecikmiş hərəkətlər barədə eskalasiya etmək.",
            "Bütün mühəndislik intizamları üzrə dəqiq reviziya statusu, nəzərdən keçirmə kodları və təqdimat tarixi ilə Ana Sənəd Reyestrini (MDR) saxlamaq.",
            "Layihə EDMS-inə daxil olan və çıxan bütün sənədlərdə sənəd nömrələmə konvensiyalarına, metadata standartlarına və reviziya nəzarəti protokollarına ciddi uyğunluğu təmin etmək.",
          ],
        },
        {
          title: "Sənədləşmə Üzrə Baş Mütəxəssis",
          company: "KOLIN İnşaat",
          location: "Sitalçay, Azərbaycan",
          highlights: [
            "FIDIC əsaslı tələblərə uyğun olaraq tam sənəd həyat dövrünün (yaradılması, nəzərdən keçirilməsi, təsdiqi, paylanması, arxivləşdirilməsi) arxitekturası və idarə edilməsi.",
            "Sıfır xəta və tam izlənə bilmə ilə bütün gedən və gələn sənədlər üzərində tam nəzarət (TRN, LET, STQ, MAR, MIR, ITP, SHD, MOM, DR, NCR).",
            "Bütün disiplinlər üzrə ciddi nömrələmə, yenidən baxış və metadata protokollarının tətbiqi ilə MDR idarəetməsinin aparılması.",
            "5+ mühəndislik intizamı və 20+ subpodratçı üzrə sənəd axınını optimallaşdıran strukturlaşdırılmış server arxitekturasının dizaynı və tətbiqi.",
            "Fayl, adlandırma, marşrutlaşdırma və arxivləşdirməni sadələşdirmək üçün avtomatlaşdırma alətlərinin (PowerShell/Python) işlənib hazırlanması və tətbiqi — əl ilə işləmə vaxtını 60%-dən çox azaltmaq.",
            "EDMS və avtomatlaşdırılmış Outlook iş axınları vasitəsilə Podratçı, Mühəndis (Proyapi) və İşəgötürən (STP) arasında problemsiz sənəd təqdimatlığının koordinasiyası.",
            "Rəsmi verilişdən əvvəl yüksək dəqiqlikli QA/QC yoxlaması, o cümlədən formatlaşdırma, imzalar, metadata və çertyoj link yoxlamaları.",
            "Təsdiq tsikllərinin, gözlənilən hərəkətlərin, son tarixlərin və şərh həllərinin monitorinqi; həftəlik icraçı səviyyəli status hesabatlarının hazırlanması.",
            "Civil, mexaniki, elektrik, interyur, HSE, QC və satınalma komandaları arasında çoxintizamlı koordinasiyanın gücləndirilməsi.",
          ],
        },
        {
          title: "Sənəd Nəzarətçisi",
          company: "KOLIN İnşaat",
          location: "Kəlbəcər, Azərbaycan",
          highlights: [
            "Civil, mexaniki, elektrik və digər mühəndislik intizamları üzrə bütün gələn/gedən layihə sənədlərinə nəzarət.",
            "Rəsmi verilişdən əvvəl sənədlərin qeydiyyatı, yoxlanması, formatlanması və hazırlanması; davamlı reviziya bütövlüyü ilə MDR-in saxlanması.",
            "MAR, MES və digər layihə çatdırılacaqları daxil olmaqla texniki təqdimatlığın idarə edilməsi; maraqlı tərəflərə düzgün marşrutlaşdırma və paylanmanın təmin edilməsi.",
            "EDMS iş axınları və e-poçt əsaslı marşrutlaşdırma sistemlərinin monitorinqi; sənədlərin təsdiqlənmə üçün təqdim edilməsi və nəzərdən keçirmə nəticələrinin izlənilməsi.",
            "Ardıcıl rəqəmsal və fiziki saxlama strukturlarının tətbiqi, sənəd nömrələmə, reviziya nəzarəti və metadata qaydalarına tam uyğunluğun təmin edilməsi.",
          ],
        },
        {
          title: "IT Mütəxəssisi",
          company: "Clopos POS",
          location: "Bakı, Azərbaycan",
          highlights: [
            "Bir çox restoran və mehmanxana müştəriləri üzrə POS sistemi əməliyyatları üçün texniki dəstəyin göstərilməsi.",
            "Server, şəbəkə, router, switch və UniFi giriş nöqtələrinin quraşdırılması və konfiqurasiyası; bağlantı problemlərinin aradan qaldırılması.",
            "Avadanlıq sistemlərinin (SSD, HDD, RAM, CPU) texniki baxımı və təmiri; OS quraşdırılması, printer konfiqurasiyası və ümumi IT dəstəyi.",
            "Uyğunluq və fasiləsiz əməliyyatları təmin etmək üçün müxtəlif avadanlıq cihazlarının Clopos POS ekosisteminə inteqrasiyası.",
          ],
        },
      ],
    },

    // Education
    education: {
      items: [
        {
          degree: "Magistr Dərəcəsi",
          field: "Hotel Menecmenti",
          institution: "Bakı Dövlət Universiteti",
        },
        {
          degree: "Bakalavr Dərəcəsi",
          field: "Biznes İdarəetməsi",
          institution: "Bakı Dövlət Universiteti",
        },
      ],
    },

    // Spoken Languages
    spokenLanguages: {
      items: [
        { name: "Azərbaycan", level: "Ana dili" },
        { name: "İngilis", level: "Yuxarı-Orta (B2)" },
        { name: "Rus", level: "Orta (B1)" },
        { name: "Türk", level: "Peşəkar Səviyyə" },
        { name: "Alman", level: "Başlanğıc (A2)" },
      ],
    },
  },

  ru: {
    // Common
    common: {
      present: "По настоящее время",
    },

    // Navigation
    nav: {
      about: "О себе",
      experience: "Опыт",
      skills: "Навыки",
      education: "Образование",
      contact: "Контакты",
    },

    // Hero Section
    hero: {
      availability: "Открыт для предложений",
      name: "Гусейн Джавид",
      tagline:
        "Построение соответствующих, масштабируемых экосистем контроля документов",
      role: "Ведущий контролёр документов",
      description:
        "Целеустремлённый ведущий контролёр документов с опытом 4+ лет управления сложными экосистемами документов на крупных международных инженерных и строительных проектах. Эксперт в администрировании EDMS, рабочих процессах документов на основе FIDIC, управлении MDR и координации между дисциплинами с 20+ субподрядчиками. Уникальное преимущество: практические навыки автоматизации (PowerShell, Python), сократившие время обработки на 60%+, в сочетании с глубоким опытом ИТ-инфраструктуры. В настоящее время развивает передовые практики контроля документов в Wood Energy Group.",
      location: "Азербайджан, Баку",
      altText: "Гусейн Джавид",
    },

    // Buttons
    buttons: {
      downloadCV: "Скачать резюме",
      connectLinkedIn: "Связаться в LinkedIn",
      sendMessage: "Отправить сообщение",
    },

    // Sections
    sections: {
      about: "О себе",
      experience: "Опыт",
      skills: "Основные компетенции",
      education: "Образование",
      languages: "Языки",
      contact: "Связаться",
    },

    // About
    about: {
      description:
        "Я ведущий контролёр документов с опытом 4+ лет управления сложными экосистемами документов на крупных международных инженерных и строительных проектах. Моя экспертиза включает администрирование EDMS, управление MDR, рабочие процессы документов на основе FIDIC, валидацию QA/QC и координацию между дисциплинами с 20+ субподрядчиками. Я обладаю высокими навыками автоматизации рабочих процессов с использованием PowerShell, Python и n8n, что позволило сократить ручную нагрузку более чем на 60%. В настоящее время развиваю передовые практики контроля документов в Wood Energy Group в Баку.",
    },

    // Contact
    contact: {
      title: "Связаться",
      description:
        "Есть вопрос или проект? Заполните форму ниже, и я свяжусь с вами как можно скорее.",
      reachOut: "Или свяжитесь напрямую:",
      cards: {
        email: {
          label: "Эл. почта",
        },
        phone: {
          label: "Телефон",
        },
        linkedin: {
          label: "LinkedIn",
          subtitle: "Свяжитесь со мной",
        },
      },
      form: {
        name: {
          label: "Полное имя",
          placeholder: "Ваше имя",
        },
        email: {
          label: "Адрес электронной почты",
          placeholder: "ваш.email@пример.com",
        },
        subject: {
          label: "Тема",
          placeholder: "О чем это?",
        },
        message: {
          label: "Сообщение",
          placeholder: "Ваше сообщение здесь...",
        },
        submit: "Отправить сообщение",
        sending: "Отправка...",
        helperText: "Обычно я отвечаю в течение 24 часов.",
      },
      validation: {
        nameRequired: "Пожалуйста, введите ваше имя",
        emailRequired: "Пожалуйста, введите ваш email",
        emailInvalid:
          "Пожалуйста, введите действительный адрес электронной почты",
        subjectRequired: "Пожалуйста, введите тему",
        messageRequired: "Пожалуйста, введите сообщение",
        messageMinLength: "Сообщение должно содержать не менее 10 символов",
      },
      success: {
        title: "Ваше сообщение успешно отправлено!",
        toast:
          "Сообщение успешно отправлено! Я свяжусь с вами в ближайшее время.",
      },
      error: {
        title:
          "Не удалось отправить сообщение. Пожалуйста, попробуйте еще раз.",
        toast:
          "Не удалось отправить сообщение. Пожалуйста, попробуйте еще раз или напишите мне напрямую.",
      },
    },

    // Footer
    footer: {
      copyright: "Все права защищены",
      tagline: "Ведущий контролёр документов • Азербайджан, Баку",
    },

    // Competencies (Skills with arrays)
    competencies: {
      documentControl: {
        title: "Контроль документов",
        items: [
          "Управление MDR",
          "Управление передачами",
          "Контроль версий",
          "Валидация QA/QC",
          "Управление жизненным циклом",
        ],
      },
      edms: {
        title: "EDMS и платформы",
        items: [
          "Внутренний EDMS (Wood Energy)",
          "Aconex (KOLIN)",
          "SharePoint",
          "Пользовательские решения EDMS",
          "Управление рабочими процессами на основе FIDIC",
        ],
      },
      automation: {
        title: "Автоматизация и разработка",
        items: [
          "Скриптинг PowerShell",
          "Автоматизация Python",
          "Автоматизация рабочих процессов (n8n)",
          "Продвинутый Excel и VBA",
          "Инструменты PDF (разметка, штампы, объединение)",
        ],
      },
      quality: {
        title: "ИТ-инфраструктура",
        items: [
          "Конфигурация и администрирование серверов",
          "Настройка сети (UniFi, маршрутизаторы, коммутаторы)",
          "Установка и обслуживание ОС",
          "Диагностика и ремонт оборудования",
          "Интеграция POS-системы",
        ],
      },
      reporting: {
        title: "Гибкие навыки",
        items: [
          "Межфункциональная координация",
          "Коммуникация с заинтересованными сторонами",
          "Отчётность для руководства",
          "Руководство командой и обучение",
          "Отчётность по KPI и аналитика",
        ],
      },
    },

    // Experience
    experience: {
      items: [
        {
          title: "Ведущий контролёр документов",
          company: "Wood Energy Group",
          location: "Баку, Азербайджан",
          highlights: [
            "Выступать в качестве центрального интерфейса контроля документов между организациями Клиента и Подрядчика, управляя всей официальной технической перепиской и обеспечивая полную прослеживаемость обмена документами.",
            "Проверять, валидировать и обрабатывать все входящие заявки Подрядчика в соответствии с процедурами контроля документов проекта, договорными требованиями и применимыми инженерными стандартами до распределения Клиенту.",
            "Управлять рабочими процессами передачи от начала до конца — проверять полноту, соблюдать протоколы представления и вести аудируемые записи всех движений документов.",
            "Отслеживать и контролировать циклы проверки документов, отслеживать сроки ответов и эскалировать просроченные действия для обеспечения нулевого влияния на график проекта.",
            "Поддерживать Главный реестр документов (MDR) с точным статусом ревизий, кодами проверок и историей представления по всем инженерным дисциплинам.",
            "Обеспечивать строгое соблюдение соглашений о нумерации документов, стандартов метаданных и протоколов контроля ревизий на всех документах, входящих и выходящих из EDMS проекта.",
          ],
        },
        {
          title: "Руководитель контроля документов",
          company: "KOLIN Construction",
          location: "Ситалчай, Азербайджан",
          highlights: [
            "Разработал и управлял полным жизненным циклом документов (создание, проверка, утверждение, распространение, архивирование) в соответствии с требованиями FIDIC.",
            "Осуществлял полный контроль над всей исходящей и входящей документацией (TRN, LET, STQ, MAR, MIR, ITP, SHD, MOM, DR, NCR), обеспечивая нулевые ошибки и полную прослеживаемость.",
            "Руководил управлением MDR, обеспечивая строгие протоколы нумерации, версий и метаданных по всем дисциплинам.",
            "Разработал и внедрил структурированную архитектуру сервера, оптимизирующую документооборот для 5+ инженерных дисциплин и 20+ субподрядчиков.",
            "Разработал и развернул инструменты автоматизации (PowerShell/Python) для упорядочивания подачи, именования, маршрутизации и архивирования — сократив время ручной обработки более чем на 60%.",
            "Координировал беспрепятственную подачу документов между Подрядчиком, Инженером (Proyapi) и Работодателем (STP) через EDMS и автоматизированные рабочие процессы Outlook.",
            "Выполнял высокоточную валидацию QA/QC перед официальным выпуском, включая форматирование, подписи, метаданные и проверки ссылок на чертежи.",
            "Отслеживал циклы утверждения, незавершённые действия, сроки и разрешение комментариев; подготавливал еженедельные отчёты для руководства.",
            "Укреплял кросс-дисциплинарную координацию между гражданскими, механическими, электрическими, отделочными, HSE, QC и закупочными командами.",
          ],
        },
        {
          title: "Контролёр документов",
          company: "KOLIN Construction",
          location: "Кальбаджар, Азербайджан",
          highlights: [
            "Контролировал всю входящую/исходящую проектную документацию по гражданским, механическим, электрическим и другим инженерным дисциплинам.",
            "Регистрировал, проверял, форматировал и подготавливал документы перед официальным выпуском; поддерживал MDR с непрерывной целостностью ревизий.",
            "Управлял техническими представлениями, включая MAR, MES и другие проектные результаты; обеспечивал правильную маршрутизацию и распределение заинтересованным сторонам.",
            "Контролировал рабочие процессы EDMS и системы маршрутизации на основе электронной почты; представлял документы на утверждение и отслеживал результаты проверки.",
            "Внедрял последовательные структуры цифрового и физического хранения, обеспечивая полное соответствие правилам нумерации документов, контроля ревизий и метаданных.",
          ],
        },
        {
          title: "ИТ-специалист",
          company: "Clopos POS",
          location: "Баку, Азербайджан",
          highlights: [
            "Обеспечивал техническую поддержку POS-систем для множества ресторанов и гостиничных клиентов.",
            "Устанавливал и настраивал серверы, сети, маршрутизаторы, коммутаторы и точки доступа UniFi; устранял проблемы с подключением.",
            "Обслуживал и ремонтировал аппаратные системы (SSD, HDD, RAM, CPU); выполнял установку ОС, настройку принтеров и общую ИТ-поддержку.",
            "Интегрировал различные аппаратные устройства в экосистему Clopos POS, обеспечивая совместимость и бесперебойную работу.",
          ],
        },
      ],
    },

    // Education
    education: {
      items: [
        {
          degree: "Степень магистра",
          field: "Гостиничный менеджмент",
          institution: "Бакинский государственный университет",
        },
        {
          degree: "Степень бакалавра",
          field: "Управление бизнесом",
          institution: "Бакинский государственный университет",
        },
      ],
    },

    // Spoken Languages
    spokenLanguages: {
      items: [
        { name: "Азербайджанский", level: "Родной" },
        { name: "Английский", level: "Выше среднего (B2)" },
        { name: "Русский", level: "Средний (B1)" },
        { name: "Турецкий", level: "Профессиональный уровень" },
        { name: "Немецкий", level: "Начальный (A2)" },
      ],
    },
  },
} as const;

// Type for translation keys (nested dot notation)
export type TranslationKey =
  | `nav.${keyof typeof translations.en.nav}`
  | `hero.${keyof typeof translations.en.hero}`
  | `buttons.${keyof typeof translations.en.buttons}`
  | `sections.${keyof typeof translations.en.sections}`
  | `about.${keyof typeof translations.en.about}`
  | `contact.${keyof typeof translations.en.contact}`
  | `contact.cards.email.${keyof typeof translations.en.contact.cards.email}`
  | `contact.cards.phone.${keyof typeof translations.en.contact.cards.phone}`
  | `contact.cards.linkedin.${keyof typeof translations.en.contact.cards.linkedin}`
  | `footer.${keyof typeof translations.en.footer}`
  | `competencies.documentControl.${keyof typeof translations.en.competencies.documentControl}`
  | `competencies.edms.${keyof typeof translations.en.competencies.edms}`
  | `competencies.automation.${keyof typeof translations.en.competencies.automation}`
  | `competencies.quality.${keyof typeof translations.en.competencies.quality}`
  | `competencies.reporting.${keyof typeof translations.en.competencies.reporting}`;

// Helper to get nested value (supports both strings and arrays)
function getNestedTranslation(
  obj: any,
  path: string,
  fallback: any = path
): any {
  const keys = path.split(".");
  let current = obj;

  for (const key of keys) {
    if (current && typeof current === "object" && key in current) {
      current = current[key];
    } else {
      console.warn(`[i18n] Translation missing for key: ${path}`);
      return fallback;
    }
  }

  return current;
}

// Exports
export { translations, getNestedTranslation };
