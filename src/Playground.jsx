import React, { useState } from 'react';
import {
  Button,
  DesignSystemProvider,
  DesignSystemThemeProvider,
  Header,
  PlusIcon,
  HomeIcon,
  FolderIcon,
  ClockIcon,
  CatalogIcon,
  WorkflowsIcon,
  CloudIcon,
  SearchIcon,
  StorefrontIcon,
  CodeIcon,
  QueryIcon,
  DashboardIcon,
  NotificationIcon,
  HistoryIcon,
  CloudDatabaseIcon,
  LightningIcon,
  IngestionIcon,
  PipelineIcon,
  BeakerIcon,
  TargetIcon,
  ModelsIcon,
  RocketIcon,
  GearIcon,
  InfoIcon,
  OverflowIcon,
  SendIcon,
  WrenchIcon,
  UserIcon,
  ChevronDownIcon,
  StarIcon,
  NewWindowIcon,
  Select,
  SelectOption,
  Typography
} from '@databricks/design-system';
import '@databricks/design-system/dist/index.css';
import './Playground.css';

const Playground = ({ onNavigate }) => {
  const [selectedModel, setSelectedModel] = useState('Claude Sonnet 4');
  const [chatInput, setChatInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleSendMessage = () => {
    if (chatInput.trim()) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        setChatInput('');
      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const handleNavigate = (view) => {
    if (onNavigate) {
      onNavigate(view);
    }
  };

  return (
    <DesignSystemProvider>
      <DesignSystemThemeProvider>
        <div className="playground-container">
          {/* Top Bar - Full Width */}
          <div className="top-bar">
            <div className="top-bar-left">
              <button 
                className="menu-button"
                onClick={toggleSidebar}
                aria-label="Toggle sidebar"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </button>
              <div className="logo">
                <div className="logo-icon">
                  <img 
                    src="/primary-lockup-full-color-rgb.svg" 
                    alt="Databricks" 
                    width="120" 
                    height="24"
                  />
                </div>
              </div>
            </div>
            <div className="search-container">
                <div className="search-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search for data, notebooks, and more..."
                  className="search-input"
                />
                <span className="search-shortcut">⌘ + P</span>
              </div>
            <div className="top-bar-right">
              <button className="icon-button sparkle-button">
                <StarIcon />
              </button>
              <button className="icon-button user-avatar">
                <div className="avatar-circle">
                  <span className="avatar-text">A</span>
                </div>
              </button>
            </div>
          </div>

          {/* Main Layout */}
          <div className="main-layout">
            {/* Left Sidebar */}
            <div className={`sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
              <div className="sidebar-section">
                <button className="new-button">
                  <PlusIcon />
                  New
                </button>
              </div>

              <div className="sidebar-section">
                <div className="nav-item">
                  <span className="nav-icon"><FolderIcon /></span>
                  <span className="nav-label">Workspace</span>
                </div>
                <div className="nav-item">
                  <span className="nav-icon"><ClockIcon /></span>
                  <span className="nav-label">Recents</span>
                </div>
                <div className="nav-item">
                  <span className="nav-icon"><CatalogIcon /></span>
                  <span className="nav-label">Catalog</span>
                </div>
                <div className="nav-item">
                  <span className="nav-icon"><SearchIcon /></span>
                  <span className="nav-label">Discover</span>
                </div>
                <div className="nav-item">
                  <span className="nav-icon"><WorkflowsIcon /></span>
                  <span className="nav-label">Jobs & Pipelines</span>
                </div>
                <div className="nav-item">
                  <span className="nav-icon"><CloudIcon /></span>
                  <span className="nav-label">Compute</span>
                </div>
                <div className="nav-item">
                  <span className="nav-icon"><StorefrontIcon /></span>
                  <span className="nav-label">Marketplace</span>
                </div>
              </div>

              <div className="sidebar-section">
                <div className="section-header">SQL</div>
                <div className="nav-item">
                  <span className="nav-icon"><CodeIcon /></span>
                  <span className="nav-label">SQL Editor</span>
                </div>
                <div className="nav-item">
                  <span className="nav-icon"><QueryIcon /></span>
                  <span className="nav-label">Queries</span>
                </div>
                <div className="nav-item">
                  <span className="nav-icon"><DashboardIcon /></span>
                  <span className="nav-label">Dashboards</span>
                </div>
                <div className="nav-item">
                  <span className="nav-icon"><CodeIcon /></span>
                  <span className="nav-label">Genie</span>
                </div>
                <div className="nav-item">
                  <span className="nav-icon"><NotificationIcon /></span>
                  <span className="nav-label">Alerts</span>
                </div>
                <div className="nav-item">
                  <span className="nav-icon"><HistoryIcon /></span>
                  <span className="nav-label">Query History</span>
                </div>
                <div className="nav-item">
                  <span className="nav-icon"><CloudDatabaseIcon /></span>
                  <span className="nav-label">SQL Warehouses</span>
                </div>
              </div>

              <div className="sidebar-section">
                <div className="section-header">Data Engineering</div>
                <div className="nav-item">
                  <span className="nav-icon"><LightningIcon /></span>
                  <span className="nav-label">Job Runs</span>
                </div>
                <div className="nav-item">
                  <span className="nav-icon"><IngestionIcon /></span>
                  <span className="nav-label">Data Ingestion</span>
                </div>
              </div>

              <div className="sidebar-section">
                <div className="section-header">Machine Learning</div>
                <div className="nav-item active">
                  <span className="nav-icon"><CodeIcon /></span>
                  <span className="nav-label">Playground</span>
                </div>
                <div className="nav-item" onClick={() => handleNavigate('agents')}>
                  <span className="nav-icon"><UserIcon /></span>
                  <span className="nav-label">Agents</span>
                </div>
                <div className="nav-item">
                  <span className="nav-icon"><BeakerIcon /></span>
                  <span className="nav-label">Experiments</span>
                </div>
                <div className="nav-item">
                  <span className="nav-icon"><TargetIcon /></span>
                  <span className="nav-label">Features</span>
                </div>
                <div className="nav-item">
                  <span className="nav-icon"><ModelsIcon /></span>
                  <span className="nav-label">Models</span>
                </div>
                <div className="nav-item">
                  <span className="nav-icon"><RocketIcon /></span>
                  <span className="nav-label">Serving</span>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="main-content">
              {/* Playground Content */}
              <div className="playground-content">
                {/* Header */}
                <div className="playground-header">
                  <div className="header-left">
                    <h4 className="playground-title">Playground</h4>
                    <Button
                      type="link"
                      onClick={() => window.open('https://example.com/feedback', '_blank')}
                      style={{ marginLeft: '8px' }}
                    >
                      Provide feedback <span style={{ marginLeft: '4px' }}><NewWindowIcon /></span>
                    </Button>
                  </div>
                  <div className="header-actions">
                    <Button 
                      type="primary" 
                      componentId="get-code-button"
                      icon={<CodeIcon />}
                    >
                      Export code
                    </Button>
                  </div>
                </div>

                {/* Model Selection */}
                <div className="model-selection">
                  <div className="model-controls">
                    <button className="model-button">
                      <span className="typography-body typography-semibold">{selectedModel}</span> <ChevronDownIcon />
                    </button>
                    <button className="icon-button settings-button">
                      <GearIcon />
                    </button>
                  </div>
                </div>

                {/* Chat Workspace */}
                <div className="chat-workspace">
                  <div className="chat-placeholder">
                    Start a conversation with {selectedModel}
                  </div>
                </div>

                {/* Chat Input */}
                <div className="chat-input-container">
                  <div className="chat-input-wrapper">
                    <div className="chat-input-header">
                      <input
                        type="text"
                        placeholder="Start typing..."
                        value={chatInput}
                        onChange={(e) => setChatInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="chat-input-field"
                      />
                    </div>
                    <div className="chat-input-actions">
                      <Button
                        type="secondary"
                        size="medium"
                        componentId="add-tools-button"
                        className="add-tools-button"
                        icon={<WrenchIcon />}
                      >
                        Add tools
                      </Button>
                      <div className="action-icons">
                        <button className="icon-button">
                          <OverflowIcon />
                        </button>
                        <button className="icon-button">
                          <SendIcon />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="disclaimer">
                  Models called in Playground may be subject to license requirements and/or use policies. Learn more
                </div>
              </div>
            </div>
          </div>
        </div>
      </DesignSystemThemeProvider>
    </DesignSystemProvider>
  );
};

export default Playground; 