import { WSProtocolError } from './ws-protocol-error';

export class WSParseError extends WSProtocolError {
  constructor(rawInput: string, cause?: unknown) {
    super(`Failed to parse WebSocket message: ${cause instanceof Error ? cause.message : String(cause)}`, rawInput);
    this.name = 'WSParseError';
  }
}
