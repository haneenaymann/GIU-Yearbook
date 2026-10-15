/*
FILE: src/app/components/student-card/student-card.ts
WHAT: Defines the student card and handles missing photos.
WHY: Keeps the card usable when a portrait cannot load.
*/
import { Component, computed, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-student-card',
  imports: [RouterLink],
  templateUrl: './student-card.html',
  styleUrl: './student-card.css',
})
export class StudentCard {
  readonly student = input.required<Student>();

  // Remember whether the portrait failed to load.
  private readonly imageFailed = signal(false);

  // Use the placeholder when the original photo fails.
  protected readonly photoSrc = computed(() =>
    this.imageFailed()
      ? 'images/placeholder-portrait.svg'
      : this.student().photo,
  );

  protected onImageError(): void {
    this.imageFailed.set(true);
  }
}