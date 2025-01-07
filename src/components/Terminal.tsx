import React, { useState, useRef, useEffect } from 'react';
import { toast } from '@/components/ui/use-toast';

interface Command {
  command: string;
  response: string;
}

const AVAILABLE_COMMANDS = {
  help: 'Shows available commands',
  clear: 'Clears the terminal',
  balance: 'Shows your current balance',
  transactions: 'Shows your transaction history',
  info: 'Shows your personal information',
};

const Terminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Command[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
    inputRef.current?.focus();
  }, [history]);

  const handleCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim();
    let response = '';

    switch (command) {
      case 'help':
        response = Object.entries(AVAILABLE_COMMANDS)
          .map(([cmd, desc]) => `${cmd} - ${desc}`)
          .join('\n');
        break;
      case 'clear':
        setHistory([]);
        return;
      case 'balance':
        response = 'Current Balance: $1,234.56';
        break;
      case 'transactions':
        response = `Recent Transactions:
- 2024-02-20: -$50.00 (Coffee Shop)
- 2024-02-19: +$1000.00 (Salary)
- 2024-02-18: -$25.00 (Bookstore)`;
        break;
      case 'info':
        response = `Personal Information:
Name: John Doe
Email: john@example.com
Account Type: Premium
Member Since: 2024-01-01`;
        break;
      case '':
        return;
      default:
        response = `Command not found: ${command}. Type 'help' for available commands.`;
        toast({
          variant: "destructive",
          title: "Invalid Command",
          description: "Type 'help' to see available commands",
        });
    }

    setHistory(prev => [...prev, { command, response }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
    setInput('');
  };

  return (
    <div className="min-h-screen bg-terminal-bg p-4 font-mono text-terminal-text">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-lg border border-terminal-accent/20 bg-terminal-bg/95 p-4">
          <div className="mb-4 flex items-center space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
            <span className="ml-2 text-sm text-terminal-text/70">Terminal Wallet v1.0</span>
          </div>
          
          <div 
            ref={terminalRef}
            className="mb-4 h-[60vh] overflow-y-auto rounded bg-terminal-bg/50 p-4"
          >
            <div className="text-terminal-accent mb-4">
              Welcome to Terminal Wallet! Type 'help' to see available commands.
            </div>
            
            {history.map((entry, index) => (
              <div key={index} className="mb-2">
                <div className="flex items-center text-terminal-accent">
                  <span className="mr-2">❯</span>
                  <span>{entry.command}</span>
                </div>
                <div className="ml-4 mt-1 whitespace-pre-wrap text-terminal-text">
                  {entry.response}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="flex items-center">
            <span className="mr-2 text-terminal-accent">❯</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent focus:outline-none"
              autoFocus
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Terminal;