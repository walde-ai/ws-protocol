/**
 * The set of agents that can be launched as autonomous background tasks.
 * Only "architect" and "coder" support prompt mode (non-interactive).
 */
export type BackgroundTaskAgent = 'architect' | 'coder';

export type TaskRunData = {
  /**
   * Agent to launch as a background task. Constrained to "architect" or
   * "coder" — the only agents that run autonomously in prompt mode.
   */
  agent: BackgroundTaskAgent;
  projectId: string;
  briefId: string;
  /**
   * The serialized brief content injected directly into the agent's initial
   * prompt so it does not have to re-read the brief via brief_get.
   */
  initialPrompt: string;
  /**
   * Client-generated UUID used to match the task.started response back to the
   * originating task.run call.
   */
  correlationId: string;
};
