import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ThemeSuspense: React.FC = () => {
  return (
    <div className="flex items-center justify-center px-2 py-6 w-full h-screen text-3xl font-bold text-gray-600 dark:text-gray-400 dark:bg-gray-900">
      ShopTECH is loading ...
    </div>
  );
};

export default ThemeSuspense;
