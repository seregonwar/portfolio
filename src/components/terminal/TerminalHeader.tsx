import React from 'react';

const TerminalHeader = () => {
  return (
    <div className="flex items-center justify-between p-2 bg-terminal-bg/90 border-b border-terminal-accent/20">
      <div className="flex items-center space-x-2">
        <div className="h-3 w-3 rounded-full bg-red-500"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
      </div>
      <span className="text-sm text-terminal-text/70">seregon@terminal:~</span>
      <div className="w-20"></div>
    </div>
  );
};

export default TerminalHeader;