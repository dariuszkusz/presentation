import { Component, Optional } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  constructor(@Optional() private translationService: TranslationService) {}

  translate(key: string): string {
    if (this.translationService) {
      return this.translationService.translate(key);
    }
    // Fallback for when translation service is not available
    const fallbacks: { [key: string]: string } = {
      'projects.title': 'Wybrane projekty',
      'projects.bgk_title': 'Systemy Bankowe (BGK): Programy Rządowe & BLIK',
      'projects.bgk_description': 'Modernizacja i integracja systemów bankowych. Rozwój aplikacji webowych obsługujących procesy wnioskowe (Mieszkanie na Start, Termo 2) oraz integrację z systemem płatności BLIK.',
      'projects.tvp_title': 'Systemy Real-Time (TVP Sport & Rozrywka)',
      'projects.tvp_description': 'Wysokodostępne systemy obsługi wydarzeń masowych. Budowa backendu dla systemów sportowych (m.in. Mundial 2018) oraz interaktywnych teleturniejów (np. Jeden z dziesięciu).',
      'projects.digital_title': 'Złożone Systemy Biznesowe (Digital Care / Medisoft)',
      'projects.digital_description': 'Zarządzanie logiką biznesową w systemach ubezpieczeniowych. Rozwój i utrzymanie platform obsługujących roszczenia (Ucare.pl, Mini Claim) zintegrowanych z procesami naprawczymi.',
      'projects.cta_button': 'Zobacz na GitHub'
    };
    return fallbacks[key] || key;
  }
}
