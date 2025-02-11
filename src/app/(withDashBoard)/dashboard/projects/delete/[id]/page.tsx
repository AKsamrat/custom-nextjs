/* eslint-disable @typescript-eslint/no-explicit-any */
import DeleteProject from '@/components/ui/project/DeleteProject';
import React from 'react';

const Delete = ({ params }: any) => {
  const { id }: any = params;
  return (
    <div>
      <DeleteProject id={id}></DeleteProject>
    </div>
  );
};

export default Delete;