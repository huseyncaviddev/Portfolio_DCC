import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'az' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations dictionary
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.education': 'Education',
    'nav.contact': 'Contact',
    'nav.getInTouch': 'Get in Touch',

    // Hero
    'hero.availability': 'Available for opportunities',
    'hero.name': 'Huseyn Cavid',
    'hero.tagline': 'Building Compliant, Scalable Document Control Ecosystems',
    'hero.role': 'Document Controller Lead',
    'hero.description': 'Document Control Lead with a proven track record of building fast, scalable, and fully compliant document control ecosystems for large-scale construction and industrial projects. Expert in EDMS administration, lifecycle governance, and workflow automation using PowerShell and Python.',
    'hero.downloadCV': 'Download CV',
    'hero.connectLinkedIn': 'Connect on LinkedIn',
    'hero.sendMessage': 'Send Message',

    // About
    'about.title': 'About Me',
    'about.description': 'I am a Document Control Lead with extensive experience in managing document control ecosystems for large-scale construction projects. My expertise lies in EDMS administration, lifecycle governance, revision control, and stakeholder coordination across Contractor–Engineer–Employer environments. I am highly skilled in workflow automation using PowerShell and Python, having reduced manual workloads by 60%+ and transformed document turnaround speed and accuracy. Known for strong operational discipline, precision, and a process-driven mindset, ensuring zero deviation from FIDIC, project procedures, and QA/QC requirements.',

    // Sections
    'section.experience': 'Experience',
    'section.skills': 'Core Competencies',
    'section.education': 'Education',
    'section.languages': 'Languages',
    'section.contact': 'Get in Touch',

    // Contact
    'contact.description': "Have a question or project in mind? Fill out the form below and I'll get back to you as soon as possible.",
    'contact.reachOut': 'Or reach out directly:',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.linkedin': 'LinkedIn',
    'contact.connectWithMe': 'Connect with me',

    // Footer
    'footer.rights': 'All rights reserved',
    'footer.role': 'Document Controller Lead',
  },

  az: {
    // Navigation
    'nav.about': 'Haqqında',
    'nav.experience': 'Təcrübə',
    'nav.skills': 'Bacarıqlar',
    'nav.education': 'Təhsil',
    'nav.contact': 'Əlaqə',
    'nav.getInTouch': 'Əlaqə saxla',

    // Hero
    'hero.availability': 'İş təklifləri üçün açığam',
    'hero.name': 'Hüseyn Cavid',
    'hero.tagline': 'Uyğun, Miqyaslı Sənəd Nəzarət Ekosistemləri Qururam',
    'hero.role': 'Sənəd Nəzarəti Rəhbəri',
    'hero.description': 'Böyük tikinti və sənaye layihələri üçün sürətli, miqyaslı və tam uyğun sənəd nəzarət ekosistemlərinin qurulmasında sübut edilmiş təcrübəyə malik Sənəd Nəzarəti Rəhbəri. EDMS idarəçiliyi, həyat dövrü idarəçiliyi və PowerShell və Python istifadə edərək iş axını avtomatlaşdırılması üzrə ekspert.',
    'hero.downloadCV': 'CV Yüklə',
    'hero.connectLinkedIn': 'LinkedIn-də bağlan',
    'hero.sendMessage': 'Mesaj göndər',

    // About
    'about.title': 'Haqqımda',
    'about.description': 'Mən böyük tikinti layihələri üçün sənəd nəzarət ekosistemlərinin idarə edilməsində geniş təcrübəyə malik Sənəd Nəzarəti Rəhbəriyəm. Mənim ekspertizam sahəm EDMS idarəçiliyi, həyat dövrü idarəçiliyi, yenidən baxış nəzarəti və Podratçı-Mühəndis-İşəgötürən mühitlərində maraqlı tərəflərin əlaqələndirilməsidir. PowerShell və Python istifadə edərək iş axını avtomatlaşdırılmasında yüksək səviyyədə bacarıqlıyam, əl ilə iş yükünü 60%+ azaltmışam və sənəd dövriyyə sürətini və dəqiqliyini dəyişdirmişəm. Güclü əməliyyat intizamı, dəqiqlik və prosesə yönəlmiş düşüncə tərzi ilə tanınıram, FIDIC, layihə prosedurları və QA/QC tələblərindən sıfır kənara çıxma təmin edirəm.',

    // Sections
    'section.experience': 'Təcrübə',
    'section.skills': 'Əsas Bacarıqlar',
    'section.education': 'Təhsil',
    'section.languages': 'Dillər',
    'section.contact': 'Əlaqə saxla',

    // Contact
    'contact.description': 'Sualınız və ya layihəniz varmı? Aşağıdakı formu doldurun və mümkün qədər tez cavab verəcəyəm.',
    'contact.reachOut': 'Və ya birbaşa əlaqə saxlayın:',
    'contact.email': 'E-poçt',
    'contact.phone': 'Telefon',
    'contact.linkedin': 'LinkedIn',
    'contact.connectWithMe': 'Mənimlə əlaqə saxla',

    // Footer
    'footer.rights': 'Bütün hüquqlar qorunur',
    'footer.role': 'Sənəd Nəzarəti Rəhbəri',
  },

  ru: {
    // Navigation
    'nav.about': 'О себе',
    'nav.experience': 'Опыт',
    'nav.skills': 'Навыки',
    'nav.education': 'Образование',
    'nav.contact': 'Контакты',
    'nav.getInTouch': 'Связаться',

    // Hero
    'hero.availability': 'Открыт для предложений',
    'hero.name': 'Гусейн Джавид',
    'hero.tagline': 'Построение соответствующих, масштабируемых экосистем контроля документов',
    'hero.role': 'Руководитель контроля документов',
    'hero.description': 'Руководитель контроля документов с подтвержденным опытом создания быстрых, масштабируемых и полностью соответствующих экосистем контроля документов для крупномасштабных строительных и промышленных проектов. Эксперт в администрировании EDMS, управлении жизненным циклом и автоматизации рабочих процессов с использованием PowerShell и Python.',
    'hero.downloadCV': 'Скачать резюме',
    'hero.connectLinkedIn': 'Связаться в LinkedIn',
    'hero.sendMessage': 'Отправить сообщение',

    // About
    'about.title': 'О себе',
    'about.description': 'Я руководитель контроля документов с обширным опытом управления экосистемами контроля документов для крупномасштабных строительных проектов. Моя экспертиза заключается в администрировании EDMS, управлении жизненным циклом, контроле версий и координации заинтересованных сторон в средах Подрядчик-Инженер-Работодатель. Я обладаю высокими навыками автоматизации рабочих процессов с использованием PowerShell и Python, сократив ручную рабочую нагрузку более чем на 60% и преобразовав скорость оборота документов и точность. Известен сильной операционной дисциплиной, точностью и процессно-ориентированным мышлением, обеспечивая нулевое отклонение от FIDIC, процедур проекта и требований QA/QC.',

    // Sections
    'section.experience': 'Опыт',
    'section.skills': 'Основные компетенции',
    'section.education': 'Образование',
    'section.languages': 'Языки',
    'section.contact': 'Связаться',

    // Contact
    'contact.description': 'Есть вопрос или проект? Заполните форму ниже, и я свяжусь с вами как можно скорее.',
    'contact.reachOut': 'Или свяжитесь напрямую:',
    'contact.email': 'Эл. почта',
    'contact.phone': 'Телефон',
    'contact.linkedin': 'LinkedIn',
    'contact.connectWithMe': 'Свяжитесь со мной',

    // Footer
    'footer.rights': 'Все права защищены',
    'footer.role': 'Руководитель контроля документов',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const stored = localStorage.getItem('language');
    return (stored as Language) || 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
