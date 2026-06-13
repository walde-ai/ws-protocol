export class WSProtocolError extends Error {
  readonly rawInput: string;

  constructor(message: string, rawInput: string) {
    super(message);
    this.name = 'WSProtocolError';
    this.rawInput = rawInput;
  }
}
