import { Network } from 'lucide-react';

export function PulseFeature() {
  return (
    <div className="p-4 space-y-4 h-full overflow-y-auto pb-32 font-mono uppercase bg-black">
      <div className="border border-zinc-800 p-4 bg-[#0a0a0a] relative group hover:border-cyan-900 transition-colors">
        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyan-400"></div>
        <p className="text-[9px] text-zinc-500 tracking-[0.2em] mb-1">Mistral_Budget // 1B Limit</p>
        <div className="flex items-baseline justify-between">
           <h1 className="text-5xl font-black text-cyan-400 tracking-tighter">800<span className="text-xl text-cyan-800 ml-1">M</span></h1>
           <span className="text-xs text-black bg-cyan-500 px-2 py-1 font-bold">80.0%</span>
        </div>
        <div className="w-full h-1 bg-zinc-900 mt-4 flex">
           <div className="h-full bg-cyan-400 w-[80%] shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="border border-fuchsia-900/50 p-4 bg-fuchsia-950/10 cursor-pointer hover:bg-fuchsia-900/20 active:scale-95 transition-all">
          <p className="text-[9px] text-fuchsia-500/70 tracking-[0.1em] mb-1">API_RPS_GATE</p>
          <h2 className="text-3xl font-black text-fuchsia-500 tracking-tighter">1.0<span className="text-sm text-fuchsia-800 ml-1">R/S</span></h2>
          <div className="mt-2 text-[8px] bg-fuchsia-500 text-black px-1 py-0.5 inline-block font-bold">CODESTRAL</div>
        </div>
        <div className="border border-zinc-800 p-4 bg-[#0a0a0a] cursor-pointer hover:border-zinc-500 active:scale-95 transition-all">
          <p className="text-[9px] text-zinc-500 tracking-[0.1em] mb-1">DB_TABLES</p>
          <h2 className="text-3xl font-black text-white tracking-tighter">18</h2>
          <div className="mt-2 text-[8px] border border-zinc-700 text-zinc-400 px-1 py-0.5 inline-block">US-EAST-1</div>
        </div>
      </div>

      <div className="border border-zinc-800 bg-[#0a0a0a]">
        <div className="p-3 border-b border-zinc-800 flex justify-between items-center bg-zinc-950">
          <h3 className="text-[10px] font-bold text-yellow-500 tracking-widest">[ SSE_ACTIVE_TRACES ]</h3>
          <Network size={12} className="text-yellow-600" />
        </div>
        <div className="p-4 space-y-4 text-xs">
          <div>
            <div className="flex justify-between text-zinc-400 mb-2">
              <span className="text-yellow-500 font-bold">UPTIME_ROBOT</span>
              <span>[ 5M_INTERVAL ]</span>
            </div>
            <div className="w-full h-px bg-zinc-800 relative">
               <div className="absolute top-0 left-0 h-full bg-yellow-500 w-[100%] shadow-[0_0_8px_rgba(234,179,8,0.8)]"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-zinc-400 mb-2">
              <span className="text-white">SCRAPER_SYNC</span>
              <span className="text-zinc-600">[ 15S_POLL ]</span>
            </div>
            <div className="w-full h-px bg-zinc-800 relative">
               <div className="absolute top-0 left-0 h-full bg-zinc-500 w-[24%]"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border border-dashed border-zinc-800 p-4 hover:border-zinc-600 transition-colors">
         <p className="text-[9px] text-zinc-600 mb-2 tracking-[0.2em]">//_TOPOLOGY</p>
         <div className="space-y-1 text-xs text-zinc-400">
            <div className="flex justify-between border-b border-zinc-900 pb-1"><span>URL</span><span className="text-green-400">backe-nd.onrender.com</span></div>
            <div className="flex justify-between border-b border-zinc-900 pb-1"><span>STORE</span><span className="text-cyan-400">Upstash_Redis</span></div>
            <div className="flex justify-between pb-1"><span>VISION</span><span className="text-fuchsia-400">Gemini/Gemma_Only</span></div>
         </div>
      </div>
    </div>
  );
}
