import { Component, Optional } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  constructor(@Optional() private translationService: TranslationService) {}

  translate(key: string): string {
    if (this.translationService) {
      return this.translationService.translate(key);
    }
    // Fallback for when translation service is not available
    const fallbacks: { [key: string]: string } = {
      'exp.title': 'Doświadczenie',
      'exp.senior_net_title': 'Starszy Programista .NET',
      'exp.net_title': 'Programista .NET',
      'exp.bgk_company': 'Bank Gospodarstwa Krajowego',
      'exp.tvp_company': 'Telewizja Polska',
      'exp.bgk_senior_duties': 'Tworzenie aplikacji webowych dla programów "Mieszkanie na Start", "BLIK" i "Termo 2"',
      'exp.bgk_duties': 'Tworzenie aplikacji webowych dla programu "Mieszkanie na Start"',
      'exp.tvp_sport_duties': 'Tworzenie aplikacji dla TVP Sport - systemy dla meczów koszykówki, hokeja, piłki ręcznej, żużlu, wyścigów konnych, piłki nożnej, Mundial Rosja 2018',
      'exp.tvp_quiz_duties': 'Tworzenie systemów dla teleturniejów TV: "Jaka to melodia", "Jeden z dziesięciu", "Rodzina wie lepiej", "Wielki Test", "Voice of Poland"',
      'exp.tvp_other_duties': 'Inne systemy dla Telewizji',
      'exp.tvp_contracts_duties': 'System rejestracji umów produkcyjnych',
      'exp.date_present': 'obecnie'
    };
    return fallbacks[key] || key;
  }
}
