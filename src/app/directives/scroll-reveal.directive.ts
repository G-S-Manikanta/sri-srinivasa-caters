import { Directive, ElementRef, Input, OnInit, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  @Input() revealClass = 'is-revealed';
  @Input() threshold = 0.15;
  @Input() rootMargin = '0px 0px -40px 0px';
  @Input() delay = 0;

  private observer?: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      // Fallback for environments without IntersectionObserver
      this.renderer.addClass(this.el.nativeElement, this.revealClass);
      return;
    }

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      this.renderer.addClass(this.el.nativeElement, this.revealClass);
      return;
    }

    if (this.delay > 0) {
      this.renderer.setStyle(this.el.nativeElement, 'transition-delay', `${this.delay}ms`);
    }

    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, this.revealClass);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: this.threshold,
      rootMargin: this.rootMargin
    });

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

