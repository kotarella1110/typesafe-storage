class StorageWrapper<TValues extends Record<string, any> = Record<string, any>>
  implements Storage {
  constructor(private storage: Storage) {}

  get length(): number {
    return this.storage.length;
  }

  clear(): void {
    this.storage.clear();
  }

  getItem<TKey extends Extract<keyof TValues, string>>(
    key: TKey,
  ): TValues[TKey] | null {
    const value = this.storage.getItem(key);

    if (typeof value !== 'string') {
      return value;
    }

    try {
      return JSON.parse(value);
    } catch (e) {
      return null;
    }
  }

  key(index: number): Extract<keyof TValues, string> | null {
    return this.storage.key(index) as Extract<keyof TValues, string> | null;
  }

  setItem<TKey extends Extract<keyof TValues, string>>(
    key: TKey,
    value: TValues[TKey],
  ): void {
    this.storage.setItem(
      key,
      typeof value === 'string' ? value : JSON.stringify(value),
    );
  }

  removeItem<TKey extends Extract<keyof TValues, string>>(key: TKey): void {
    this.storage.removeItem(key);
  }
}

export default StorageWrapper;
