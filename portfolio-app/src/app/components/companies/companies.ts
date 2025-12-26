import { Component, Optional } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-companies',
  imports: [],
  templateUrl: './companies.html',
  styleUrl: './companies.scss',
})
export class Companies {
  constructor(@Optional() private translationService: TranslationService) {}

  translate(key: string): string {
    if (this.translationService) {
      return this.translationService.translate(key);
    }
    // Fallback for when translation service is not available
    const fallbacks: { [key: string]: string } = {
      'companies.title': 'Firmy, z którymi wspłpracowałem'
    };
    return fallbacks[key] || key;
  }
}
