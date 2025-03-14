import { create } from 'zustand';

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem('chat-theme') || 'night',
  setTheme: (theme) => {
    localStorage.getItem('chat-theme', theme);
    set({ theme });
  },
}));
