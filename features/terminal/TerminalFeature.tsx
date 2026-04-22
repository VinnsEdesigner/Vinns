import { useState, useRef, useEffect, FormEvent } from 'react';
import { Terminal, Cpu, Activity, Wifi } from 'lucide-react';
import { Message } from '@/types';

export function TerminalFeature() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { id: 'sys_1', role: 'system', content: 'INITIALIZING SECURE TERMINAL LINK...' },
    { id: 'sys_2', role: 'system', content: 'UPLINK ESTABLISHED. 12ms LATENCY.' },
    { 
      id: 'card_1', 
      role: 'card', 
      content: 'SYSTEM_STATUS', 
      metadata: { 
        status: 'ONLINE', 
        nodes: 14, 
        security: 'DEFCON 5',
        active_model: 'LLAMA-3.3-70B'
      } 
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    const newMsgId = Date.now().toString();
    setMessages(prev => [...prev, { id: `u_${newMsgId}`, role: 'user', content: input }]);
    setInput('');
    
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        id: `sys_${Date.now()}`, 
        role: 'system', 
        content: `[ACK] Command received: ${input.split(' ')[0]}` 
      }]);
      
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          id: `card_${Date.now()}`, 
          role: 'card', 
          content: 'EXECUTION_REPORT', 
          metadata: { 
            task: input.substring(0, 15), 
            result: 'CONFIRMED', 
            cycles: Math.floor(Math.random() * 500) + 'ms' 
          } 
        }]);
      }, 600);
    }, 300);
  };

  return (
    <div className="flex flex-col h-full relative font-mono bg-black pb-14">
      {/* Live System Sub-Header */}
      <header className="flex justify-between items-center p-2 border-b border-zinc-900 bg-[#050505] z-20">
        <span className="text-[10px] font-black tracking-[0.2em] text-cyan-400 px-2 uppercase">CMD_ROOT</span>
        <div className="flex items-center gap-3 text-[9px] font-bold tracking-widest text-zinc-500 uppercase pr-2">
          <span className="flex items-center gap-1 bg-zinc-950 px-2 py-1 border border-zinc-900"><Cpu size={10} className="text-fuchsia-500"/> MEM: 42%</span>
          <span className="flex items-center gap-1 bg-zinc-950 px-2 py-1 border border-zinc-900 text-green-500"><Wifi size={10}/> LINK</span>
        </div>
      </header>

      {/* Main Terminal Feed */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-5 pb-8">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
            
            {msg.role === 'system' && (
              <div className="text-[10px] text-zinc-500 flex items-center gap-2 uppercase tracking-widest">
                <span className="w-1.5 h-1.5 bg-cyan-500"></span>
                {msg.content}
              </div>
            )}

            {msg.role === 'user' && (
              <div className="bg-zinc-900 text-cyan-400 p-3 max-w-[85%] sm:max-w-[70%] border-l-4 border-cyan-500 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]">
                <div className="text-[8px] tracking-widest font-black text-zinc-500 mb-1 leading-none">USER_INPUT</div>
                <div className="text-xs font-bold break-words">{msg.content}</div>
              </div>
            )}

            {msg.role === 'card' && (
                <div className="bg-[#0a0a0a] border border-zinc-800 w-full sm:w-[85%] mt-1 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-fuchsia-600 transition-colors"></div>
                  
                  <div className="bg-zinc-950 p-2 flex justify-between items-center border-b border-zinc-900 ml-1">
                    <div className="flex items-center gap-2">
                      <Terminal size={12} className="text-fuchsia-500" />
                      <span className="text-[10px] text-white font-black tracking-[0.2em]">{msg.content}</span>
                    </div>
                    <span className="text-[8px] bg-zinc-800 text-zinc-400 px-1 py-0.5">[{msg.id.split('_')[1]}]</span>
                  </div>
                  
                  <div className="p-3 ml-1 grid grid-cols-2 gap-2">
                    {msg.metadata && Object.entries(msg.metadata).map(([key, val]) => (
                      <div key={key} className="bg-black border border-zinc-900 p-2 flex flex-col justify-center">
                        <span className="text-[8px] text-zinc-600 tracking-widest uppercase mb-1">{key}</span>
                        <span className={`text-xs font-bold truncate ${val === 'CONFIRMED' || val === 'ONLINE' ? 'text-green-500' : 'text-white'}`}>
                          {String(val)}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="p-2 ml-1 bg-zinc-950 border-t border-zinc-900 flex justify-end gap-2">
                     <button className="text-[9px] bg-black text-cyan-400 border border-cyan-900 px-3 py-1 uppercase tracking-widest hover:bg-cyan-950 active:bg-cyan-900 transition-colors">Copy JSON</button>
                  </div>
                </div>
            )}

          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-black border-t-2 border-zinc-900">
        <form onSubmit={handleSubmit} className="flex items-center p-2 gap-2">
          <div className="hidden sm:flex px-3 bg-zinc-950 border border-zinc-800 h-10 items-center">
             <span className="text-cyan-500 text-[10px] font-bold tracking-wider">root@nexus:~#</span>
          </div>
          <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="AWAITING COMMAND..."
            className="flex-1 bg-[#0a0a0a] border border-zinc-800 outline-none px-3 h-10 text-xs text-cyan-400 placeholder:text-zinc-600 uppercase focus:border-cyan-500 focus:bg-black transition-colors"
            autoComplete="off"
            spellCheck="false"
          />
          <button 
            type="submit" 
            disabled={!input.trim()}
            className="px-6 h-10 bg-white text-black font-black text-[10px] tracking-widest uppercase hover:bg-cyan-400 active:bg-cyan-600 active:scale-95 disabled:opacity-50 disabled:hover:bg-white transition-all"
          >
            EXEC
          </button>
        </form>
      </div>
    </div>
  );
}
