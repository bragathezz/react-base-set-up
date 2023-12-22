export const setSessionStorage = (key: string, varToSet: string) => {
  sessionStorage.setItem(key, window.btoa(varToSet));
};
export const getSessionStorage = (key: string) => {
  if (typeof window !== "undefined") {
    const getStorage = sessionStorage.getItem(key);

    try {
      return getStorage ? window.atob(getStorage) : false;
    } catch (e) {
      return false;
    }
  }
};
export const removeSessionStorage = (key: string) => {
  sessionStorage.removeItem(key);
};
export const unsetSessionStorage = () => {
  sessionStorage.clear();
};
