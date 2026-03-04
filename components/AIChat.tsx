'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Send } from 'lucide-react';

export function AIChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; content: string }[]>([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input) return;
    setMessages([...messages, { role: 'user', content: input }]);
    // Mock AI response; later integrate Grok/OpenAI API
    const mockResponse = input.includes('Analyze') ? 'Analysis: Bullish, risk low.' : 'Trending: $AIXBT, $MEME.';
    setMessages(prev => [...prev, { role: 'ai', content: mockResponse }]);
    setInput('');
  };

  return (
    <>
      <Button
        className="fixed bottom-4 right-4 rounded-full w-12 h-12"
        onClick={() => setOpen(true)}
      >
        💬
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <div className="h-96 overflow-y-auto space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`p-2 rounded ${msg.role === 'user' ? 'bg-secondary text-black' : 'bg-muted'}`}>
                {msg.content}
              </div>
            ))}
          </div>
          <div className="flex space-x-2">
            <Input value={input} onChange={e => setInput(e.target.value)} placeholder="Ask about tokens..." />
            <Button onClick={handleSend}><Send className="h-4 w-4" /></Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
                                                         }
