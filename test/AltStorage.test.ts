import AltStorage from '../src/AltStorage';

describe('AltStorage', () => {
  const altStorage = new AltStorage();
  const testData = [
    ['key1', 'value1', 'value1'],
    ['key2', 'value2', 'value2'],
    ['key3', 'value3', 'value3'],
  ];

  beforeEach(() => {
    altStorage.clear();
  });

  it.each(testData)('should get and set item', (key, value, expected) => {
    altStorage.setItem(key, value);
    expect(altStorage.getItem(key)).toBe(expected);
    expect(altStorage.length).toBe(1);
  });

  it('should get null if item is not exist', () => {
    altStorage.setItem(testData[0][0], testData[0][1]);
    expect(altStorage.getItem('notExist')).toBe(null);
  });

  it('should remove item', () => {
    testData.forEach(([key, value]) => {
      altStorage.setItem(key, value);
    });
    expect(altStorage.length).toBe(3);
    altStorage.removeItem(testData[0][0]);
    expect(altStorage.getItem(testData[0][0])).toBe(null);
    expect(altStorage.length).toBe(2);
  });

  it('should clear all items', () => {
    testData.forEach(([key, value]) => {
      altStorage.setItem(key, value);
    });
    expect(altStorage.length).toBe(3);
    altStorage.clear();
    expect(altStorage.getItem(testData[0][0])).toBe(null);
    expect(altStorage.length).toBe(0);
  });

  it('should get item key', () => {
    testData.forEach(([key, value]) => {
      altStorage.setItem(key, value);
    });
    expect(altStorage.key(0)).toBe(testData[0][0]);
  });

  it('should get null if item key is not exist', () => {
    testData.forEach(([key, value]) => {
      altStorage.setItem(key, value);
    });
    expect(altStorage.key(100)).toBe(null);
  });
});
