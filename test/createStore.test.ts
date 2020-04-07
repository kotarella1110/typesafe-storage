import createStorage from '../src/createStorage';
import AltStorage from '../src/AltStorage';

jest.mock('../src/AltStorage');

describe('createStorage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call AltStorage when the provided storage is undefined', () => {
    createStorage();
    expect(AltStorage).toHaveBeenCalled();
  });

  it('should not call AltStorage when the provided storage is localStorage', () => {
    createStorage(localStorage);
    expect(AltStorage).not.toHaveBeenCalled();
  });

  it('should not call AltStorage when the provided storage is sessionStorage', () => {
    createStorage(sessionStorage);
    expect(AltStorage).not.toHaveBeenCalled();
  });
});
