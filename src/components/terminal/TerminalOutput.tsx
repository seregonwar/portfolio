import React from 'react';
import { Command } from './types';

interface TerminalOutputProps {
  history: Command[];
}

const TerminalOutput = ({ history }: TerminalOutputProps) => {
  return (
    <div className="space-y-4">
      {history.map((entry, index) => (
        <div key={index} className="space-y-2">
          <div className="flex items-center text-terminal-accent">
            <span className="text-terminal-text/70 mr-1">seregon@terminal</span>
            <span className="text-terminal-accent mr-2">❯</span>
            <span>{entry.command}</span>
          </div>
          <div className="ml-4 text-terminal-text whitespace-pre-wrap">
            {entry.response}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TerminalOutput;