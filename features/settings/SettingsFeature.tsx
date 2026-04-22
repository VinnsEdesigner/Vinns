export function SettingsFeature() {
  const configs = [
    { label: 'MODELS_FALLBACKS', val: 'Groq → Mistral → Gemini', active: true },
    { label: 'API_KEYS_LOADED', val: '18 Keys Required', active: false },
    { label: 'REASONING_LOG', val: 'SUPABASE STORAGE HEAVY', active: false },
    { label: 'SSE_HEARTBEAT', val: '15S PING DAEMON', active: true },
  ];

  return (
    <div className="p-4 space-y-6 h-full overflow-y-auto pb-32 font-mono uppercase bg-black">
      <div>
        <h3 className="text-[10px] font-bold text-cyan-400 tracking-widest mb-3 border-b border-zinc-800 pb-2 flex justify-between">
           <span>SYS_CONFIG</span>
           <span className="text-zinc-500">ROOT_ACCESS</span>
        </h3>
        <div className="border border-zinc-800 bg-[#0a0a0a]">
          {configs.map((item, i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border-b border-zinc-900 last:border-0 gap-3 hover:bg-zinc-900 transition-colors cursor-pointer group">
              <div>
                <div className={`text-xs font-bold tracking-widest ${item.active ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-300'}`}>{item.label}</div>
                <div className="text-[9px] text-fuchsia-500 opacity-70 tracking-widest mt-1 uppercase">{item.val}</div>
              </div>
              
              <button className={`relative w-14 h-7 flex items-center justify-center text-[10px] font-black transition-all ${item.active ? 'bg-cyan-400 text-black shadow-[0_0_10px_rgba(34,211,238,0.4)]' : 'bg-black border-2 border-zinc-800 text-zinc-600 hover:border-zinc-600'}`}>
                 {item.active ? 'ON' : 'OFF'}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-red-600 p-1 mt-10">
        <div className="bg-black border-2 border-red-600 p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-red-600 animate-[pulse_1s_infinite]"></div>
          <h4 className="text-red-500 font-black text-2xl tracking-tighter mb-2 mt-2">UPSTASH_PURGE</h4>
          <p className="text-[9px] text-red-500/70 tracking-widest mb-8 border-b-2 border-red-900/50 pb-2 font-bold">FLUSH REDIS CACHE (TASK STATES)</p>
          <button className="w-full py-5 bg-red-600 text-black text-sm font-black tracking-[0.2em] hover:bg-red-500 active:scale-95 transition-all border-b-4 border-black active:border-b-0 active:translate-y-1">
            INITIATE_ERASE
          </button>
        </div>
      </div>
    </div>
  );
}
