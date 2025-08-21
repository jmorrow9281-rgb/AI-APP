import React, { createContext, useContext, useState, useEffect } from 'react';
import { mockChats } from '../utils/mockData';

const ChatContext = createContext();

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};

export const ChatProvider = ({ children }) => {
  const [chats, setChats] = useState([]);
  const [activeChat, setActiveChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  useEffect(() => {
    // Load mock data
    setChats(mockChats);
    if (mockChats.length > 0) {
      setActiveChat(mockChats[0]);
      setMessages(mockChats[0].messages);
    }
  }, []);

  const createNewChat = () => {
    const newChat = {
      id: Date.now().toString(),
      title: 'New Chat',
      timestamp: new Date(),
      messages: [],
      model: 'E1'
    };
    
    setChats(prev => [newChat, ...prev]);
    setActiveChat(newChat);
    setMessages([]);
  };

  const sendMessage = async (content, attachments = []) => {
    if (!activeChat) return;

    const userMessage = {
      id: Date.now().toString(),
      content,
      sender: 'user',
      timestamp: new Date(),
      attachments
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);

    // Update chat title if it's the first message
    if (messages.length === 0) {
      const title = content.length > 50 ? content.substring(0, 50) + '...' : content;
      const updatedChat = { ...activeChat, title, messages: updatedMessages };
      setActiveChat(updatedChat);
      setChats(prev => prev.map(chat => chat.id === activeChat.id ? updatedChat : chat));
    }

    // Simulate AI response
    setIsTyping(true);
    setTimeout(() => {
      const aiMessage = {
        id: (Date.now() + 1).toString(),
        content: generateAIResponse(content),
        sender: 'ai',
        timestamp: new Date(),
        model: activeChat.model
      };

      const finalMessages = [...updatedMessages, aiMessage];
      setMessages(finalMessages);
      
      const updatedChatWithAI = { ...activeChat, messages: finalMessages };
      setChats(prev => prev.map(chat => chat.id === activeChat.id ? updatedChatWithAI : chat));
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (userInput) => {
    const responses = [
      "I understand you'd like me to help with that. Let me think about the best approach...",
      "That's an interesting question! Here's what I think about it:",
      "I can definitely help you with that. Let me break it down for you:",
      "Great question! Based on my understanding, here's my response:",
      "I'll help you work through this step by step. First, let me analyze what you're asking..."
    ];
    
    return responses[Math.floor(Math.random() * responses.length)] + "\n\nThis is a mock response from the AI assistant. In a real implementation, this would connect to an actual AI model to generate meaningful responses based on your input.";
  };

  const selectChat = (chat) => {
    setActiveChat(chat);
    setMessages(chat.messages);
  };

  const deleteChat = (chatId) => {
    setChats(prev => prev.filter(chat => chat.id !== chatId));
    
    if (activeChat && activeChat.id === chatId) {
      const remainingChats = chats.filter(chat => chat.id !== chatId);
      if (remainingChats.length > 0) {
        setActiveChat(remainingChats[0]);
        setMessages(remainingChats[0].messages);
      } else {
        setActiveChat(null);
        setMessages([]);
      }
    }
  };

  const value = {
    chats,
    activeChat,
    messages,
    isTyping,
    sidebarCollapsed,
    setSidebarCollapsed,
    createNewChat,
    sendMessage,
    selectChat,
    deleteChat
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};