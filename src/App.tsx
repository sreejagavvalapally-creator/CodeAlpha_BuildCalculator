import { useState, useEffect, useCallback } from 'react';
import { Delete, X, Divide, Minus, Plus, Equal } from 'lucide-react';

type Operator = '+' | '-' | '×' | '÷';

export default function App() {
  const [display, setDisplay] = useState('0');
  const [previous, setPrevious] = useState<string | null>(null);
  const [operator, setOperator] = useState<Operator | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [error, setError] = useState(false);

  const inputDigit = useCallback((digit: string) => {
    if (error) return;
    if (waitingForOperand) {
      setDisplay(digit);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? digit : display + digit);
    }
  }, [display, waitingForOperand, error]);

  const inputDecimal = useCallback(() => {
    if (error) return;
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
      return;
    }
    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  }, [display, waitingForOperand, error]);

  const clear = useCallback(() => {
    setDisplay('0');
    setPrevious(null);
    setOperator(null);
    setWaitingForOperand(false);
    setError(false);
  }, []);

  const backspace = useCallback(() => {
    if (error) {
      clear();
      return;
    }
    if (waitingForOperand) return;
    setDisplay((d) => (d.length <= 1 || (d.length === 2 && d.startsWith('-')) ? '0' : d.slice(0, -1)));
  }, [waitingForOperand, error, clear]);

  const compute = (a: number, b: number, op: Operator): number | null => {
    switch (op) {
      case '+': return a + b;
      case '-': return a - b;
      case '×': return a * b;
      case '÷':
        if (b === 0) return null;
        return a / b;
    }
  };

  const formatResult = (n: number): string => {
    if (!isFinite(n)) return 'Error';
    const rounded = Math.round((n + Number.EPSILON) * 1e12) / 1e12;
    return String(rounded);
  };

  const performCalculation = useCallback((nextOperator: Operator | null) => {
    if (error) return;
    const inputValue = parseFloat(display);

    if (previous === null) {
      setPrevious(display);
    } else if (operator) {
      const prev = parseFloat(previous);
      const result = compute(prev, inputValue, operator);
      if (result === null) {
        setDisplay('Error');
        setPrevious(null);
        setOperator(null);
        setWaitingForOperand(false);
        setError(true);
        return;
      }
      const formatted = formatResult(result);
      setDisplay(formatted);
      setPrevious(formatted);
    }

    setOperator(nextOperator);
    setWaitingForOperand(true);
  }, [display, previous, operator, error]);

  const equals = useCallback(() => {
    if (error || operator === null || previous === null) return;
    const inputValue = parseFloat(display);
    const prev = parseFloat(previous);
    const result = compute(prev, inputValue, operator);
    if (result === null) {
      setDisplay('Error');
      setPrevious(null);
      setOperator(null);
      setWaitingForOperand(false);
      setError(true);
      return;
    }
    setDisplay(formatResult(result));
    setPrevious(null);
    setOperator(null);
    setWaitingForOperand(false);
  }, [display, previous, operator, error]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const k = e.key;
      if (k >= '0' && k <= '9') { inputDigit(k); }
      else if (k === '.') { inputDecimal(); }
      else if (k === '+') { performCalculation('+'); }
      else if (k === '-') { performCalculation('-'); }
      else if (k === '*') { performCalculation('×'); }
      else if (k === '/') { e.preventDefault(); performCalculation('÷'); }
      else if (k === 'Enter' || k === '=') { e.preventDefault(); equals(); }
      else if (k === 'Backspace') { backspace(); }
      else if (k === 'Escape') { clear(); }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [inputDigit, inputDecimal, performCalculation, equals, backspace, clear]);

  const opActive = (op: Operator) => operator === op && waitingForOperand;

  const btn = (label: React.ReactNode, onClick: () => void, classes: string, ariaLabel?: string) => (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      className={`rounded-2xl font-medium text-xl sm:text-2xl h-16 sm:h-20 transition-all duration-150 active:scale-95 hover:brightness-110 shadow-sm select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${classes}`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="bg-slate-800/60 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 overflow-hidden">
          {/* Display */}
          <div className="px-6 pt-8 pb-4">
            <div className="h-6 text-right text-slate-400 text-sm font-mono truncate">
              {previous !== null && operator ? `${previous} ${operator}` : '\u00A0'}
            </div>
            <div className={`text-right font-mono text-4xl sm:text-5xl font-light truncate mt-1 ${error ? 'text-red-400' : 'text-white'}`}>
              {display}
            </div>
          </div>

          {/* Buttons */}
          <div className="p-4 grid grid-cols-4 gap-2.5 sm:gap-3">
            {btn('AC', clear, 'col-span-2 bg-rose-500/90 text-white hover:bg-rose-500', 'All clear')}
            {btn(<Delete size={22} className="mx-auto" />, backspace, 'bg-slate-600/80 text-white hover:bg-slate-600', 'Backspace')}
            {btn(<Divide size={22} className="mx-auto" />, () => performCalculation('÷'), `text-white ${opActive('÷') ? 'bg-blue-500' : 'bg-blue-500/80 hover:bg-blue-500'}`, 'Divide')}

            {btn('7', () => inputDigit('7'), 'bg-slate-700/80 text-white hover:bg-slate-700', 'Seven')}
            {btn('8', () => inputDigit('8'), 'bg-slate-700/80 text-white hover:bg-slate-700', 'Eight')}
            {btn('9', () => inputDigit('9'), 'bg-slate-700/80 text-white hover:bg-slate-700', 'Nine')}
            {btn(<X size={22} className="mx-auto" />, () => performCalculation('×'), `text-white ${opActive('×') ? 'bg-blue-500' : 'bg-blue-500/80 hover:bg-blue-500'}`, 'Multiply')}

            {btn('4', () => inputDigit('4'), 'bg-slate-700/80 text-white hover:bg-slate-700', 'Four')}
            {btn('5', () => inputDigit('5'), 'bg-slate-700/80 text-white hover:bg-slate-700', 'Five')}
            {btn('6', () => inputDigit('6'), 'bg-slate-700/80 text-white hover:bg-slate-700', 'Six')}
            {btn(<Minus size={22} className="mx-auto" />, () => performCalculation('-'), `text-white ${opActive('-') ? 'bg-blue-500' : 'bg-blue-500/80 hover:bg-blue-500'}`, 'Subtract')}

            {btn('1', () => inputDigit('1'), 'bg-slate-700/80 text-white hover:bg-slate-700', 'One')}
            {btn('2', () => inputDigit('2'), 'bg-slate-700/80 text-white hover:bg-slate-700', 'Two')}
            {btn('3', () => inputDigit('3'), 'bg-slate-700/80 text-white hover:bg-slate-700', 'Three')}
            {btn(<Plus size={22} className="mx-auto" />, () => performCalculation('+'), `text-white ${opActive('+') ? 'bg-blue-500' : 'bg-blue-500/80 hover:bg-blue-500'}`, 'Add')}

            {btn('0', () => inputDigit('0'), 'col-span-2 bg-slate-700/80 text-white hover:bg-slate-700', 'Zero')}
            {btn('.', inputDecimal, 'bg-slate-700/80 text-white hover:bg-slate-700', 'Decimal point')}
            {btn(<Equal size={22} className="mx-auto" />, equals, 'bg-emerald-500/90 text-white hover:bg-emerald-500', 'Equals')}
          </div>
        </div>
        <p className="text-center text-slate-500 text-xs mt-4">
          Tip: use your keyboard — numbers, +, −, *, /, Enter, Backspace, Esc
        </p>
      </div>
    </div>
  );
}
