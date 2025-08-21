import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChatProvider } from './contexts/ChatContext';
import { AuthProvider } from './contexts/AuthContext';
import Login from './components/Login';
import ChatInterface from './components/ChatInterface';
import { Toaster } from './components/ui/toaster';
import './App.css';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <ChatProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<ChatInterface />} />
            </Routes>
          </BrowserRouter>
          <Toaster />
        </ChatProvider>
      </AuthProvider>
    </div>
  );
}

export default App;