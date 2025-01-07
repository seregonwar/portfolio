export interface Command {
  command: string;
  response: string | JSX.Element;
}

export interface CommandHandlers {
  [key: string]: () => string | JSX.Element;
}