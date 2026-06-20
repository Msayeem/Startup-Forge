
import {Label, ProgressBar} from "@heroui/react";
import React from 'react';

const loading = () => {
    return (
   <div className="flex items-center justify-center h-screen">
      <ProgressBar isIndeterminate aria-label="Loading" className="w-64">
      <Label>Loading...</Label>
      <ProgressBar.Track>
        <ProgressBar.Fill />
      </ProgressBar.Track>
    </ProgressBar>
   </div>
    );
};

export default loading;