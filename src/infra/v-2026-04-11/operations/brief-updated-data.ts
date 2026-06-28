export type BriefState = 'DRAFT' | 'INTENT_DEFINED' | 'TECH_SPEC_DEFINED' | 'IMPLEMENTING' | 'IMPLEMENTED' | 'FAILED' | 'ARCHIVED';

export type BriefUpdatedStreamingDelta = {
  briefId: string;
  state?: BriefState;
  field: 'title' | 'intent';
  delta: string;
};

export type BriefUpdatedCompleteFrame = {
  briefId: string;
  state: BriefState;
  title: string;
  intent: string;
  complete: true;
};

export type BriefUpdatedStateFrame = {
  briefId: string;
  state: BriefState;
};

export type BriefUpdatedData =
  | BriefUpdatedStreamingDelta
  | BriefUpdatedCompleteFrame
  | BriefUpdatedStateFrame;
