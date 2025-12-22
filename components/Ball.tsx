
import React from 'react';

interface BallProps {
  number: number | string;
  type?: 'regular' | 'special' | 'star' | 'complementary' | 'joker';
  size?: 'sm' | 'md' | 'lg';
}

const Ball: React.FC<BallProps> = ({ number, type = 'regular', size = 'md' }) => {
  const sizeClasses = {
    sm: 'size-8 text-sm',
    md: 'size-10 text-base',
    lg: 'size-14 md:size-16 text-2xl'
  };

  const typeClasses = {
    regular: 'bg-[#f0f4f2] text-[#111813] border-none shadow-inner',
    special: 'bg-[#fff8e1] text-yellow-700 border-2 border-yellow-400',
    star: 'border-2 border-primary text-primary-dark font-bold shadow-sm',
    complementary: 'bg-gray-200 text-[#111813] font-bold',
    joker: 'bg-surface-light border border-gray-300 text-sm font-bold'
  };

  return (
    <div className={`flex items-center justify-center rounded-full font-bold transition-all ${sizeClasses[size]} ${typeClasses[type]}`}>
      {number}
    </div>
  );
};

export default Ball;
