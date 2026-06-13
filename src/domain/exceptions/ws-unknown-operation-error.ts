import { WSProtocolError } from './ws-protocol-error';

export class WSUnknownOperationError extends WSProtocolError {
  readonly op: string;

  constructor(op: string, rawInput: string) {
    super(`Unknown operation: ${op}`, rawInput);
    this.name = 'WSUnknownOperationError';
    this.op = op;
  }
}
