import { create } from 'zustand'

export const useCatsStore = create((set) => ({
  cats: [],
  setCats: (data) => set({ cats: data }),
}))