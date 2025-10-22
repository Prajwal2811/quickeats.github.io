import { create } from "zustand"; // ✅ correct

const useAuth = create((set) => ({
  user: null,
  login: (userData) => set({ user: userData }),
  logout: () => set({ user: null }),
}));

export default useAuth;
