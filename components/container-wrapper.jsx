import { cn } from '@/lib/utils';
import React from 'react';

const ContainerWrapper = ({ className, children, ...rest }) => {
  return (
    <div className={className} {...rest}>
      <div className="container mx-auto h-full w-full">{children}</div>
    </div>
  );
};

export default ContainerWrapper;
