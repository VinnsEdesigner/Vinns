import { Activity, Folder, HardDrive, ClipboardList, Settings, TerminalSquare } from 'lucide-react';
import { TabConfig } from '@/types';

export const TABS: TabConfig[] = [
  { id: 'TERMINAL', label: 'Terminal', icon: TerminalSquare },
  { id: 'PULSE', label: 'Metrics', icon: Activity },
  { id: 'REPOS', label: 'Code', icon: Folder },
  { id: 'SNIPPETS', label: 'Memory', icon: HardDrive },
  { id: 'LOGS', label: 'Logs', icon: ClipboardList },
  { id: 'SETTINGS', label: 'Settings', icon: Settings },
];
