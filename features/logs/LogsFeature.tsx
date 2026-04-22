export function LogsFeature() {
  const logs = [
    { code: '200', m: 'GET', p: '/api/warmup' },
    { code: '200', m: 'GET', p: '/api/sync' },
    { code: '201', m: 'POST', p: '/api/agent' },
    { code: '201', m: 'POST', p: '/api/scraper-agent' },
    { code: '401', m: 'POST', p: '/api/auth/login' },
    { code: '200', m: 'GET', p: '/api/github/tree' },
    { code: '500', m: 'POST', p: '/api/vision' },
    { code: '200', m: 'PATCH', p: '/api/settings' },
    { code: '200', m: 'GET', p: '/api/sync' },
    { code: '201', m: 'POST', p: '/api/agent' },
    { code: '201', m: 'POST', p: '/api/scraper-agent' },
    { code: '401', m: 'POST', p: '/api/auth/login' },
    { code: '200', m: 'GET', p: '/api/github/tree' },
    { code: '500', m: 'POST', p: '/api/vision' },
    { code: '200', m: 'PATCH', p: '/api/settings' },
  ];

  return (
    <div className="flex flex-col h-full bg-black font-mono">
      <div className="p-4 border-b-2 border-zinc-900">
        <div className="flex justify-between items-end">
           <h2 className="text-2xl font-black text-fuchsia-400 tracking-tighter uppercase">Traffic</h2>
           <span className="text-[10px] text-fuchsia-500 bg-fuchsia-950/30 px-2 border border-fuchsia-900 tracking-widest">TAIL_LOGS</span>
        </div>
      </div>
      <div className="flex-1 overflow-auto px-4 py-4 pb-32">
         <div className="border border-zinc-800">
            <div className="flex text-[10px] text-zinc-400 tracking-widest font-bold px-3 py-2 bg-zinc-950 border-b border-zinc-800 sticky top-0 uppercase">
               <div className="w-12">STAT</div>
               <div className="w-16">METH</div>
               <div className="flex-1">ROUTE</div>
            </div>
            <div className="divide-y divide-zinc-900">
              {logs.map((log, i) => (
                <div 
                  key={i} 
                  className={`flex px-3 py-3 items-center text-xs hover:bg-zinc-900 transition-colors cursor-pointer ${
                    log.code.startsWith('2') ? 'text-zinc-300' : 'text-red-500 bg-red-950/20'
                  }`}
                >
                  <div className={`w-12 font-black ${log.code.startsWith('2') ? 'text-green-400' : 'text-red-500'}`}>{log.code}</div>
                  <div className="w-16 font-bold opacity-70 text-cyan-400">{log.m}</div>
                  <div className="flex-1 truncate normal-case group-hover:text-white">{log.p}</div>
                </div>
              ))}
            </div>
         </div>
      </div>
    </div>
  );
}
