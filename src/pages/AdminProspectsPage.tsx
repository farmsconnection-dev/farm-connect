// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Search, Plus, Phone, ExternalLink, MessageCircle, AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface AdminProspectsPageProps {
    onBack: () => void;
    showToast: (msg: string) => void;
}

interface Prospect {
    id: string;
    name: string;
    phone: string;
    region: string;
    type: string;
    status: 'todo' | 'sent' | 'joined';
    notes?: string;
    created_at: string;
}

export const AdminProspectsPage: React.FC<AdminProspectsPageProps> = ({ onBack, showToast }) => {
    const [prospects, setProspects] = useState<Prospect[]>([]);
    const [loading, setLoading] = useState(true);
    const [isAddOpen, setIsAddOpen] = useState(false);
    const [filter, setFilter] = useState('all');

    const [newProspect, setNewProspect] = useState({
        name: '',
        phone: '',
        region: '',
        type: 'other'
    });

    useEffect(() => {
        fetchProspects();
    }, []);

    const fetchProspects = async () => {
        try {
            const { data, error } = await supabase
                .from('prospects')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            setProspects(data || []);
        } catch (err) {
            console.error('Error fetching prospects:', err);
            // showToast('Fout bij laden prospects');
        } finally {
            setLoading(false);
        }
    };

    const handleAddProspect = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const { error } = await supabase
                .from('prospects')
                .insert([newProspect]);

            if (error) throw error;

            showToast('Prospect toegevoegd!');
            setIsAddOpen(false);
            setNewProspect({ name: '', phone: '', region: '', type: 'other' });
            fetchProspects();
        } catch (err) {
            console.error(err);
            showToast('Fout bij opslaan');
        }
    };

    const handleSendSMS = async (prospect: Prospect) => {
        // 1. Prepare SMS Link
        const baseUrl = 'https://farmconnect.be';
        // const claimUrl = `${baseUrl}/?name=${encodeURIComponent(prospect.name)}&view=register_farm`; // Old approach
        // Better: simple claim param
        const claimUrl = `${baseUrl}?name=${encodeURIComponent(prospect.name)}`;

        const message = `Hey ${prospect.name}, de regels en quota's in onze sector zijn absurd aan het worden. Tijd voor verandering? Word bondgenoot op FarmConnect: ${claimUrl}`;

        // 2. Open SMS app
        const smsUrl = `sms:${prospect.phone}?body=${encodeURIComponent(message)}`;

        // Note: iOS uses '&' separator, Android uses '?'. Checking user agent is complex here, 
        // usually ';', '&' or '?' works depending on OS.
        // Let's try standard approach.
        window.location.href = smsUrl;

        // 3. Update status to 'sent'
        if (prospect.status === 'todo') {
            await supabase
                .from('prospects')
                .update({ status: 'sent' })
                .eq('id', prospect.id);

            // Optimistic update
            setProspects(prev => prev.map(p => p.id === prospect.id ? { ...p, status: 'sent' } : p));
        }
    };

    const filteredProspects = prospects.filter(p => {
        if (filter === 'all') return true;
        return p.status === filter;
    });

    return (
        <div className="min-h-screen bg-slate-50 pb-20 pt-24 px-4 sm:px-8">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-3xl font-black text-slate-800 flex items-center gap-3">
                            <Users className="text-emerald-500" /> Prospect Management
                        </h1>
                        <p className="text-slate-500">Beheer potentiële boeren en nodig ze uit.</p>
                    </div>
                    <button
                        onClick={() => setIsAddOpen(true)}
                        className="bg-emerald-500 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-200"
                    >
                        <Plus size={20} /> Nieuwe Prospect
                    </button>
                </div>

                {/* Filters */}
                <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                    {['all', 'todo', 'sent', 'joined'].map(f => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-4 py-2 rounded-full font-bold text-sm capitalize whitespace-nowrap border ${filter === f
                                    ? 'bg-emerald-100 text-emerald-700 border-emerald-200'
                                    : 'bg-white text-slate-500 border-slate-200 hover:border-emerald-200'
                                }`}
                        >
                            {f === 'todo' ? 'Nog uitnodigen' : f === 'sent' ? 'Uitgenodigd' : f === 'joined' ? 'Geregistreerd' : 'Alles'}
                        </button>
                    ))}
                </div>

                {/* List */}
                <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                    {loading ? (
                        <div className="p-12 text-center text-slate-400">Laden...</div>
                    ) : filteredProspects.length === 0 ? (
                        <div className="p-12 text-center text-slate-400 italic">Geen prospects gevonden.</div>
                    ) : (
                        <div className="divide-y divide-slate-100">
                            {filteredProspects.map(prospect => (
                                <motion.div
                                    key={prospect.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                                >
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-1">
                                            <h3 className="font-bold text-slate-800 text-lg">{prospect.name}</h3>
                                            <span className={`px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider ${prospect.status === 'todo' ? 'bg-slate-100 text-slate-500' :
                                                    prospect.status === 'sent' ? 'bg-blue-100 text-blue-600' :
                                                        'bg-green-100 text-green-600'
                                                }`}>
                                                {prospect.status}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-4 text-sm text-slate-500">
                                            <span className="flex items-center gap-1"><Phone size={14} /> {prospect.phone}</span>
                                            <span className="flex items-center gap-1">📍 {prospect.region}</span>
                                            <span className="capitalize">🚜 {prospect.type}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        {prospect.status === 'todo' && (
                                            <button
                                                onClick={() => handleSendSMS(prospect)}
                                                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 shadow-md shadow-blue-200"
                                            >
                                                <MessageCircle size={18} /> Stuur SMS (Link)
                                            </button>
                                        )}
                                        {prospect.status === 'sent' && (
                                            <button
                                                onClick={() => handleSendSMS(prospect)} // Resend
                                                className="bg-white border-2 border-slate-200 text-slate-500 hover:border-blue-200 hover:text-blue-500 px-4 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2"
                                            >
                                                <MessageCircle size={18} /> Opnieuw
                                            </button>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Add Modal */}
            {isAddOpen && (
                <div className="fixed inset-0 bg-black/50 overflow-y-auto h-full w-full z-[100] flex items-center justify-center p-4">
                    <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full relative">
                        <h2 className="text-2xl font-black text-slate-800 mb-6">Nieuwe Prospect</h2>
                        <form onSubmit={handleAddProspect} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Naam Boer</label>
                                <input required type="text" value={newProspect.name} onChange={e => setNewProspect({ ...newProspect, name: e.target.value })} className="w-full bg-slate-50 p-3 rounded-xl border border-slate-200" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Telefoon (+32...)</label>
                                <input required type="tel" value={newProspect.phone} onChange={e => setNewProspect({ ...newProspect, phone: e.target.value })} className="w-full bg-slate-50 p-3 rounded-xl border border-slate-200" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Regio</label>
                                    <input required type="text" value={newProspect.region} onChange={e => setNewProspect({ ...newProspect, region: e.target.value })} className="w-full bg-slate-50 p-3 rounded-xl border border-slate-200" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Type</label>
                                    <select value={newProspect.type} onChange={e => setNewProspect({ ...newProspect, type: e.target.value })} className="w-full bg-slate-50 p-3 rounded-xl border border-slate-200">
                                        <option value="other">Overig</option>
                                        <option value="dairy">Zuivel</option>
                                        <option value="vegetables">Groenten</option>
                                        <option value="fruit">Fruit</option>
                                        <option value="meat">Vlees</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex gap-3 mt-6">
                                <button type="button" onClick={() => setIsAddOpen(false)} className="flex-1 py-3 font-bold text-slate-500 hover:bg-slate-50 rounded-xl">Annuleren</button>
                                <button type="submit" className="flex-1 bg-emerald-500 text-white py-3 rounded-xl font-bold shadow-lg shadow-emerald-200">Opslaan</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};
