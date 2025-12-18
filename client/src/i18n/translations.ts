// Production-grade translations with full type safety and array support
export type Language = 'en' | 'az' | 'ru';

const translations = {
  en: {
    // Common
    common: {
      present: 'Present',
    },

    // Navigation
    nav: {
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      education: 'Education',
      contact: 'Contact',
    },

    // Hero Section
    hero: {
      availability: 'Available for opportunities',
      name: 'Huseyn Cavid',
      tagline: 'Building Compliant, Scalable Document Control Ecosystems',
      role: 'Document Controller Lead',
      description: 'Document Control Lead with a proven track record of building fast, scalable, and fully compliant document control ecosystems for large-scale construction and industrial projects. Expert in EDMS administration, lifecycle governance, and workflow automation using PowerShell and Python.',
      location: 'Azerbaijan, Baku',
      altText: 'Huseyn Cavid',
    },

    // Buttons
    buttons: {
      downloadCV: 'Download CV',
      connectLinkedIn: 'Connect on LinkedIn',
      sendMessage: 'Send Message',
    },

    // Sections
    sections: {
      about: 'About Me',
      experience: 'Experience',
      skills: 'Core Competencies',
      education: 'Education',
      languages: 'Languages',
      contact: 'Get in Touch',
    },

    // About
    about: {
      description: 'I am a Document Control Lead with extensive experience in managing document control ecosystems for large-scale construction projects. My expertise lies in EDMS administration, lifecycle governance, revision control, and stakeholder coordination across Contractor–Engineer–Employer environments. I am highly skilled in workflow automation using PowerShell and Python, having reduced manual workloads by 60%+ and transformed document turnaround speed and accuracy. Known for strong operational discipline, precision, and a process-driven mindset, ensuring zero deviation from FIDIC, project procedures, and QA/QC requirements.',
    },

    // Contact
    contact: {
      title: 'Get in Touch',
      description: 'Have a question or project in mind? Fill out the form below and I\'ll get back to you as soon as possible.',
      reachOut: 'Or reach out directly:',
      cards: {
        email: {
          label: 'Email',
        },
        phone: {
          label: 'Phone',
        },
        linkedin: {
          label: 'LinkedIn',
          subtitle: 'Connect with me',
        },
      },
      form: {
        name: {
          label: 'Full Name',
          placeholder: 'Your name',
        },
        email: {
          label: 'Email Address',
          placeholder: 'your.email@example.com',
        },
        subject: {
          label: 'Subject',
          placeholder: 'What is this about?',
        },
        message: {
          label: 'Message',
          placeholder: 'Your message here...',
        },
        submit: 'Send Message',
        sending: 'Sending...',
        helperText: 'I typically respond within 24 hours.',
      },
      validation: {
        nameRequired: 'Please enter your name',
        emailRequired: 'Please enter your email',
        emailInvalid: 'Please enter a valid email address',
        subjectRequired: 'Please enter a subject',
        messageRequired: 'Please enter a message',
        messageMinLength: 'Message must be at least 10 characters long',
      },
      success: {
        title: 'Your message has been sent successfully!',
        toast: 'Message sent successfully! I\'ll get back to you soon.',
      },
      error: {
        title: 'Failed to send message. Please try again.',
        toast: 'Failed to send message. Please try again or email me directly.',
      },
    },

    // Footer
    footer: {
      copyright: 'All rights reserved',
      tagline: 'Document Controller Lead • Azerbaijan, Baku',
    },

    // Competencies (Skills with arrays)
    competencies: {
      documentControl: {
        title: 'Document Control & Governance',
        items: [
          'Document Control Governance',
          'Documentation Management',
          'Document Control Lifecycle (End-to-End)',
          'Revision Control & Compliance',
          'Team Leadership & Training',
        ],
      },
      edms: {
        title: 'EDMS Expertise',
        items: [
          'EDMS Administration (Aconex, SharePoint, FileOrbis)',
          'Workflow Design & Optimization',
          'Metadata Structuring & Numbering Systems',
          'MDR & DDM Management',
          'Permission & Access Control',
        ],
      },
      automation: {
        title: 'Automation & Tools',
        items: [
          'Python Automation (DCC scripts)',
          'PowerShell Automation',
          'Advanced Excel (Dashboards, Trackers, PivotTables)',
          'PDF Tools (Markups, Stamps, Merging)',
        ],
      },
      quality: {
        title: 'Quality & Compliance',
        items: [
          'Audit Preparation & Document Integrity',
          'Controlled Document Distribution',
          'Risk Identification in Document Flow',
        ],
      },
      reporting: {
        title: 'Reporting & Communication',
        items: [
          'KPI Reporting & Analytics',
          'Dashboard Creation',
          'Status Reporting & Progress Tracking',
        ],
      },
    },

    // Experience
    experience: {
      items: [
        {
          title: 'Document Control Lead',
          company: 'KOLIN Construction',
          location: 'Sitalchay, Azerbaijan',
          highlights: [
            'Architected and managed complete document lifecycle (creation, review, approval, distribution, archiving) in line with FIDIC-based requirements',
            'Directed full control over all outgoing and incoming documentation (TRN, LET, STQ, MAR, MIR, ITP, SHD, MOM, DR, NCR)',
            'Led MDR governance, enforcing strict numbering, revision, and metadata protocols across all disciplines',
            'Designed and implemented structured server architecture for 5+ engineering disciplines and 20+ subcontractors',
            'Developed automation tools (PowerShell/Python) reducing manual processing time by over 60%',
          ],
        },
        {
          title: 'Document Controller',
          company: 'KOLIN Construction',
          location: 'Kalbajar, Azerbaijan',
          highlights: [
            'Controlled all incoming/outgoing project documentation across civil, mechanical, electrical disciplines',
            'Maintained MDR ensuring continuous accuracy, revision integrity, and audit readiness',
            'Ensured compliance with document numbering, revision control, and metadata rules',
            'Monitored EDMS workflows and email-based routing systems',
          ],
        },
        {
          title: 'IT Specialist',
          company: 'Clopos POS',
          location: 'Baku, Azerbaijan',
          highlights: [
            'Provided technical support for POS system operations across multiple restaurant clients',
            'Installed and configured servers, networks, routers, switches, and UniFi access points',
            'Maintained and repaired hardware systems (SSD, HDD, RAM, CPU)',
            'Performed OS installation, printer configuration, and general IT support',
          ],
        },
      ],
    },

    // Education
    education: {
      items: [
        {
          degree: 'Master\'s Degree',
          field: 'Hotel Management',
          institution: 'Baku State University',
        },
        {
          degree: 'Bachelor\'s Degree',
          field: 'Business Management',
          institution: 'Baku State University',
        },
      ],
    },

    // Spoken Languages
    spokenLanguages: {
      items: [
        { name: 'English', level: 'Upper-Intermediate' },
        { name: 'Russian', level: 'Intermediate' },
      ],
    },
  },

  az: {
    // Common
    common: {
      present: 'Hazırda',
    },

    // Navigation
    nav: {
      about: 'Haqqında',
      experience: 'Təcrübə',
      skills: 'Bacarıqlar',
      education: 'Təhsil',
      contact: 'Əlaqə',
    },

    // Hero Section
    hero: {
      availability: 'İş təklifləri üçün açığam',
      name: 'Hüseyn Cavid',
      tagline: 'Uyğun, Miqyaslı Sənəd Nəzarət Ekosistemləri Qururam',
      role: 'Sənədləşmə Üzrə Mütəxəssis',
      description: 'Böyük miqyaslı tikinti və sənaye layihələri üzrə sürətli, miqyaslana bilən və tam normativ tələblərə uyğun sənəd nəzarət ekosistemlərinin qurulması sahəsində sübut olunmuş peşəkar təcrübəyə malik Sənədləşmə üzrə Mütəxəssis. EDMS platformalarının idarə olunması, sənədlərin bütün həyat dövrü üzrə nəzarəti, eləcə də PowerShell və Python vasitəsilə iş axınlarının avtomatlaşdırılması üzrə yüksək ixtisaslaşmaya malikdir.',
      location: 'Azərbaycan, Bakı',
      altText: 'Hüseyn Cavid',
    },

    // Buttons
    buttons: {
      downloadCV: 'CV Yüklə',
      connectLinkedIn: 'LinkedIn-də bağlan',
      sendMessage: 'Mesaj göndər',
    },

    // Sections
    sections: {
      about: 'Haqqımda',
      experience: 'Təcrübə',
      skills: 'Əsas Bacarıqlar',
      education: 'Təhsil',
      languages: 'Dillər',
      contact: 'Əlaqə saxla',
    },

    // About
    about: {
      description: 'Mən böyük tikinti layihələri üçün sənəd nəzarət ekosistemlərinin idarə edilməsində geniş təcrübəyə malik Sənədləşmə Üzrə Mütəxəssisyəm. Mənim ekspertizam sahəm EDMS idarəçiliyi, həyat dövrü idarəçiliyi, yenidən baxış nəzarəti və Podratçı-Mühəndis-İşəgötürən mühitlərində maraqlı tərəflərin əlaqələndirilməsidir. PowerShell və Python istifadə edərək iş axını avtomatlaşdırılmasında yüksək səviyyədə bacarıqlıyam, əl ilə iş yükünü 60%+ azaltmışam və sənəd dövriyyə sürətini və dəqiqliyini dəyişdirmişəm.',
    },

    // Contact
    contact: {
      title: 'Əlaqə saxla',
      description: 'Sualınız və ya layihəniz varmı? Aşağıdakı formu doldurun və mümkün qədər tez cavab verəcəyəm.',
      reachOut: 'Və ya birbaşa əlaqə saxlayın:',
      cards: {
        email: {
          label: 'E-poçt',
        },
        phone: {
          label: 'Telefon',
        },
        linkedin: {
          label: 'LinkedIn',
          subtitle: 'Mənimlə əlaqə saxla',
        },
      },
      form: {
        name: {
          label: 'Tam ad',
          placeholder: 'Adınız',
        },
        email: {
          label: 'E-poçt ünvanı',
          placeholder: 'sizin.email@ornek.com',
        },
        subject: {
          label: 'Mövzu',
          placeholder: 'Bu nə haqqındadır?',
        },
        message: {
          label: 'Mesaj',
          placeholder: 'Mesajınız buraya...',
        },
        submit: 'Mesaj göndər',
        sending: 'Göndərilir...',
        helperText: 'Adətən 24 saat ərzində cavab verirəm.',
      },
      validation: {
        nameRequired: 'Zəhmət olmasa adınızı daxil edin',
        emailRequired: 'Zəhmət olmasa e-poçtunuzu daxil edin',
        emailInvalid: 'Zəhmət olmasa düzgün e-poçt ünvanı daxil edin',
        subjectRequired: 'Zəhmət olmasa mövzu daxil edin',
        messageRequired: 'Zəhmət olmasa mesaj daxil edin',
        messageMinLength: 'Mesaj ən azı 10 simvol olmalıdır',
      },
      success: {
        title: 'Mesajınız uğurla göndərildi!',
        toast: 'Mesaj uğurla göndərildi! Tezliklə sizinlə əlaqə saxlayacağam.',
      },
      error: {
        title: 'Mesaj göndərilmədi. Zəhmət olmasa yenidən cəhd edin.',
        toast: 'Mesaj göndərilmədi. Zəhmət olmasa yenidən cəhd edin və ya birbaşa e-poçt göndərin.',
      },
    },

    // Footer
    footer: {
      copyright: 'Bütün hüquqlar qorunur',
      tagline: 'Sənədləşmə Üzrə Mütəxəssis • Azərbaycan, Bakı',
    },

    // Competencies (Skills with arrays)
    competencies: {
      documentControl: {
        title: 'Sənəd Nəzarəti və İdarəetmə',
        items: [
          'Sənəd Nəzarəti İdarəetməsi',
          'Sənədləşdirmə İdarəçiliyi',
          'Sənəd Nəzarəti Həyat Dövrü (Tam)',
          'Yenidən Baxış Nəzarəti və Uyğunluq',
          'Komanda Rəhbərliyi və Təlim',
        ],
      },
      edms: {
        title: 'EDMS Ekspertizası',
        items: [
          'EDMS İdarəetməsi (Aconex, SharePoint, FileOrbis)',
          'İş Axınının Dizaynı və Optimallaşdırılması',
          'Metadata Strukturlaşdırılması və Nömrələmə Sistemləri',
          'MDR və DDM İdarəetməsi',
          'İcazə və Giriş Nəzarəti',
        ],
      },
      automation: {
        title: 'Avtomatlaşdırma və Alətlər',
        items: [
          'Python Avtomatlaşdırması (DCC skriptləri)',
          'PowerShell Avtomatlaşdırması',
          'Qabaqcıl Excel (İdarə Panelləri, İzləyicilər, PivotTables)',
          'PDF Alətləri (İşarələmə, Möhürlər, Birləşdirmə)',
        ],
      },
      quality: {
        title: 'Keyfiyyət və Uyğunluq',
        items: [
          'Audit Hazırlığı və Sənəd Bütövlüyü',
          'Nəzarət olunan Sənəd Paylanması',
          'Sənəd Axınında Risk Müəyyənləşdirilməsi',
        ],
      },
      reporting: {
        title: 'Hesabat və Ünsiyyət',
        items: [
          'KPI Hesabatı və Analitika',
          'İdarə Paneli Yaradılması',
          'Status Hesabatı və Tərəqqi İzləmə',
        ],
      },
    },

    // Experience
    experience: {
      items: [
        {
          title: 'Sənədləşmə Üzrə Mütəxəssis',
          company: 'KOLIN İnşaat',
          location: 'Sitalçay, Azərbaycan',
          highlights: [
            'FIDIC əsaslı tələblərə uyğun olaraq tam sənəd həyat dövrünün (yaradılması, nəzərdən keçirilməsi, təsdiqi, paylanması, arxivləşdirilməsi) arxitekturası və idarə edilməsi',
            'Bütün gedən və gələn sənədlər üzərində tam nəzarət (TRN, LET, STQ, MAR, MIR, ITP, SHD, MOM, DR, NCR)',
            'Bütün fənlər üzrə ciddi nömrələmə, yenidən baxış və metadata protokollarının tətbiqi ilə MDR idarəetməsi',
            '5+ mühəndislik fənni və 20+ subpodratçı üçün strukturlaşdırılmış server arxitekturasının dizaynı və tətbiqi',
            'Əl ilə işləmə vaxtını 60%-dən çox azaldan avtomatlaşdırma alətlərinin (PowerShell/Python) hazırlanması',
          ],
        },
        {
          title: 'Sənəd Nəzarətçisi',
          company: 'KOLIN İnşaat',
          location: 'Kəlbəcər, Azərbaycan',
          highlights: [
            'Mülki, mexaniki, elektrik fənləri üzrə bütün gələn/gedən layihə sənədlərinə nəzarət',
            'Davamlı dəqiqlik, yenidən baxış bütövlüyü və audit hazırlığı təmin edən MDR saxlanması',
            'Sənəd nömrələmə, yenidən baxış nəzarəti və metadata qaydalarına uyğunluğun təmin edilməsi',
            'EDMS iş axınları və e-poçt əsaslı marşrutlaşdırma sistemlərinin monitorinqi',
          ],
        },
        {
          title: 'İT Mütəxəssisi',
          company: 'Clopos POS',
          location: 'Bakı, Azərbaycan',
          highlights: [
            'Çoxsaylı restoran müştəriləri üçün POS sistemi əməliyyatları üzrə texniki dəstək',
            'Serverlər, şəbəkələr, routerlər, switchlər və UniFi giriş nöqtələrinin quraşdırılması və konfiqurasiyası',
            'Avadanlıq sistemlərinin (SSD, HDD, RAM, CPU) saxlanması və təmiri',
            'OS quraşdırılması, printer konfiqurasiyası və ümumi İT dəstəyi',
          ],
        },
      ],
    },

    // Education
    education: {
      items: [
        {
          degree: 'Magistr Dərəcəsi',
          field: 'Hotel Menecmenti',
          institution: 'Bakı Dövlət Universiteti',
        },
        {
          degree: 'Bakalavr Dərəcəsi',
          field: 'Biznes İdarəetməsi',
          institution: 'Bakı Dövlət Universiteti',
        },
      ],
    },

    // Spoken Languages
    spokenLanguages: {
      items: [
        { name: 'İngilis', level: 'Yuxarı-Orta' },
        { name: 'Rus', level: 'Orta' },
      ],
    },
  },

  ru: {
    // Common
    common: {
      present: 'По настоящее время',
    },

    // Navigation
    nav: {
      about: 'О себе',
      experience: 'Опыт',
      skills: 'Навыки',
      education: 'Образование',
      contact: 'Контакты',
    },

    // Hero Section
    hero: {
      availability: 'Открыт для предложений',
      name: 'Гусейн Джавид',
      tagline: 'Построение соответствующих, масштабируемых экосистем контроля документов',
      role: 'Руководитель контроля документов',
      description: 'Руководитель контроля документов с подтвержденным опытом создания быстрых, масштабируемых и полностью соответствующих экосистем контроля документов для крупномасштабных строительных и промышленных проектов. Эксперт в администрировании EDMS, управлении жизненным циклом и автоматизации рабочих процессов с использованием PowerShell и Python.',
      location: 'Азербайджан, Баку',
      altText: 'Гусейн Джавид',
    },

    // Buttons
    buttons: {
      downloadCV: 'Скачать резюме',
      connectLinkedIn: 'Связаться в LinkedIn',
      sendMessage: 'Отправить сообщение',
    },

    // Sections
    sections: {
      about: 'О себе',
      experience: 'Опыт',
      skills: 'Основные компетенции',
      education: 'Образование',
      languages: 'Языки',
      contact: 'Связаться',
    },

    // About
    about: {
      description: 'Я руководитель контроля документов с обширным опытом управления экосистемами контроля документов для крупномасштабных строительных проектов. Моя экспертиза заключается в администрировании EDMS, управлении жизненным циклом, контроле версий и координации заинтересованных сторон в средах Подрядчик-Инженер-Работодатель. Я обладаю высокими навыками автоматизации рабочих процессов с использованием PowerShell и Python, сократив ручную рабочую нагрузку более чем на 60% и преобразовав скорость оборота документов и точность.',
    },

    // Contact
    contact: {
      title: 'Связаться',
      description: 'Есть вопрос или проект? Заполните форму ниже, и я свяжусь с вами как можно скорее.',
      reachOut: 'Или свяжитесь напрямую:',
      cards: {
        email: {
          label: 'Эл. почта',
        },
        phone: {
          label: 'Телефон',
        },
        linkedin: {
          label: 'LinkedIn',
          subtitle: 'Свяжитесь со мной',
        },
      },
      form: {
        name: {
          label: 'Полное имя',
          placeholder: 'Ваше имя',
        },
        email: {
          label: 'Адрес электронной почты',
          placeholder: 'ваш.email@пример.com',
        },
        subject: {
          label: 'Тема',
          placeholder: 'О чем это?',
        },
        message: {
          label: 'Сообщение',
          placeholder: 'Ваше сообщение здесь...',
        },
        submit: 'Отправить сообщение',
        sending: 'Отправка...',
        helperText: 'Обычно я отвечаю в течение 24 часов.',
      },
      validation: {
        nameRequired: 'Пожалуйста, введите ваше имя',
        emailRequired: 'Пожалуйста, введите ваш email',
        emailInvalid: 'Пожалуйста, введите действительный адрес электронной почты',
        subjectRequired: 'Пожалуйста, введите тему',
        messageRequired: 'Пожалуйста, введите сообщение',
        messageMinLength: 'Сообщение должно содержать не менее 10 символов',
      },
      success: {
        title: 'Ваше сообщение успешно отправлено!',
        toast: 'Сообщение успешно отправлено! Я свяжусь с вами в ближайшее время.',
      },
      error: {
        title: 'Не удалось отправить сообщение. Пожалуйста, попробуйте еще раз.',
        toast: 'Не удалось отправить сообщение. Пожалуйста, попробуйте еще раз или напишите мне напрямую.',
      },
    },

    // Footer
    footer: {
      copyright: 'Все права защищены',
      tagline: 'Руководитель контроля документов • Азербайджан, Баку',
    },

    // Competencies (Skills with arrays)
    competencies: {
      documentControl: {
        title: 'Контроль документов и управление',
        items: [
          'Управление контролем документов',
          'Управление документацией',
          'Жизненный цикл контроля документов (полный)',
          'Контроль версий и соответствие',
          'Руководство командой и обучение',
        ],
      },
      edms: {
        title: 'Экспертиза EDMS',
        items: [
          'Администрирование EDMS (Aconex, SharePoint, FileOrbis)',
          'Проектирование и оптимизация рабочих процессов',
          'Структурирование метаданных и системы нумерации',
          'Управление MDR и DDM',
          'Управление разрешениями и доступом',
        ],
      },
      automation: {
        title: 'Автоматизация и инструменты',
        items: [
          'Автоматизация Python (скрипты DCC)',
          'Автоматизация PowerShell',
          'Продвинутый Excel (панели управления, трекеры, сводные таблицы)',
          'Инструменты PDF (разметка, штампы, объединение)',
        ],
      },
      quality: {
        title: 'Качество и соответствие',
        items: [
          'Подготовка к аудиту и целостность документов',
          'Контролируемое распространение документов',
          'Выявление рисков в потоке документов',
        ],
      },
      reporting: {
        title: 'Отчетность и коммуникация',
        items: [
          'Отчетность и аналитика KPI',
          'Создание панелей управления',
          'Отчеты о статусе и отслеживание прогресса',
        ],
      },
    },

    // Experience
    experience: {
      items: [
        {
          title: 'Руководитель контроля документов',
          company: 'KOLIN Construction',
          location: 'Ситалчай, Азербайджан',
          highlights: [
            'Разработал и управлял полным жизненным циклом документов (создание, проверка, утверждение, распространение, архивирование) в соответствии с требованиями FIDIC',
            'Осуществлял полный контроль над всей исходящей и входящей документацией (TRN, LET, STQ, MAR, MIR, ITP, SHD, MOM, DR, NCR)',
            'Руководил управлением MDR, обеспечивая строгие протоколы нумерации, версий и метаданных по всем дисциплинам',
            'Разработал и внедрил структурированную архитектуру сервера для 5+ инженерных дисциплин и 20+ субподрядчиков',
            'Разработал инструменты автоматизации (PowerShell/Python), сократив время ручной обработки более чем на 60%',
          ],
        },
        {
          title: 'Контролер документов',
          company: 'KOLIN Construction',
          location: 'Кальбаджар, Азербайджан',
          highlights: [
            'Контролировал всю входящую/исходящую проектную документацию по гражданским, механическим, электрическим дисциплинам',
            'Поддерживал MDR, обеспечивая постоянную точность, целостность версий и готовность к аудиту',
            'Обеспечивал соответствие правилам нумерации документов, контроля версий и метаданных',
            'Контролировал рабочие процессы EDMS и системы маршрутизации на основе электронной почты',
          ],
        },
        {
          title: 'ИТ-специалист',
          company: 'Clopos POS',
          location: 'Баку, Азербайджан',
          highlights: [
            'Обеспечивал техническую поддержку операций POS-системы для нескольких клиентов ресторанов',
            'Устанавливал и настраивал серверы, сети, маршрутизаторы, коммутаторы и точки доступа UniFi',
            'Обслуживал и ремонтировал аппаратные системы (SSD, HDD, RAM, CPU)',
            'Выполнял установку ОС, настройку принтеров и общую ИТ-поддержку',
          ],
        },
      ],
    },

    // Education
    education: {
      items: [
        {
          degree: 'Степень магистра',
          field: 'Гостиничный менеджмент',
          institution: 'Бакинский государственный университет',
        },
        {
          degree: 'Степень бакалавра',
          field: 'Управление бизнесом',
          institution: 'Бакинский государственный университет',
        },
      ],
    },

    // Spoken Languages
    spokenLanguages: {
      items: [
        { name: 'Английский', level: 'Выше среднего' },
        { name: 'Русский', level: 'Средний' },
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
  const keys = path.split('.');
  let current = obj;

  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = current[key];
    } else {
      if (process.env.NODE_ENV === 'development') {
        console.warn(`[i18n] Translation missing for key: ${path}`);
      }
      return fallback;
    }
  }

  return current;
}

// Exports
export { translations, getNestedTranslation };
