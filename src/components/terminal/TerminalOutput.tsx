import React from 'react';
import { Command } from './types';

interface TerminalOutputProps {
  history: Command[];
}

const TerminalOutput = ({ history }: TerminalOutputProps) => {
  return (
    <div className="space-y-4">
      {history.map((entry, index) => (
        <div key={index} className="space-y-2 animate-fade-in">
          <div className="flex items-center text-terminal-accent group">
            <span className="text-terminal-text/70 mr-1 group-hover:text-terminal-text/90 transition-colors duration-200">seregon@terminal</span>
            <span className="text-terminal-accent mr-2 animate-pulse">❯</span>
            <span className="group-hover:text-terminal-accent/90 transition-colors duration-200">{entry.command}</span>
          </div>
          <div className="ml-4 text-terminal-text whitespace-pre-wrap hover:text-terminal-text/90 transition-colors duration-200">
            {entry.response}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TerminalOutput;