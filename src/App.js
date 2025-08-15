import React, { useState, useRef, useEffect } from 'react';
import Playground from './Playground';
import TypographyShowcase from './TypographyShowcase';
import AgentsPage from './AgentsPage';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('playground');
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isMinimized, setIsMinimized] = useState(false);
  const toggleRef = useRef(null);

  const handleMouseDown = (e) => {
    if (e.target.closest('.toggle-button') || e.target.closest('.minimize-button')) return; // Don't drag when clicking buttons
    
    setIsDragging(true);
    const rect = toggleRef.current.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const newX = e.clientX - dragOffset.x;
    const newY = e.clientY - dragOffset.y;
    
    // Keep within viewport bounds
    const maxX = window.innerWidth - (toggleRef.current?.offsetWidth || 200);
    const maxY = window.innerHeight - (toggleRef.current?.offsetHeight || 60);
    
    setPosition({
      x: Math.max(0, Math.min(newX, maxX)),
      y: Math.max(0, Math.min(newY, maxY))
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragOffset]);

  const handleNavigate = (view) => {
    setCurrentView(view);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'playground':
        return <Playground onNavigate={handleNavigate} />;
      case 'typography':
        return <TypographyShowcase />;
      case 'agents':
        return <AgentsPage onNavigate={handleNavigate} />;
      default:
        return <Playground onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="App">
      <div 
        className={`view-toggle ${isMinimized ? 'minimized' : ''}`}
        ref={toggleRef}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          cursor: isDragging ? 'grabbing' : 'grab'
        }}
        onMouseDown={handleMouseDown}
      >
        {!isMinimized && (
          <>
            <button 
              className={`toggle-button ${currentView === 'playground' ? 'active' : ''}`}
              onClick={() => setCurrentView('playground')}
            >
              Playground
            </button>
            <button 
              className={`toggle-button ${currentView === 'typography' ? 'active' : ''}`}
              onClick={() => setCurrentView('typography')}
            >
              Typography Showcase
            </button>
            <button 
              className={`toggle-button ${currentView === 'agents' ? 'active' : ''}`}
              onClick={() => setCurrentView('agents')}
            >
              Agents
            </button>
          </>
        )}
        
        <div className="toggle-controls">
          {isMinimized && (
            <span className="current-view-label">
              {currentView === 'playground' ? 'Playground' : 
               currentView === 'typography' ? 'Typography' : 
               currentView === 'agents' ? 'Agents' : 'Playground'}
            </span>
          )}
          <button 
            className="minimize-button"
            onClick={toggleMinimize}
            title={isMinimized ? 'Maximize' : 'Minimize'}
          >
            {isMinimized ? (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="4,14 10,14 10,20"></polyline>
                <polyline points="20,10 14,10 14,4"></polyline>
                <line x1="14" y1="10" x2="21" y2="3"></line>
                <line x1="3" y1="21" x2="10" y2="14"></line>
              </svg>
            ) : (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="4,14 10,14 10,20"></polyline>
                <polyline points="20,10 14,10 14,4"></polyline>
                <line x1="14" y1="10" x2="21" y2="3"></line>
                <line x1="3" y1="21" x2="10" y2="14"></line>
              </svg>
            )}
          </button>
          
          {!isMinimized && (
            <div className="drag-handle">
              <div className="drag-dots">
                <div className="drag-dot"></div>
                <div className="drag-dot"></div>
                <div className="drag-dot"></div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {renderCurrentView()}
    </div>
  );
}

export default App; 