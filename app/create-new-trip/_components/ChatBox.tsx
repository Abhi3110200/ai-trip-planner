"use client"
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
function ChatBox() {
    const onSend = () => {
        
    }
    return (
        <div className="h-[82vh] flex flex-col">
            <section className="flex-1 overflow-y-auto p-4">
                <div className="flex justify-end mt-2">
                    <div className="max-w-lg bg-primary text-white px-4 py-2 rounded-lg">
                      User Msg
                    </div>
                </div>
                <div className="flex justify-start mt-2">
                    <div className="max-w-lg bg-gray-100 text-gray-800 px-4 py-2 rounded-lg">
                      AI Msg
                    </div>
                </div>

            </section>
            <section>
            <div className='border rounded-2xl p-3 relative'>
                        <Textarea placeholder="Create Your trip Paris to New York" className="w-full
                        h-28 bg-transparent border-none focus-visible:ring-0 shadow-none resize-none"/>
                        <Button size={'icon'} className="absolute bottom-4 right-4" onClick={() => onSend()}><Send className="w-4 h-4" /></Button>
                    </div>

            </section>
        </div>
    );
}

export default ChatBox;
