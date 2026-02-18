import { create } from 'zustand';

const useAuthStore = create((set) => ({
    role: null,
    isAuthenticated: false,
    userData: {
        firstName: '',
        emailOrPhone: '',
        password: '',
    },
    setRole: (role) => set({ role }),
    setUserData: (data) => set((state) => ({
        userData: { ...state.userData, ...data }
    })),
    login: (data) => set((state) => ({
        isAuthenticated: true,
        userData: { ...state.userData, ...data }
    })),
    logout: () => set({
        role: null,
        isAuthenticated: false,
        userData: { firstName: '', emailOrPhone: '', password: '' }
    }),
    clearAuth: () => set({
        role: null,
        isAuthenticated: false,
        userData: { firstName: '', emailOrPhone: '', password: '' }
    }),
}));

export default useAuthStore;
