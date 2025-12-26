import { Injectable, signal, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

export type Language = 'en' | 'pl';

export interface Translations {
  [key: string]: {
    en: string;
    pl: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLanguageSubject = new BehaviorSubject<Language>('pl');
  public currentLanguage$ = this.currentLanguageSubject.asObservable();
  
  public currentLanguage = signal<Language>('pl');

  private translations: Translations = {
    // Header Navigation
    'nav.home': { en: 'Home', pl: 'Home' },
    'nav.about': { en: 'About', pl: 'O mnie' },
    'nav.technologies': { en: 'Technologies', pl: 'Technologie' },
    'nav.companies': { en: 'Companies I\'ve worked with', pl: 'Firmy, z którymi współpracowałem' },
    'nav.projects': { en: 'Projects', pl: 'Projekty' },
    'nav.experience': { en: 'Experience', pl: 'Doświadczenie' },
    'nav.contact': { en: 'Contact', pl: 'Kontakt' },
    'nav.blog': { en: 'Blog', pl: 'Blog' },

    // Hero Section
    'hero.eyebrow': { en: 'Hello, I\'m', pl: 'Cześć, jestem' },
    'hero.title': { en: 'Dariusz Kuszyński', pl: 'Dariusz Kuszyński' },
    'hero.subtitle': { en: 'Senior .NET Developer | Solution Architect Aspirant', pl: 'Senior .NET Developer | Solution Architect Aspirant' },
    'hero.summary': {
      en: 'I specialize in designing scalable and secure distributed systems for the banking and streaming media sectors.',
      pl: 'Specjalizuję się w projektowaniu skalowalnych i bezpiecznych systemów rozproszonych dla sektora bankowego oraz mediów strumieniowych.'
    },
    'hero.download_cv': { en: 'Download CV', pl: 'Pobierz CV' },
    'hero.contact': { en: 'Contact', pl: 'Kontakt' },
    'hero.pill1': { en: 'System Architecture', pl: 'Architektura Systemów' },
    'hero.pill2': { en: 'Distributed Systems', pl: 'Systemy Rozproszone' },
    'hero.pill3': { en: 'Banking Solutions', pl: 'Rozwiązania Bankowe' },

    // Blog Section
    'blog.title': { en: 'Blog', pl: 'Blog' },
    'blog.description': {
      en: 'Technical articles, case studies and thoughts on architecture will soon appear here.',
      pl: 'Tu wkrótce pojawią się artykuły techniczne, case study oraz przemyślenia o architekturze.'
    },

    // Contact Section
    'contact.title': { en: 'Contact', pl: 'Kontakt' },
    'contact.name': { en: 'Name', pl: 'Imię' },
    'contact.email': { en: 'Email', pl: 'Email' },
    'contact.message': { en: 'Message', pl: 'Wiadomość' },
    'contact.send': { en: 'Send', pl: 'Wyślij' },
    'contact.sending': { en: 'Sending...', pl: 'Wysyłanie...' },
    'contact.info_title': { en: 'Contact me', pl: 'Skontaktuj się ze mną' },
    'contact.info_description': {
      en: 'I will gladly answer your questions and discuss potential cooperation.',
      pl: 'Chętnie odpowiem na Twoje pytania i omówię potencjalną współpracę.'
    },
    'contact.github': { en: 'GitHub', pl: 'GitHub' },
    'contact.linkedin': { en: 'LinkedIn', pl: 'LinkedIn' },
    'contact.success_message': {
      en: 'Message sent successfully!',
      pl: 'Wiadomość została wysłana pomyślnie!'
    },
    'contact.error_message': {
      en: 'An error occurred while sending the message. Please try again.',
      pl: 'Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie.'
    },

    // Experience Section
    'exp.title': { en: 'Experience', pl: 'Doświadczenie' },
    'exp.senior_net_title': { en: 'Senior .NET Developer', pl: 'Starszy Programista .NET' },
    'exp.net_title': { en: '.NET Developer', pl: 'Programista .NET' },
    'exp.bgk_company': { en: 'Bank Gospodarstwa Krajowego', pl: 'Bank Gospodarstwa Krajowego' },
    'exp.tvp_company': { en: 'Telewizja Polska', pl: 'Telewizja Polska' },
    'exp.bgk_senior_duties': {
      en: 'Creating web applications for "Mieszkanie na Start", "BLIK" and "Termo 2" programs',
      pl: 'Tworzenie aplikacji webowych dla programów "Mieszkanie na Start", "BLIK" i "Termo 2"'
    },
    'exp.bgk_duties': {
      en: 'Creating web applications for "Mieszkanie na Start" program',
      pl: 'Tworzenie aplikacji webowych dla programu "Mieszkanie na Start"'
    },
    'exp.tvp_sport_duties': {
      en: 'Creating applications for TVP Sport - systems for basketball, hockey, handball, speedway, horse racing, football matches, World Cup Russia 2018',
      pl: 'Tworzenie aplikacji dla TVP Sport - systemy dla meczów koszykówki, hokeja, piłki ręcznej, żużlu, wyścigów konnych, piłki nożnej, Mundial Rosja 2018'
    },
    'exp.tvp_quiz_duties': {
      en: 'Creating systems for TV quiz shows: "Jaka to melodia", "Jeden z dziesięciu", "Rodzina wie lepiej", "Wielki Test", "Voice of Poland"',
      pl: 'Tworzenie systemów dla teleturniejów TV: "Jaka to melodia", "Jeden z dziesięciu", "Rodzina wie lepiej", "Wielki Test", "Voice of Poland"'
    },
    'exp.tvp_other_duties': {
      en: 'Other systems for Television',
      pl: 'Inne systemy dla Telewizji'
    },
    'exp.tvp_contracts_duties': {
      en: 'Production Agreements Registration System',
      pl: 'System rejestracji umów produkcyjnych'
    },
    'exp.date_present': { en: 'present', pl: 'obecnie' },

    // About Section
    'about.title': { en: 'About me', pl: 'O mnie' },
    'about.description1': {
      en: '.NET expert with over 9 years of experience in designing business-critical systems. I specialize in banking systems architecture (BGK) and high-availability solutions (TVP Sport).',
      pl: 'Ekspert .NET z ponad 9-letnim doświadczeniem w projektowaniu systemów o krytycznym znaczeniu dla biznesu. Specjalizuję się w architekturze systemów bankowych (BGK) oraz rozwiązaniach wysokodostępnych (TVP Sport).'
    },
    'about.description2': {
      en: 'My approach is based on pragmatic application of design patterns (DDD, Event-Driven) and technical debt management to deliver predictable and maintainable solutions.',
      pl: 'Moje podejście opiera się na pragmatycznym stosowaniu wzorców projektowych (DDD, Event-Driven) oraz zarządzaniu długiem technicznym, aby dostarczać rozwiązania przewidywalne i łatwe w utrzymaniu.'
    },
    'about.experience_label': { en: 'years of experience', pl: 'lat doświadczenia' },
    'about.projects_label': { en: 'completed projects', pl: 'zrealizowanych projektów' },
    'about.technologies_label': { en: 'technologies', pl: 'technologii' },

    // Projects Section
    'projects.title': { en: 'Selected Projects', pl: 'Wybrane projekty' },
    'projects.bgk_title': { 
      en: 'Banking Systems (BGK): Government Programs & BLIK', 
      pl: 'Systemy Bankowe (BGK): Programy Rządowe & BLIK' 
    },
    'projects.bgk_description': {
      en: 'Modernization and integration of banking systems. Development of web applications handling application processes (Mieszkanie na Start, Termo 2) and integration with BLIK payment system.',
      pl: 'Modernizacja i integracja systemów bankowych. Rozwój aplikacji webowych obsługujących procesy wnioskowe (Mieszkanie na Start, Termo 2) oraz integrację z systemem płatności BLIK.'
    },
    'projects.tvp_title': { 
      en: 'Real-Time Systems (TVP Sport & Entertainment)', 
      pl: 'Systemy Real-Time (TVP Sport & Rozrywka)' 
    },
    'projects.tvp_description': {
      en: 'High-availability systems for mass event handling. Backend development for sports systems (including World Cup 2018) and interactive quiz shows (e.g., Jeden z dziesięciu).',
      pl: 'Wysokodostępne systemy obsługi wydarzeń masowych. Budowa backendu dla systemów sportowych (m.in. Mundial 2018) oraz interaktywnych teleturniejów (np. Jeden z dziesięciu).'
    },
    'projects.digital_title': { 
      en: 'Complex Business Systems (Digital Care / Medisoft)', 
      pl: 'Złożone Systemy Biznesowe (Digital Care / Medisoft)' 
    },
    'projects.digital_description': {
      en: 'Business logic management in insurance systems. Development and maintenance of claim-handling platforms (Ucare.pl, Mini Claim) integrated with repair processes.',
      pl: 'Zarządzanie logiką biznesową w systemach ubezpieczeniowych. Rozwój i utrzymanie platform obsługujących roszczenia (Ucare.pl, Mini Claim) zintegrowanych z procesami naprawczymi.'
    },
    'projects.cta_button': { en: 'View on GitHub', pl: 'Zobacz na GitHub' },

    // Companies Section
    'companies.title': { en: 'Companies I\'ve worked with', pl: 'Firmy, z którymi wspłpracowałem' }
  };

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Try to get language from localStorage only in browser
    if (isPlatformBrowser(this.platformId)) {
      const savedLanguage = localStorage.getItem('language') as Language;
      if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'pl')) {
        this.setLanguage(savedLanguage);
      }
    }
  }

  setLanguage(language: Language): void {
    this.currentLanguage.set(language);
    this.currentLanguageSubject.next(language);
    
    // Save to localStorage only in browser
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('language', language);
    }
  }

  translate(key: string): string {
    const translation = this.translations[key];
    if (!translation) {
      console.warn(`Translation key '${key}' not found`);
      return key;
    }
    return translation[this.currentLanguage()];
  }

  getCurrentLanguage(): Language {
    return this.currentLanguage();
  }
}
