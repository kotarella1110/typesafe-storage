class AltStorage implements Storage {
  private values: Record<string, string> = {};

  get length(): number {
    return Object.keys(this.values).length;
  }

  clear(): void {
    this.values = {};
  }

  getItem(key: string): string | null {
    return this.values[key] || null;
  }

  key(index: number): string | null {
    return Object.keys(this.values)[index] || null;
  }

  setItem(key: string, value: string): void {
    this.values[key] = value;
  }

  removeItem(key: string): void {
    delete this.values[key];
  }
}

export default AltStorage;
