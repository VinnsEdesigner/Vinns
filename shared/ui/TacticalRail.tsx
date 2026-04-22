import { TabType } from '@/types';
import { TABS } from '@/shared/constants';

interface TacticalRailProps {
  activeTab: TabType;
  onTabChange: (id: TabType) => void;
}

export function TacticalRail({ activeTab, onTabChange }: TacticalRailProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-black border-t-2 border-zinc-900 pb-safe">
      <nav className="h-14 flex font-mono relative">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex-1 flex flex-col items-center justify-center border-r border-zinc-900 last:border-r-0 transition-none active:bg-zinc-800 ${
                isActive ? 'bg-white text-black' : 'bg-black text-zinc-600 hover:bg-zinc-950 hover:text-cyan-400'
              }`}
            >
              <Icon size={16} strokeWidth={isActive ? 3 : 2} />
              <span className={`text-[9px] mt-1 tracking-[0.1em] ${isActive ? 'font-black' : 'font-bold'}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
