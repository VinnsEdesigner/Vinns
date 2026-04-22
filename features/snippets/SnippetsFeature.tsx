import { HardDrive } from 'lucide-react';

export function SnippetsFeature() {
  const snippets = [
    { type: 'CODE', label: 'Context Compressor', val: 'trimToFit() token margin logic', tag: 'lib/agent', color: 'cyan' },
    { type: 'RSCH', label: 'Vision Constraints', val: 'Never Groq/Mistral for imgs. Base64 local only.', tag: 'LAWS', color: 'fuchsia' },
    { type: 'FILE', label: 'systemPrompt.ts', val: 'SINGLE SOURCE OF TRUTH. No hardcodes.', tag: 'lib', color: 'yellow' },
    { type: 'IMG', label: 'VENOM_HUD.jpg', val: 'Base64 in memory. URL in Supabase.', tag: 'SCRAPER', color: 'cyan' },
    { type: 'CODE', label: 'SSE Heartbeat', val: '15s ping/pong anti-sleep daemon payload', tag: 'api/broadcast', color: 'green' },
  ];

  return (
    <div className="p-4 space-y-4 h-full overflow-y-auto pb-32 font-mono uppercase bg-black">
      <div className="flex items-end justify-between mb-6 pb-2 border-b-2 border-zinc-900">
        <div className="flex items-center gap-2">
          <HardDrive size={20} className="text-yellow-400" />
          <h2 className="text-2xl font-black text-white tracking-tighter">Memory</h2>
        </div>
        <p className="text-[10px] text-zinc-500 tracking-widest bg-zinc-900 px-2 py-1">5_POINTERS</p>
      </div>
      
      <div className="space-y-4">
        {snippets.map((snip, i) => (
          <button 
            key={i} 
            className="w-full text-left border border-zinc-800 bg-[#0a0a0a] p-4 flex flex-col gap-2 hover:bg-zinc-900 hover:border-zinc-600 active:scale-[0.98] transition-all group"
          >
            <div className="flex items-center justify-between">
              <span className={`text-[10px] font-black text-black bg-${snip.color}-500 px-1`}>[{snip.type}]</span>
              <span className="text-[9px] text-zinc-500 tracking-widest border-b border-zinc-700 group-hover:text-zinc-300 transition-colors">{snip.tag}</span>
            </div>
            <h3 className={`text-sm font-bold mt-1 text-${snip.color}-400 group-hover:text-white transition-colors`}>{snip.label}</h3>
            <p className="text-xs text-zinc-400 capitalize-none normal-case">{snip.val}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
