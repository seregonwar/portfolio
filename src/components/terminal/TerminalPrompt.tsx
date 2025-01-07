import React from 'react';

interface TerminalPromptProps {
  input: string;
  setInput: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const TerminalPrompt = ({ input, setInput, onSubmit }: TerminalPromptProps) => {
  return (
    <form onSubmit={onSubmit} className="flex items-center group">
      <span className="text-terminal-accent mr-2 flex items-center">
        <span className="text-terminal-text/70 mr-1">seregon</span>
        <span className="text-terminal-accent/70">@</span>
        <span className="text-terminal-text/70 mr-1">terminal</span>
        <span className="text-terminal-accent">❯</span>
      </span>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 bg-transparent focus:outline-none text-terminal-text placeholder-terminal-text/30"
        placeholder="Type 'help' for available commands..."
        autoFocus
      />
    </form>
  );
};

export default TerminalPrompt;