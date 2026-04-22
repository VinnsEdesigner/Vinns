import { Search } from 'lucide-react';

export function TacticalHeader() {
  return (
    <header className="h-14 bg-black border-b border-dashed border-zinc-800 flex justify-between items-center px-4 font-mono sticky top-0 z-30">
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 bg-red-500 animate-[pulse_2s_infinite]"></div>
        <span className="text-white font-black tracking-widest text-xs uppercase">Nexus_v5</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-zinc-500 text-[9px] uppercase tracking-[0.2em] bg-zinc-950 px-2 py-1 border border-zinc-900">Render_Uplink</span>
        <button className="text-zinc-500 hover:text-cyan-400 active:text-cyan-500 transition-colors">
          <Search size={16} />
        </button>
      </div>
    </header>
  );
}
