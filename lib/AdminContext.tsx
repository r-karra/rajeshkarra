'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface AdminContextType {
  isAdmin: boolean;
  isEditMode: boolean;
  setIsEditMode: (val: boolean) => void;
  isAuthModalOpen: boolean;
  openAuthModal: () => void;
  closeAuthModal: () => void;
  login: (key: string) => void;
  logout: () => void;
  requireAdmin: (action: () => void) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [pendingAction, setPendingAction] = useState<(() => void) | null>(null);

  // Check stored admin token on mount
  useEffect(() => {
    const token = localStorage.getItem('neon_admin_token');
    if (token) {
      fetch('/api/admin/auth', {
        headers: { 'x-admin-key': token },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.authenticated) {
            setIsAdmin(true);
            setIsEditMode(true);
          } else {
            localStorage.removeItem('neon_admin_token');
            setIsAdmin(false);
            setIsEditMode(false);
          }
        })
        .catch(() => {
          setIsAdmin(false);
          setIsEditMode(false);
        });
    }
  }, []);

  const login = (key: string) => {
    localStorage.setItem('neon_admin_token', key);
    setIsAdmin(true);
    setIsEditMode(true);
    if (pendingAction) {
      pendingAction();
      setPendingAction(null);
    }
  };

  const logout = () => {
    localStorage.removeItem('neon_admin_token');
    setIsAdmin(false);
    setIsEditMode(false);
  };

  const openAuthModal = () => setIsAuthModalOpen(true);
  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
    setPendingAction(null);
  };

  const requireAdmin = (action: () => void) => {
    if (isAdmin) {
      action();
    } else {
      setPendingAction(() => action);
      setIsAuthModalOpen(true);
    }
  };

  return (
    <AdminContext.Provider
      value={{
        isAdmin,
        isEditMode,
        setIsEditMode,
        isAuthModalOpen,
        openAuthModal,
        closeAuthModal,
        login,
        logout,
        requireAdmin,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};

