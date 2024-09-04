import { create } from "zustand";
import * as SecureStorage from "expo-secure-store";

export const storage: StorageState = {
  get: async (key) => {
    const value = await SecureStorage.getItemAsync(key);
    if (!value) return null;
    const data = JSON.parse(value);
    if (data.expiresAt < new Date().getTime() ) {
      return null;
    }
    return data.value;
  },

  store: async (key, value, expiresInSeconds = 3) => {
    const data = {
      value,
      expiresAt: new Date().getTime() + expiresInSeconds * 1000,
    }
    await SecureStorage.setItemAsync(key, JSON.stringify(data));
    const keys = await SecureStorage.getItemAsync("keys");
    if (keys) {
      const allKeys = keys.split(",");
      if (allKeys.includes(key)) {
        return;
      }
      await SecureStorage.setItemAsync("keys", `${keys},${key}`);
    } else {
      await SecureStorage.setItemAsync("keys", key);
    }
  },

  remove: async (key) => {
    await SecureStorage.deleteItemAsync(key);
  },

  clean: async () => {
    const value = await SecureStorage.getItemAsync("keys");
    if (value) {
      const keys = value.split(",");
      for (const key of keys) {
        await SecureStorage.deleteItemAsync(key);
      }
    }
    await SecureStorage.deleteItemAsync("keys");
  },
};

interface StorageState {
  get: <T>(key: string) => Promise<T | null>;
  store: <T>(key: string, value: T, expiresInSeconds?: number) => Promise<void>;
  remove: (key: string) => Promise<void>;
  clean: () => Promise<void>;
}

const useStorage = create<StorageState>((set) => ({
  ...storage,
}));

export { useStorage };
