import { IWSProtocol } from '../../domain/ports/i-ws-protocol';
import { IWSSession } from '../../domain/ports/i-ws-session';
import { IWSOperationListener } from '../../domain/ports/i-ws-operation-listener';
import { WSOperation } from '../../domain/entities/ws-operation';
import { WSParseError } from '../../domain/exceptions/ws-parse-error';
import { WSUnknownOperationError } from '../../domain/exceptions/ws-unknown-operation-error';
import { WSInvalidDataError } from '../../domain/exceptions/ws-invalid-data-error';
import { WSProtocolError } from '../../domain/exceptions/ws-protocol-error';
import { ProtocolV20260411Operations } from './operations/operations-map';

type ListenerMap = {
  [K in keyof ProtocolV20260411Operations]?: IWSOperationListener<ProtocolV20260411Operations[K], ProtocolV20260411Operations>;
};

export interface WSProtocolV20260411Config {
  listeners?: ListenerMap;
  mode?: 'server' | 'client';
}

export const WS_PROTOCOL_V20260411_NAME = 'ws.walde.ai-2026-04-11';

function isValidChatSendData(data: unknown): data is ProtocolV20260411Operations['chat.send'] {
  return (
    typeof data === 'object' &&
    data !== null &&
    typeof (data as Record<string, unknown>).chatId === 'string' &&
    (data as Record<string, unknown>).chatId !== '' &&
    typeof (data as Record<string, unknown>).message === 'string' &&
    (data as Record<string, unknown>).message !== ''
  );
}

function isValidChatNewData(data: unknown): data is ProtocolV20260411Operations['chat.new'] {
  return (
    typeof data === 'object' &&
    data !== null &&
    typeof (data as Record<string, unknown>).message === 'string' &&
    (data as Record<string, unknown>).message !== '' &&
    typeof (data as Record<string, unknown>).agent === 'string' &&
    (data as Record<string, unknown>).agent !== '' &&
    typeof (data as Record<string, unknown>).projectId === 'string' &&
    (data as Record<string, unknown>).projectId !== '' &&
    // briefId is required but the empty string is the sentinel for "no
    // Brief" — only the presence of a string is enforced here.
    typeof (data as Record<string, unknown>).briefId === 'string'
  );
}

function isValidChatStreamData(data: unknown): data is ProtocolV20260411Operations['chat.stream'] {
  return (
    typeof data === 'object' &&
    data !== null &&
    typeof (data as Record<string, unknown>).chatId === 'string' &&
    typeof (data as Record<string, unknown>).delta === 'string'
  );
}

function isValidChatStreamEndData(data: unknown): data is ProtocolV20260411Operations['chat.stream_end'] {
  return (
    typeof data === 'object' &&
    data !== null &&
    typeof (data as Record<string, unknown>).chatId === 'string'
  );
}

function isValidChatCreatedData(data: unknown): data is ProtocolV20260411Operations['chat.created'] {
  return (
    typeof data === 'object' &&
    data !== null &&
    typeof (data as Record<string, unknown>).chatId === 'string' &&
    (data as Record<string, unknown>).chatId !== ''
  );
}

function isValidChatReadyData(data: unknown): data is ProtocolV20260411Operations['chat.ready'] {
  return (
    typeof data === 'object' &&
    data !== null &&
    typeof (data as Record<string, unknown>).chatId === 'string' &&
    (data as Record<string, unknown>).chatId !== ''
  );
}

function isValidChatStatusData(data: unknown): data is ProtocolV20260411Operations['chat.status'] {
  return (
    typeof data === 'object' &&
    data !== null &&
    typeof (data as Record<string, unknown>).chatId === 'string' &&
    (data as Record<string, unknown>).chatId !== '' &&
    typeof (data as Record<string, unknown>).label === 'string'
  );
}

function isValidChatTerminatedData(data: unknown): data is ProtocolV20260411Operations['chat.terminated'] {
  return (
    typeof data === 'object' &&
    data !== null &&
    typeof (data as Record<string, unknown>).chatId === 'string' &&
    (data as Record<string, unknown>).chatId !== ''
  );
}

function isValidChatAbortData(data: unknown): data is ProtocolV20260411Operations['chat.abort'] {
  return (
    typeof data === 'object' &&
    data !== null &&
    typeof (data as Record<string, unknown>).chatId === 'string' &&
    (data as Record<string, unknown>).chatId !== ''
  );
}

function isValidChatAbortAckData(data: unknown): data is ProtocolV20260411Operations['chat.abort_ack'] {
  return (
    typeof data === 'object' &&
    data !== null &&
    typeof (data as Record<string, unknown>).chatId === 'string' &&
    (data as Record<string, unknown>).chatId !== ''
  );
}

function isValidTaskRunData(data: unknown): data is ProtocolV20260411Operations['task.run'] {
  return (
    typeof data === 'object' &&
    data !== null &&
    typeof (data as Record<string, unknown>).agent === 'string' &&
    (data as Record<string, unknown>).agent !== '' &&
    typeof (data as Record<string, unknown>).projectId === 'string' &&
    (data as Record<string, unknown>).projectId !== '' &&
    typeof (data as Record<string, unknown>).briefId === 'string' &&
    (data as Record<string, unknown>).briefId !== '' &&
    typeof (data as Record<string, unknown>).initialPrompt === 'string' &&
    (data as Record<string, unknown>).initialPrompt !== '' &&
    typeof (data as Record<string, unknown>).correlationId === 'string' &&
    (data as Record<string, unknown>).correlationId !== ''
  );
}

function isValidTaskCancelData(data: unknown): data is ProtocolV20260411Operations['task.cancel'] {
  return (
    typeof data === 'object' &&
    data !== null &&
    typeof (data as Record<string, unknown>).taskId === 'string' &&
    (data as Record<string, unknown>).taskId !== ''
  );
}

function isValidTaskStartedData(data: unknown): data is ProtocolV20260411Operations['task.started'] {
  return (
    typeof data === 'object' &&
    data !== null &&
    typeof (data as Record<string, unknown>).taskId === 'string' &&
    (data as Record<string, unknown>).taskId !== '' &&
    typeof (data as Record<string, unknown>).correlationId === 'string' &&
    (data as Record<string, unknown>).correlationId !== ''
  );
}

function isValidTaskCancelledData(data: unknown): data is ProtocolV20260411Operations['task.cancelled'] {
  return (
    typeof data === 'object' &&
    data !== null &&
    typeof (data as Record<string, unknown>).taskId === 'string' &&
    (data as Record<string, unknown>).taskId !== ''
  );
}

function isValidTaskCompletedData(data: unknown): data is ProtocolV20260411Operations['task.completed'] {
  return (
    typeof data === 'object' &&
    data !== null &&
    typeof (data as Record<string, unknown>).briefId === 'string' &&
    (data as Record<string, unknown>).briefId !== ''
  );
}

function isValidTaskFailedData(data: unknown): data is ProtocolV20260411Operations['task.failed'] {
  return (
    typeof data === 'object' &&
    data !== null &&
    typeof (data as Record<string, unknown>).briefId === 'string' &&
    (data as Record<string, unknown>).briefId !== ''
  );
}

function isValidErrorData(data: unknown): data is ProtocolV20260411Operations['error'] {
  return (
    typeof data === 'object' &&
    data !== null &&
    typeof (data as Record<string, unknown>).code === 'string' &&
    typeof (data as Record<string, unknown>).message === 'string'
  );
}

const VALID_BRIEF_STATES = new Set(['DRAFT', 'INTENT_DEFINED', 'TECH_SPEC_DEFINED', 'IMPLEMENTING', 'IMPLEMENTED', 'FAILED', 'ARCHIVED']);

function isValidBriefUpdatedData(data: unknown): data is ProtocolV20260411Operations['brief.updated'] {
  if (
    typeof data !== 'object' ||
    data === null ||
    typeof (data as Record<string, unknown>).briefId !== 'string' ||
    (data as Record<string, unknown>).briefId === ''
  ) {
    return false;
  }
  const d = data as Record<string, unknown>;
  if (typeof d.state === 'string' && !VALID_BRIEF_STATES.has(d.state as string)) {
    return false;
  }
  if (typeof d.field === 'string' && (d.field === 'title' || d.field === 'intent')) {
    return typeof d.delta === 'string';
  }
  if (d.complete === true) {
    return typeof d.title === 'string' && typeof d.intent === 'string' && typeof d.state === 'string';
  }
  return typeof d.state === 'string';
}

function isValidUiNavData(data: unknown): data is ProtocolV20260411Operations['ui.nav'] {
  return (
    typeof data === 'object' &&
    data !== null &&
    typeof (data as Record<string, unknown>).route === 'string' &&
    (data as Record<string, unknown>).route !== ''
  );
}

const OPERATION_VALIDATORS: { [K in keyof ProtocolV20260411Operations]: (data: unknown) => data is ProtocolV20260411Operations[K] } = {
  'chat.send': isValidChatSendData,
  'chat.new': isValidChatNewData,
  'chat.stream': isValidChatStreamData,
  'chat.stream_end': isValidChatStreamEndData,
  'chat.created': isValidChatCreatedData,
  'chat.ready': isValidChatReadyData,
  'chat.status': isValidChatStatusData,
  'chat.terminated': isValidChatTerminatedData,
  'chat.abort': isValidChatAbortData,
  'chat.abort_ack': isValidChatAbortAckData,
  'task.run': isValidTaskRunData,
  'task.cancel': isValidTaskCancelData,
  'task.started': isValidTaskStartedData,
  'task.cancelled': isValidTaskCancelledData,
  'task.completed': isValidTaskCompletedData,
  'task.failed': isValidTaskFailedData,
  'brief.updated': isValidBriefUpdatedData,
  'ui.nav': isValidUiNavData,
  'error': isValidErrorData,
};

function isKnownOperation(op: string): op is keyof ProtocolV20260411Operations {
  return Object.prototype.hasOwnProperty.call(OPERATION_VALIDATORS, op);
}

export class WSProtocolV20260411 implements IWSProtocol<ProtocolV20260411Operations> {
  readonly name = WS_PROTOCOL_V20260411_NAME;

  private readonly listeners: ListenerMap;
  private readonly mode: 'server' | 'client';

  constructor(config: WSProtocolV20260411Config) {
    this.listeners = config.listeners ?? {};
    this.mode = config.mode ?? 'server';
  }

  parse(raw: string): WSOperation<ProtocolV20260411Operations> {
    let parsed: unknown;
    try {
      parsed = JSON.parse(raw);
    } catch (cause) {
      throw new WSParseError(raw, cause);
    }

    if (
      typeof parsed !== 'object' ||
      parsed === null ||
      typeof (parsed as Record<string, unknown>).op !== 'string' ||
      typeof (parsed as Record<string, unknown>).data !== 'object' ||
      (parsed as Record<string, unknown>).data === null
    ) {
      throw new WSParseError(raw, 'Message must have "op" (string) and "data" (object) fields');
    }

    const op = (parsed as Record<string, unknown>).op as string;
    const data = (parsed as Record<string, unknown>).data;

    if (!isKnownOperation(op)) {
      throw new WSUnknownOperationError(op, raw);
    }

    if (!OPERATION_VALIDATORS[op](data)) {
      throw new WSInvalidDataError(op, raw);
    }

    return { op, data: data as ProtocolV20260411Operations[typeof op] } as WSOperation<ProtocolV20260411Operations>;
  }

  encode<K extends keyof ProtocolV20260411Operations>(op: K, data: ProtocolV20260411Operations[K]): string {
    return JSON.stringify({ op, data });
  }

  async handleMessage(raw: string, session: IWSSession<ProtocolV20260411Operations>): Promise<void> {
    let operation: WSOperation<ProtocolV20260411Operations>;

    try {
      operation = this.parse(raw);
    } catch (error) {
      if (this.mode === 'server') {
        if (error instanceof WSParseError) {
          await session.send('error', { code: 'PARSE_ERROR', message: 'Message could not be parsed' });
          return;
        } else if (error instanceof WSUnknownOperationError) {
          await session.send('error', { code: 'UNKNOWN_OP', message: 'Unknown operation' });
          return;
        } else if (error instanceof WSInvalidDataError) {
          await session.send('error', { code: 'INVALID_DATA', message: 'Invalid operation data' });
          return;
        } else {
          throw error;
        }
      } else if (this.mode === 'client') {
        throw error;
      } else {
        throw new WSProtocolError(`Unexpected mode: ${String(this.mode)}`, raw);
      }
    }

    const listener = this.listeners[operation.op] as IWSOperationListener<ProtocolV20260411Operations[typeof operation.op], ProtocolV20260411Operations> | undefined;

    if (!listener) {
      if (this.mode === 'server') {
        await session.send('error', { code: 'UNKNOWN_OP', message: `No listener registered for operation: ${String(operation.op)}` });
      } else if (this.mode === 'client') {
        return;
      } else {
        throw new WSProtocolError(`Unexpected mode: ${String(this.mode)}`, raw);
      }
      return;
    }

    try {
      await listener.handle({ session, data: operation.data as ProtocolV20260411Operations[typeof operation.op] });
    } catch (error) {
      if (this.mode === 'server') {
        await session.send('error', { code: 'INTERNAL_ERROR', message: 'An internal error occurred' });
      } else if (this.mode === 'client') {
        throw error;
      } else {
        throw new WSProtocolError(`Unexpected mode: ${String(this.mode)}`, raw);
      }
    }
  }
}
