import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ahmadportfolio');
  private darkMode = signal(false);

  protected isDarkMode(): boolean {
    return this.darkMode();
  }

  protected toggleTheme(): void {
    this.darkMode.set(!this.darkMode());
    if (this.darkMode()) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      document.body.classList.add('bg-dark');
      document.body.classList.remove('bg-light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      document.body.classList.remove('bg-dark');
      document.body.classList.add('bg-light');
    }
  }
}
