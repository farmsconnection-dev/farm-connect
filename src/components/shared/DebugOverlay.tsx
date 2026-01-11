// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';

export const DebugOverlay: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [envStatus, setEnvStatus] = useState<any>({});
    const [authStatus, setAuthStatus] = useState<any>({});
    const [logs, setLogs] = useState<string[]>([]);
    const [windowSize, setWindowSize] = useState({ w: window.innerWidth, h: window.innerHeight });

    // Override console.log/error to capture logs
    useEffect(() => {
        const originalLog = console.log;
        const originalError = console.error;

        console.log = (...args) => {
            setLogs(prev => [`LOG: ${args.map(a => JSON.stringify(a)).join(' ')}`, ...prev].slice(0, 50));
            originalLog(...args);
        };
        console.error = (...args) => {
            setLogs(prev => [`ERR: ${args.map(a => JSON.stringify(a)).join(' ')}`, ...prev].slice(0, 50));
            originalError(...args);
        };

        return () => {
            console.log = originalLog;
            console.error = originalError;
        };
    }, []);

    useEffect(() => {
        const checkEnv = () => {
            const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
            setEnvStatus({
                mapsKeyLength: apiKey ? apiKey.length : 0,
                mapsKeyStart: apiKey ? apiKey.substring(0, 5) + '...' : 'MISSING',
                supabaseUrl: import.meta.env.VITE_SUPABASE_URL ? 'PRESENT' : 'MISSING',
                googleLoaded: !!window.google,
                mapsLoaded: !!window.google?.maps,
                userAgent: navigator.userAgent
            });
        };

        const checkAuth = async () => {
            const { data } = await supabase.auth.getSession();
            setAuthStatus({
                session: data.session ? 'ACTIVE' : 'NONE',
                user: data.session?.user?.email || 'NONE',
                role: localStorage.getItem('pendingRole') || 'NONE',
                localStorageUser: localStorage.getItem('user') ? 'PRESENT' : 'NONE'
            });
        };

        checkEnv();
        checkAuth();

        const interval = setInterval(() => {
            checkAuth();
            checkEnv(); // Re-check specifically for lazy loaded Google Maps
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    if (!isVisible) {
        return (
            <button
                onClick={() => setIsVisible(true)}
                className="fixed bottom-4 left-4 z-[99999] bg-red-600 text-white p-2 rounded-full text-xs font-bold opacity-50 hover:opacity-100"
            >
                DEBUG
            </button>
        );
    }

    return (
        <div className="fixed inset-0 z-[99999] bg-black/80 text-green-400 font-mono text-[10px] p-4 overflow-y-auto pointer-events-auto">
            <div className="flex justify-between items-center mb-4 border-b border-green-800 pb-2">
                <h1 className="text-xl font-bold">SYSTEM DIAGNOSTICS</h1>
                <button onClick={() => setIsVisible(false)} className="bg-red-900 px-4 py-2 text-white rounded">CLOSE</button>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="border border-green-800 p-2 rounded">
                    <h2 className="font-bold text-white mb-2">ENVIRONMENT & MAPS</h2>
                    <pre>{JSON.stringify(envStatus, null, 2)}</pre>
                </div>
                <div className="border border-green-800 p-2 rounded">
                    <h2 className="font-bold text-white mb-2">AUTH & STORAGE</h2>
                    <pre>{JSON.stringify(authStatus, null, 2)}</pre>
                </div>
            </div>

            <div className="border border-green-800 p-2 rounded mb-4">
                <h2 className="font-bold text-white mb-2">CONSOLE LOGS (Last 50)</h2>
                <div className="h-64 overflow-y-auto flex flex-col-reverse">
                    {logs.map((log, i) => (
                        <div key={i} className={`mb-1 p-1 border-b border-green-900/30 break-all ${log.startsWith('ERR') ? 'text-red-400 bg-red-900/20' : 'text-green-300'}`}>
                            {log}
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-center text-xs text-gray-500 mt-8">
                Screen: {windowSize.w}x{windowSize.h} | {navigator.userAgent}
            </div>
        </div>
    );
};
