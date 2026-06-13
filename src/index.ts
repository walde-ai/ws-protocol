// Domain entities
export { WSOperation } from './domain/entities/ws-operation';

// Domain exceptions
export { WSProtocolError } from './domain/exceptions/ws-protocol-error';
export { WSParseError } from './domain/exceptions/ws-parse-error';
export { WSUnknownOperationError } from './domain/exceptions/ws-unknown-operation-error';
export { WSInvalidDataError } from './domain/exceptions/ws-invalid-data-error';

// Domain ports
export { IWSProtocol } from './domain/ports/i-ws-protocol';
export { IWSSession } from './domain/ports/i-ws-session';
export { IWSOperationListener } from './domain/ports/i-ws-operation-listener';

// Protocol v2026-04-11 operations
export { ChatSendData } from './infra/v-2026-04-11/operations/chat-send-data';
export { ChatNewData } from './infra/v-2026-04-11/operations/chat-new-data';
export { ChatStreamData } from './infra/v-2026-04-11/operations/chat-stream-data';
export { ChatStreamEndData } from './infra/v-2026-04-11/operations/chat-stream-end-data';
export { ChatCreatedData } from './infra/v-2026-04-11/operations/chat-created-data';
export { ChatReadyData } from './infra/v-2026-04-11/operations/chat-ready-data';
export { ChatStatusData } from './infra/v-2026-04-11/operations/chat-status-data';
export { ChatTerminatedData } from './infra/v-2026-04-11/operations/chat-terminated-data';
export { ChatAbortData } from './infra/v-2026-04-11/operations/chat-abort-data';
export { ChatAbortAckData } from './infra/v-2026-04-11/operations/chat-abort-ack-data';
export { TaskRunData } from './infra/v-2026-04-11/operations/task-run-data';
export type { BackgroundTaskAgent } from './infra/v-2026-04-11/operations/task-run-data';
export { TaskCancelData } from './infra/v-2026-04-11/operations/task-cancel-data';
export { TaskStartedData } from './infra/v-2026-04-11/operations/task-started-data';
export { TaskCancelledData } from './infra/v-2026-04-11/operations/task-cancelled-data';
export { TaskCompletedData } from './infra/v-2026-04-11/operations/task-completed-data';
export { TaskFailedData } from './infra/v-2026-04-11/operations/task-failed-data';
export { ErrorData } from './infra/v-2026-04-11/operations/error-data';
export { ProtocolV20260411Operations } from './infra/v-2026-04-11/operations/operations-map';

// Protocol v2026-04-11 implementation
export { WSProtocolV20260411, WSProtocolV20260411Config, WS_PROTOCOL_V20260411_NAME } from './infra/v-2026-04-11/ws-protocol-v-2026-04-11';
