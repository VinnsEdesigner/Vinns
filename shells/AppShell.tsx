import { useState } from 'react';
import { TabType } from '@/types';
import { TacticalHeader } from '@/shared/ui/TacticalHeader';
import { TacticalRail } from '@/shared/ui/TacticalRail';

import { TerminalFeature } from '@/features/terminal/TerminalFeature';
import { PulseFeature } from '@/features/pulse/PulseFeature';
import { ReposFeature } from '@/features/repos/ReposFeature';
import { SnippetsFeature } from '@/features/snippets/SnippetsFeature';
import { LogsFeature } from '@/features/logs/LogsFeature';
import { SettingsFeature } from '@/features/settings/SettingsFeature';

export function AppShell() {
  const [activeTab, setActiveTab] = useState<TabType>('TERMINAL');

  return (
    <div className="flex flex-col h-screen w-full bg-black text-white font-mono overflow-hidden select-none">
      <TacticalHeader />
      
      <main className="flex-1 overflow-hidden relative">
        <div className="h-full w-full">
          {activeTab === 'TERMINAL' && <TerminalFeature />}
          {activeTab === 'PULSE' && <PulseFeature />}
          {activeTab === 'REPOS' && <ReposFeature />}
          {activeTab === 'SNIPPETS' && <SnippetsFeature />}
          {activeTab === 'LOGS' && <LogsFeature />}
          {activeTab === 'SETTINGS' && <SettingsFeature />}
        </div>
      </main>

      <TacticalRail activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}
