import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdForward } from 'react-icons/io';
import { fiTrash2 } from 'react-icons/fi';
import CartItem from '../components/CartItem';
import { SidebarContext } from '../contexts/SidebarContext';

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  return <div>Sidebar</div>;
};

export default Sidebar;
