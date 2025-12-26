import { Component } from '@angular/core';
import { TranslationService, Language } from '../../services/translation.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  constructor(private translationService: TranslationService) {}

  setLanguage(language: Language): void {
    this.translationService.setLanguage(language);
  }

  translate(key: string): string {
    return this.translationService.translate(key);
  }

  smoothScroll(event: Event, elementId: string): void {
    event.preventDefault();
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}
