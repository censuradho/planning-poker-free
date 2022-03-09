import { theme } from '@/stitches.config';
import React, { memo } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


const NotificationComponent: React.FC = () => {
  return <ToastContainer newestOnTop style={{ color: '#fff' }} />;
};

export const Notification = memo(NotificationComponent);
