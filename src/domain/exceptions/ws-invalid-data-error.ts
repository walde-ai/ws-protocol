import { WSProtocolError } from './ws-protocol-error';

export class WSInvalidDataError extends WSProtocolError {
  readonly op: string;

  constructor(op: string, rawInput: string) {
    super(`Invalid data for operation: ${op}`, rawInput);
    this.name = 'WSInvalidDataError';
    this.op = op;
  }
}
