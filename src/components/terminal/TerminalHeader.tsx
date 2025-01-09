import React from 'react';

interface TerminalHeaderProps {
  isTyping?: boolean;
}

const TerminalHeader = ({ isTyping }: TerminalHeaderProps) => {
  return (
    <div className="flex items-center justify-between p-2 bg-terminal-bg/90 border-b border-terminal-accent/20">
      <div className="flex items-center space-x-2">
        <div className="h-3 w-3 rounded-full bg-red-500 transition-all duration-200 hover:bg-red-600"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-500 transition-all duration-200 hover:bg-yellow-600"></div>
        <div className="h-3 w-3 rounded-full bg-green-500 transition-all duration-200 hover:bg-green-600"></div>
      </div>
      <span className="text-sm text-terminal-text/70 flex items-center gap-2">
        seregon@terminal:~
        {isTyping && (
          <span className="inline-block w-2 h-4 bg-terminal-accent animate-blink"></span>
        )}
      </span>
      <div className="w-20"></div>
    </div>
  );
};

export default TerminalHeader;