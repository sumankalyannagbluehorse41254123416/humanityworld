declare global {
  interface JQuery {
    navigation(options?: Record<string, unknown>): JQuery;
  }
}

export {};
