import { AlertTriangle, TerminalSquare } from 'lucide-react';

export function ReposFeature() {
  const fileTree = [
    { name: 'dashboard', val: 'PHASE_7', children: [
        { name: 'terminal', val: '14:26' },
        { name: 'pulse', val: '14:16' },
        { name: 'api', val: '12:00' },
        { name: 'types', val: 'ZOD' },
        { name: 'utils', val: '12:00' }
    ]},
    { name: 'SCRAPER-', val: 'SYNC', children: [
        { name: 'src', val: 'VANILLA' },
        { name: 'build', val: 'ESBUILD' }
    ]},
    { name: 'backe_nd', val: 'RENDER', children: [] },
  ];

  return (
   <div className="h-full flex flex-col bg-black pb-14 font-mono">
      <div className="p-4 border-b-2 border-zinc-900 flex items-center justify-between">
         <h2 className="text-2xl font-black text-cyan-400 tracking-tighter uppercase">Nexus_Map</h2>
         <span className="text-[10px] bg-cyan-400 text-black px-2 py-1 font-bold">3_REPOS</span>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {fileTree.map((f, i) => (
          <div key={i} className="group">
            <div className="flex items-end justify-between border-b border-zinc-800 pb-1 mb-2 group-hover:border-cyan-900 transition-colors">
               <span className="text-base font-bold text-white tracking-tight">{f.name}/</span>
               <span className="text-[9px] text-cyan-600 uppercase tracking-widest bg-cyan-950/30 px-1">{f.val}</span>
            </div>
            {f.children && f.children.length > 0 && (
               <div className="space-y-1">
                  {f.children.map((child, j) => (
                     <button key={j} className="w-full flex justify-between items-center py-2 px-1 hover:bg-zinc-900 active:bg-zinc-800 text-left transition-colors">
                        <div className="flex items-center text-zinc-500 gap-2">
                           <span>├──</span>
                           <span className="text-xs text-zinc-300 font-bold">{child.name}</span>
                        </div>
                        <span className="text-[10px] text-fuchsia-400 border border-fuchsia-900 bg-fuchsia-950/50 px-1">{child.val}</span>
                     </button>
                  ))}
               </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Interactive Sticky Footer Button */}
      <div className="p-4 border-t border-zinc-900 bg-black">
        <button className="w-full bg-red-600 text-black font-black text-sm uppercase py-4 hover:bg-red-500 active:scale-95 transition-all flex justify-center items-center gap-2 border-b-4 border-red-800 active:border-b-0 active:translate-y-1">
           <AlertTriangle size={16} /> STOP_ACTIVE_BUILD
        </button>
        <button className="w-full mt-2 bg-zinc-900 text-zinc-400 font-bold text-[10px] uppercase py-3 hover:bg-zinc-800 hover:text-white active:scale-95 transition-all flex justify-center items-center gap-2 border border-zinc-800">
           <TerminalSquare size={14} /> Open Global Shell
        </button>
      </div>
    </div>
  );
}
