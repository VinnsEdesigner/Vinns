export type TabType = 'TERMINAL' | 'PULSE' | 'REPOS' | 'SNIPPETS' | 'LOGS' | 'SETTINGS';

export type MessageRole = 'user' | 'system' | 'agent' | 'card';

export interface Message {
  id: string;
  role: MessageRole;
  content: string;
  metadata?: Record<string, any>;
}

export interface TabConfig {
  id: TabType;
  label: string;
  icon: any;
}
