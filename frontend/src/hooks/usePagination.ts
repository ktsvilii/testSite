import { useState } from 'react';

export const usePagination = (firstPage: number = 1) => {
  const [currentPage, setCurrentPage] = useState(firstPage);

  const nextPage = () => {
    setCurrentPage(prev => prev + 1);
  };

  const prevPage = () => {
    setCurrentPage(prev => prev - 1);
  };

  return {
    currentPage,
    nextPage,
    prevPage,
  };
};
