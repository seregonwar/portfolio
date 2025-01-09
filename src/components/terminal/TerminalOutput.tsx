import React from 'react';
import { Command } from './types';
import { Shield, Code, Terminal, Cpu, Bug, Wrench, MessageSquare, Send, Github, Twitter, Mail, User } from 'lucide-react';

interface TerminalOutputProps {
  history: Command[];
}

const TerminalOutput = ({ history }: TerminalOutputProps) => {
  const renderIcon = (icon: JSX.Element) => (
    <span className="mr-2 inline-block text-terminal-accent">{icon}</span>
  );

  const renderSkillIcons = () => (
    <div className="flex space-x-4 my-4 animate-fade-in">
      <img src="https://skillicons.dev/icons?i=cpp,java,python,swift,assembly" alt="Programming Skills" className="hover:scale-105 transition-transform" />
    </div>
  );

  const renderToolIcons = () => (
    <div className="flex space-x-4 my-4 animate-fade-in">
      <img src="https://skillicons.dev/icons?i=docker,linux,vscode,git" alt="Tools" className="hover:scale-105 transition-transform" />
    </div>
  );

  const renderSocialBadge = (platform: string, color: string) => (
    <span className={`inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-${color} text-white mr-2 hover:opacity-90 transition-opacity animate-fade-in`}>
      {platform}
    </span>
  );

  const renderResponse = (response: string | JSX.Element) => {
    if (typeof response === 'string') {
      if (response.includes("Core Skills:")) {
        return (
          <div>
            {response}
            {renderSkillIcons()}
          </div>
        );
      }
      if (response.includes("Tools & Environment")) {
        return (
          <div>
            {response}
            {renderToolIcons()}
          </div>
        );
      }
      return response;
    }
    return response;
  };

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
            {renderResponse(entry.response)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TerminalOutput;