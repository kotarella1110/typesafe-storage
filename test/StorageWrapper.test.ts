import StorageWrapper from '../src/StorageWrapper';

describe('StorageWrapper', () => {
  const storage = new StorageWrapper(localStorage);
  const testData = [
    ['string', 'value', 'value'],
    [
      'object',
      { key1: 1, key2: 'value' },
      JSON.stringify({ key1: 1, key2: 'value' }),
    ],
    ['array', [1, 'value'], JSON.stringify([1, 'value'])],
  ] as const;

  beforeEach(() => {
    localStorage.clear();
    (localStorage.setItem as any).mockClear();
  });

  it.each(testData)('getItem should call localStorage.getItem', key => {
    storage.getItem(key);
    expect(localStorage.getItem).toHaveBeenCalledWith(key);
  });

  it('getItem should return null if JSON.prase error occurs', () => {
    testData.forEach(([key, value]) => {
      storage.setItem(key, value);
    });
    JSON.parse = jest.fn().mockImplementationOnce(() => {
      throw new Error();
    });
    // eslint-disable-next-line no-underscore-dangle
    expect(storage.getItem(testData[0][0])).toBe(null);
  });

  it.each(testData)(
    'setItem should call localStorage.setItem',
    (key, value, expected) => {
      storage.setItem(key, value);
      expect(localStorage.setItem).toHaveBeenCalledWith(key, expected);
      // eslint-disable-next-line no-underscore-dangle
      expect(localStorage.__STORE__[key]).toBe(expected);
    },
  );

  it('removeItem should call localStorage.removeItem', () => {
    testData.forEach(([key, value]) => {
      storage.setItem(key, value);
    });
    expect(localStorage.length).toBe(3);
    storage.removeItem(testData[0][0]);
    expect(localStorage.removeItem).toHaveBeenCalledWith(testData[0][0]);
    expect(localStorage.length).toBe(2);
  });

  it('clear should call localStorage.clear', () => {
    testData.forEach(([key, value]) => {
      storage.setItem(key, value);
    });
    expect(localStorage.length).toBe(3);
    storage.clear();
    expect(localStorage.clear).toHaveBeenCalled();
    expect(localStorage.length).toBe(0);
  });

  it('key should call localStorage.key', () => {
    const index = 2;
    storage.key(index);
    expect(localStorage.key).toHaveBeenCalledWith(index);
  });
});
