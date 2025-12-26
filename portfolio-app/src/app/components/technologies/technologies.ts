import { Component, Inject, Optional } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-technologies',
  imports: [],
  templateUrl: './technologies.html',
  styleUrl: './technologies.scss',
})
export class Technologies {
  constructor(@Optional() private translationService: TranslationService) {}

  translate(key: string): string {
    if (this.translationService) {
      return this.translationService.translate(key);
    }
    // Fallback for when translation service is not available
    const fallbacks: { [key: string]: string } = {
      'nav.technologies': 'Technologie'
    };
    return fallbacks[key] || key;
  }
}
