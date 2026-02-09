import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('nosso_mini');
  currentYear: number = new Date().getFullYear();

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  @ViewChild('brandsTrack', { static: false })
  brandsTrack!: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
    const track = this.brandsTrack.nativeElement;

    // Duplica dinamicamente os logos (sem poluir o HTML)
    const items = Array.from(track.children);

    items.forEach((item: any) => {
      track.appendChild(item.cloneNode(true));
    });
  }
}
