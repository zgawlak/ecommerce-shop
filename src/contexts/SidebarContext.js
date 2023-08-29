import React, { useState, createContext } from 'react';

export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return <SidebarContext value={{ isOpen, setIsOpen, handleClose }}>
    {children}</SidebarContext>;
};

export default SidebarProvider;
