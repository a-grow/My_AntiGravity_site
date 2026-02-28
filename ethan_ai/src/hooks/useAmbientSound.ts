import { useState, useCallback, useRef, useEffect } from 'react';

export const useAmbientSound = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const timersRef = useRef<number[]>([]);

  const playBeep = useCallback((ctx: AudioContext) => {
    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = 600 + Math.random() * 1400;
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.12);
    } catch {}
  }, []);

  const playTrill = useCallback((ctx: AudioContext) => {
    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      const freq = 500 + Math.random() * 1000;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.8, ctx.currentTime + 0.08);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.6, ctx.currentTime + 0.2);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, ctx.currentTime + 0.3);
      gain.gain.setValueAtTime(0.03, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.35);
    } catch {}
  }, []);

  const scheduleRandom = useCallback((ctx: AudioContext) => {
    const schedule = () => {
      const delay = 1500 + Math.random() * 4000;
      const timer = window.setTimeout(() => {
        if (ctx.state === 'closed') return;
        Math.random() > 0.4 ? playBeep(ctx) : playTrill(ctx);
        schedule();
      }, delay);
      timersRef.current.push(timer);
    };
    schedule();
  }, [playBeep, playTrill]);

  const start = useCallback(() => {
    const ctx = new AudioContext();
    audioCtxRef.current = ctx;

    // Indoor airplane cabin ambience — filtered noise for pressurized air texture
    const bufferSize = 2 * ctx.sampleRate;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    const noise = ctx.createBufferSource();
    noise.buffer = noiseBuffer;
    noise.loop = true;

    const lpFilter = ctx.createBiquadFilter();
    lpFilter.type = 'lowpass';
    lpFilter.frequency.value = 200;
    lpFilter.Q.value = 0.7;

    const noiseGain = ctx.createGain();
    noiseGain.gain.value = 0.035;

    noise.connect(lpFilter);
    lpFilter.connect(noiseGain);
    noiseGain.connect(ctx.destination);
    noise.start();

    // Schedule random beeps/trills
    scheduleRandom(ctx);

    setIsPlaying(true);
  }, [scheduleRandom]);

  const stop = useCallback(() => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
    if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
      audioCtxRef.current.close();
    }
    audioCtxRef.current = null;
    setIsPlaying(false);
  }, []);

  const toggle = useCallback(() => {
    if (isPlaying) stop();
    else start();
  }, [isPlaying, start, stop]);

  useEffect(() => {
    return () => { stop(); };
  }, [stop]);

  return { isPlaying, toggle };
};