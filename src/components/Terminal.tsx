import React, { useState, useRef, useEffect } from 'react';
import { toast } from '@/components/ui/use-toast';
import { 
  Github, 
  Twitter, 
  Mail, 
  User, 
  Shield, 
  Code, 
  Terminal as TerminalIcon,
  Cpu,
  Bug,
  Wrench,
  MessageSquare,
  Send
} from 'lucide-react';

interface Command {
  command: string;
  response: string | JSX.Element;
}

const AVAILABLE_COMMANDS = {
  help: 'Shows available commands',
  clear: 'Clears the terminal',
  about: 'Shows information about me',
  skills: 'Lists my core skills',
  tools: 'Shows my tools and environment',
  projects: 'Displays featured projects',
  focus: 'Shows my current focus areas',
  contact: 'Displays contact information',
  socials: 'Shows social media links',
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

  const renderIcon = (icon: JSX.Element) => (
    <span className="mr-2 inline-block">{icon}</span>
  );

  const handleCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim();
    let response: string | JSX.Element = '';

    switch (command) {
      case 'help':
        response = Object.entries(AVAILABLE_COMMANDS)
          .map(([cmd, desc]) => `${cmd} - ${desc}`)
          .join('\n');
        break;
      case 'clear':
        setHistory([]);
        return;
      case 'about':
        response = (
          <div className="space-y-2">
            {renderIcon(<User size={16} />)}
            <span className="font-bold text-terminal-accent">Computer Engineer & Reverse Engineer</span>
            <p className="mt-2">
              Cyber Security Engineer and Reverse Engineer specialising in low-level system architecture 
              and security research. Currently pursuing Computer Engineering at La Sapienza University, 
              Rome. Expert in console modding and vulnerability research, with a focus on PlayStation 
              systems architecture and firmware analysis.
            </p>
          </div>
        );
        break;
      case 'skills':
        response = (
          <div className="space-y-2">
            {renderIcon(<Shield size={16} />)}
            <span className="font-bold text-terminal-accent">Core Skills:</span>
            <ul className="list-disc pl-6 space-y-1">
              <li>{renderIcon(<Bug size={16} />)}Reverse Engineering - Binary analysis & firmware modification</li>
              <li>{renderIcon(<Shield size={16} />)}Exploit Development - Vulnerability research</li>
              <li>{renderIcon(<Code size={16} />)}Low Level Programming - Assembly & system internals</li>
              <li>{renderIcon(<Cpu size={16} />)}Console Engineering - Gaming console architecture</li>
              <li>{renderIcon(<Wrench size={16} />)}Tool Development - Security frameworks</li>
            </ul>
          </div>
        );
        break;
      case 'focus':
        response = (
          <div className="space-y-2">
            {renderIcon(<TerminalIcon size={16} />)}
            <span className="font-bold text-terminal-accent">Current Focus:</span>
            <ul className="list-disc pl-6 space-y-1">
              <li>Advanced firmware analysis</li>
              <li>Zero-day vulnerability research</li>
              <li>Console security systems</li>
              <li>Low-level optimisation</li>
            </ul>
          </div>
        );
        break;
      case 'contact':
        response = (
          <div className="space-y-2">
            {renderIcon(<MessageSquare size={16} />)}
            <span className="font-bold text-terminal-accent">Connect:</span>
            <div className="space-y-1">
              <p>{renderIcon(<Send size={16} />)}Discord: Available on request</p>
              <p>{renderIcon(<Send size={16} />)}Telegram: Available on request</p>
              <p>{renderIcon(<Mail size={16} />)}Email: Available on request</p>
            </div>
          </div>
        );
        break;
      case 'socials':
        response = (
          <div className="space-y-2">
            {renderIcon(<Github size={16} />)}
            <span className="font-bold text-terminal-accent">Social Links:</span>
            <div className="space-y-1">
              <p>{renderIcon(<Twitter size={16} />)}Twitter: @seregon</p>
              <p>{renderIcon(<Github size={16} />)}GitHub: github.com/seregon</p>
            </div>
          </div>
        );
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
            <span className="ml-2 text-sm text-terminal-text/70">Seregon's Terminal Portfolio</span>
          </div>
          
          <div 
            ref={terminalRef}
            className="mb-4 h-[60vh] overflow-y-auto rounded bg-terminal-bg/50 p-4"
          >
            <div className="text-terminal-accent mb-4">
              Welcome to my terminal portfolio! Type 'help' to see available commands.
              <p className="mt-2 text-terminal-text/70">Breaking boundaries, one byte at a time</p>
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