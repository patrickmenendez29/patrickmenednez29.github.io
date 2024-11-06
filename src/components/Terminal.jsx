import { useState } from 'react';
import { XMarkIcon, TrashIcon } from "@heroicons/react/20/solid";

export function Terminal() {
    const [inputValue, setInputValue] = useState('');
    const [commandHistory, setCommandHistory] = useState([]);

    const handleCommand = (command) => {
        switch (command.toLowerCase()) {
            case 'clear':
                setCommandHistory([]);
                return;
            default:
                // For any other command, just add it to history
                setCommandHistory([...commandHistory, command]);
                return;
        }
    };

    const handleInputSubmit = (e) => {
        if (e.key === 'Enter' && inputValue.trim()) {
            handleCommand(inputValue.trim());
            setInputValue('');
        }
    };

    const PromptLine = ({ command = '' }) => (
        <div className='flex'>
            <span className='text-green-500 mr-2'>➜</span>
            <span className='text-blue-400 mr-2'>~/project</span>
            <span className='text-pink-400'>git:</span>
            <span className='text-blue-400'>(main)</span>
            <span className='ml-2'>$</span>
            {command && <span className='ml-2'>{command}</span>}
        </div>
    );

    return (
        <div className='bg-dark-700 border-t border-dark-500'>
            {/* Terminal Header */}
            <div className='flex items-center justify-between px-4 py-1 bg-dark-600 border-b border-dark-500'>
                <div className='flex items-center space-x-2'>
                    <span className='text-white-75a text-sm'>Terminal</span>
                </div>
                <div className='flex items-center space-x-2'>
                    <button 
                        onClick={() => setCommandHistory([])} 
                        className='text-white-50a hover:text-white-75a'
                    >
                        <TrashIcon className='w-5 h-5' />
                    </button>
                    <button className='text-white-50a hover:text-white-75a'>
                        <XMarkIcon className='w-5 h-5' />
                    </button>
                </div>
            </div>
            
            {/* Terminal Content */}
            <div className='font-mono text-sm text-white-75a p-3 h-[350px] overflow-y-auto'>
                {/* Command History */}
                {commandHistory.map((command, index) => (
                    <PromptLine key={index} command={command} />
                ))}
                
                {/* Input Line */}
                <div className='flex mt-2'>
                    <PromptLine />
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleInputSubmit}
                        className="flex-1 bg-transparent outline-none border-none ml-2 text-white-75a"
                        placeholder="Enter command..."
                    />
                </div>
            </div>
        </div>
    );
}