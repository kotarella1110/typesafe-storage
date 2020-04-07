import AltStorage from './AltStorage';
import StorageWrapper from './StorageWrapper';
import isStorageAvailable from './utils/isStorageAvailable';

const createStorage = <
  TValues extends Record<string, any> = Record<string, any>
>(
  storage?: Storage,
) =>
  new StorageWrapper<TValues>(
    !storage || !isStorageAvailable(storage) ? new AltStorage() : storage,
  );

export default createStorage;
