import { Component, Optional } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  constructor(@Optional() private translationService: TranslationService) {}

  translate(key: string): string {
    if (this.translationService) {
      return this.translationService.translate(key);
    }
    // Fallback for when translation service is not available
    const fallbacks: { [key: string]: string } = {
      'about.title': 'O mnie',
      'about.description1': 'Ekspert .NET z ponad 9-letnim doświadczeniem w projektowaniu systemów o krytycznym znaczeniu dla biznesu. Specjalizuję się w architekturze systemów bankowych (BGK) oraz rozwiązaniach wysokodostępnych (TVP Sport).',
      'about.description2': 'Moje podejście opiera się na pragmatycznym stosowaniu wzorców projektowych (DDD, Event-Driven) oraz zarządzaniu długiem technicznym, aby dostarczać rozwiązania przewidywalne i łatwe w utrzymaniu.',
      'about.experience_label': 'lat doświadczenia',
      'about.projects_label': 'zrealizowanych projektów',
      'about.technologies_label': 'technologii'
    };
    return fallbacks[key] || key;
  }
}
