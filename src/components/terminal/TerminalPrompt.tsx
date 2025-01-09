import React from 'react';

interface TerminalPromptProps {
  input: string;
  setInput: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isTyping?: boolean;
}

const TerminalPrompt = ({ input, setInput, onSubmit, isTyping }: TerminalPromptProps) => {
  return (
    <form onSubmit={onSubmit} className="flex items-center group relative">
      <span className="text-terminal-accent mr-2 flex items-center">
        <span className="text-terminal-text/70 mr-1">seregon</span>
        <span className="text-terminal-accent/70">@</span>
        <span className="text-terminal-text/70 mr-1">terminal</span>
        <span className="text-terminal-accent animate-pulse">❯</span>
      </span>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 bg-transparent focus:outline-none text-terminal-text placeholder-terminal-text/30 transition-all duration-200"
        placeholder="Type 'help' for available commands..."
        autoFocus
      />
      {isTyping && (
        <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-4 bg-terminal-accent animate-blink"></span>
      )}
    </form>
  );
};

export default TerminalPrompt;