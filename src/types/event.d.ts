export interface ScrollHandler {
  (position: ScrollToOptions, behavior: ScrollBehavior = 'smooth'): void
}
