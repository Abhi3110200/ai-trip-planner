"use client"
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import axios from "axios";
import { useState, useRef, useEffect } from "react";

type Message = {
    role: string;
    content: string;
}

function ChatBox() {

    const [messages, setMessages] = useState<Message[]>([]);
    const [userInput, setUserInput] = useState<string>();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);


    const onSend = async () => {    
        if (!userInput?.trim()) return;
        setUserInput('');
        const newMsg:Message = {
            role:"user",
            content:userInput   
        }

        
        setMessages((prev:Message[])=>[...prev,newMsg])
        setIsLoading(true);
        const result = await axios.post("/api/aimodel", {
            messages: [
                ...messages,
                newMsg
            ]
        })
        setMessages((prev:Message[])=>[...prev,{ role: "assistant", content: result?.data?.resp }])
        console.log(result);
        setIsLoading(false);
    }
    

    return (
        <div className="h-[82vh] flex flex-col">
            <section className="flex-1 overflow-y-auto p-4">
                {messages.map((msg:Message, index) => (
                    msg.role === "user" ?
                    <div key={index} className="flex justify-end mt-2">
                        <div className="max-w-lg bg-primary text-white px-4 py-2 rounded-lg">
                            {msg.content}
                        </div>
                    </div> : 
                    <div key={index} className="flex justify-start mt-2">
                        <div className="max-w-lg bg-gray-100 text-gray-800 px-4 py-2 rounded-lg">
                            {msg.content}
                        </div>
                    </div>
                ))}

{isLoading && (
    <div className="flex justify-start mt-2">
        <div className="max-w-lg bg-gray-100 text-gray-800 px-4 py-2 rounded-lg animate-pulse">
            Assistant is typing...
        </div>
    </div>
)}

                <div ref={messagesEndRef} />
            </section>
            <section>
                <div className='border rounded-2xl p-3 relative'>
                    <Textarea placeholder="Create Your trip Paris to New York" className="w-full
                        h-28 bg-transparent border-none focus-visible:ring-0 shadow-none resize-none" onChange={(e) => setUserInput(e.target.value)} value={userInput} />
                    <Button size={'icon'} className="absolute bottom-4 right-4" onClick={() => onSend()}><Send className="w-4 h-4" /></Button>
                </div>
            </section>
        </div>
    );
}

export default ChatBox;
