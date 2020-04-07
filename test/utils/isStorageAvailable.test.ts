import isStorageAvailable from '../../src/utils/isStorageAvailable';

describe('isStorageAvailable', () => {
  it('should return false when the provided storage is either null or undefined', () => {
    expect(isStorageAvailable(null!)).toBe(false);
    expect(isStorageAvailable(undefined!)).toBe(false);
  });

  it('should return false for non Storage objects', () => {
    expect(isStorageAvailable({} as any)).toBe(false);
    expect(isStorageAvailable('' as any)).toBe(false);
  });

  it('should return false for faulty Storage objects', () => {
    expect(
      isStorageAvailable({
        setItem(): void {
          throw new Error();
        },
      } as any),
    ).toBe(false);

    expect(
      isStorageAvailable({
        setItem(): void {},
      } as any),
    ).toBe(false);

    expect(
      isStorageAvailable({
        setItem(): void {},
        getItem(): string {
          return null!;
        },
      } as any),
    ).toBe(false);

    expect(
      isStorageAvailable({
        setItem(): void {},
        getItem(): string {
          throw new Error();
        },
      } as any),
    ).toBe(false);
  });

  it('should return true for localStorage, provided that is supported by the browser running this test', () => {
    expect(isStorageAvailable(localStorage)).toBe(true);
  });

  it('should return true for sessionStorage, provided that is supported by the browser running this test', () => {
    expect(isStorageAvailable(sessionStorage)).toBe(true);
  });
});
