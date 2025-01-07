import React, { useState, useRef, useEffect } from 'react';
import { toast } from '@/components/ui/use-toast';
import TerminalHeader from './terminal/TerminalHeader';
import TerminalPrompt from './terminal/TerminalPrompt';
import TerminalOutput from './terminal/TerminalOutput';
import { Command } from './terminal/types';
import { commandHandlers, AVAILABLE_COMMANDS } from './terminal/commandHandlers';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Command[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  // Auto-focus input on mount and when clicking anywhere in the terminal
  useEffect(() => {
    const terminal = terminalRef.current;
    const handleClick = (e: MouseEvent) => {
      const input = document.querySelector('input') as HTMLInputElement;
      if (input && e.target !== input) {
        input.focus();
      }
    };

    if (terminal) {
      terminal.addEventListener('click', handleClick);
    }

    return () => {
      if (terminal) {
        terminal.removeEventListener('click', handleClick);
      }
    };
  }, []);

  const handleCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim();
    
    if (command === '') return;
    if (command === 'clear') {
      setHistory([]);
      return;
    }

    const handler = commandHandlers[command];
    if (handler) {
      setHistory(prev => [...prev, { command, response: handler() }]);
    } else {
      toast({
        variant: "destructive",
        title: "Invalid Command",
        description: "Type 'help' to see available commands",
      });
      setHistory(prev => [...prev, { 
        command, 
        response: `Command not found: ${command}. Type 'help' for available commands.`
      }]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
    setInput('');
  };

  return (
    <div className="min-h-screen bg-terminal-bg p-4 font-mono text-terminal-text">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-lg border border-terminal-accent/20 bg-terminal-bg/95 overflow-hidden shadow-lg backdrop-blur-sm">
          <TerminalHeader />
          
          <div 
            ref={terminalRef}
            className="h-[70vh] overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-terminal-accent/20 scrollbar-track-transparent"
          >
            <div className="text-terminal-accent animate-fade-in">
              <div className="mb-4 text-center">
                <pre className="text-terminal-accent inline-block text-left">
{`
 ____                               
/ ___|  ___ _ __ ___  __ _  ___  _ __  
\\___ \\ / _ \\ '__/ _ \\/ _\` |/ _ \\| '_ \\ 
 ___) |  __/ | |  __/ (_| | (_) | | | |
|____/ \\___|_|  \\___|\\__, |\\___/|_| |_|
                     |___/             
`}
                </pre>
              </div>
              <p className="mb-2">Welcome to my terminal portfolio! Type 'help' to see available commands.</p>
              <p className="text-terminal-text/70">'Breaking boundaries, one byte at a time'</p>
            </div>
            
            <TerminalOutput history={history} />
          </div>

          <div className="p-4 border-t border-terminal-accent/20">
            <TerminalPrompt 
              input={input}
              setInput={setInput}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;