import React from 'react';
import { CommandHandlers } from './types';
import { Shield, Code, Terminal, Cpu, Bug, Wrench, MessageSquare, Send, Github, Twitter, Mail, User } from 'lucide-react';

const renderIcon = (icon: JSX.Element) => (
  <span className="mr-2 inline-block text-terminal-accent">{icon}</span>
);

export const AVAILABLE_COMMANDS: Record<string, string> = {
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

export const commandHandlers: CommandHandlers = {
  about: () => (
    <div className="space-y-2 animate-fade-in">
      {renderIcon(<User size={16} />)}
      <span className="font-bold text-terminal-accent">Computer Engineer & Reverse Engineer</span>
      <p className="mt-2">
        Cyber Security Engineer and Reverse Engineer specialising in low-level system architecture 
        and security research. Currently pursuing Computer Engineering at La Sapienza University, 
        Rome. Expert in console modding and vulnerability research, with a focus on PlayStation 
        systems architecture and firmware analysis.
      </p>
      <p className="mt-2 italic text-terminal-accent">"Breaking boundaries, one byte at a time"</p>
    </div>
  ),

  skills: () => (
    <div className="space-y-2 animate-fade-in">
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
  ),

  tools: () => (
    <div className="space-y-2 animate-fade-in">
      {renderIcon(<Wrench size={16} />)}
      <span className="font-bold text-terminal-accent">Tools & Environment:</span>
      <div className="space-y-2 mt-2">
        <p>Development Tools:</p>
        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-terminal-bg/50 rounded">IDA Pro</span>
          <span className="px-2 py-1 bg-terminal-bg/50 rounded">Ghidra</span>
          <span className="px-2 py-1 bg-terminal-bg/50 rounded">WireShark</span>
          <span className="px-2 py-1 bg-terminal-bg/50 rounded">Docker</span>
          <span className="px-2 py-1 bg-terminal-bg/50 rounded">VSCode</span>
          <span className="px-2 py-1 bg-terminal-bg/50 rounded">Git</span>
        </div>
      </div>
    </div>
  ),

  projects: () => (
    <div className="space-y-2 animate-fade-in">
      {renderIcon(<Code size={16} />)}
      <span className="font-bold text-terminal-accent">Featured Projects:</span>
      <div className="space-y-4 mt-2">
        <div className="p-4 bg-terminal-bg/30 rounded-lg hover:bg-terminal-bg/40 transition-colors">
          <h3 className="text-terminal-accent">MetaForge</h3>
          <p>Advanced firmware analysis and modification toolkit</p>
        </div>
        <div className="p-4 bg-terminal-bg/30 rounded-lg hover:bg-terminal-bg/40 transition-colors">
          <h3 className="text-terminal-accent">PFU-PupFileUnpacker</h3>
          <p>PlayStation firmware unpacking and analysis tool</p>
        </div>
      </div>
    </div>
  ),

  focus: () => (
    <div className="space-y-2 animate-fade-in">
      {renderIcon(<Terminal size={16} />)}
      <span className="font-bold text-terminal-accent">Current Focus:</span>
      <ul className="list-disc pl-6 space-y-1">
        <li>Advanced firmware analysis</li>
        <li>Zero-day vulnerability research</li>
        <li>Console security systems</li>
        <li>Low-level optimisation</li>
      </ul>
    </div>
  ),

  contact: () => (
    <div className="space-y-2 animate-fade-in">
      {renderIcon(<MessageSquare size={16} />)}
      <span className="font-bold text-terminal-accent">Connect:</span>
      <div className="space-y-1">
        <p>{renderIcon(<Send size={16} />)}Discord: Available on request</p>
        <p>{renderIcon(<Send size={16} />)}Telegram: @SeregonWar</p>
        <p>{renderIcon(<Mail size={16} />)}Email: seregonwar@gmail.com</p>
      </div>
    </div>
  ),

  socials: () => (
    <div className="space-y-2 animate-fade-in">
      {renderIcon(<Github size={16} />)}
      <span className="font-bold text-terminal-accent">Social Links:</span>
      <div className="space-y-1">
        <p>{renderIcon(<Twitter size={16} />)}Twitter: @SeregonWar</p>
        <p>{renderIcon(<Github size={16} />)}GitHub: github.com/seregonwar</p>
        <p>Ko-fi: ko-fi.com/seregon</p>
      </div>
    </div>
  ),

  help: () => (
    <div className="space-y-1 animate-fade-in">
      {Object.entries(AVAILABLE_COMMANDS).map(([cmd, desc]) => (
        <div key={cmd} className="flex">
          <span className="text-terminal-accent w-20">{cmd}</span>
          <span className="text-terminal-text/70">{desc}</span>
        </div>
      ))}
    </div>
  ),
};