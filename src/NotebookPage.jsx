import React, { useState } from 'react';
import './NotebookPage.css';

function NotebookPage({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('notebook');
  const [notebookTitle, setNotebookTitle] = useState('2025 NFL Combine');
  const [language, setLanguage] = useState('Python');
  const [tabsEnabled, setTabsEnabled] = useState(true);
  const [lastEdit, setLastEdit] = useState('2 days ago');
  const [clusterInfo, setClusterInfo] = useState('16.x Shared Autoscali...');

  const sidebarItems = [
    { name: 'Workspace', icon: '📁', active: true },
    { name: 'Recents', icon: '🕒' },
    { name: 'Catalog', icon: '🗂️' },
    { name: 'Discover', icon: '🔍' },
    { name: 'Jobs & Pipelines', icon: '⚙️' },
    { name: 'Compute', icon: '🖥️' },
    { name: 'Marketplace', icon: '🏪' },
    { name: 'SQL', icon: '💾', subItems: ['SQL Editor', 'Queries', 'Dashboards', 'Genie', 'Alerts', 'Query History', 'SQL Warehouses'] },
    { name: 'Data Engineering', icon: '🔧', subItems: ['Runs', 'Data Ingestion'] },
    { name: 'AI/ML', icon: '🤖', subItems: ['Playground', 'Agents Beta', 'Experiments', 'Features', 'Models', 'Serving'] }
  ];

  const notebookCells = [
    {
      type: 'markdown',
      content: '## Step 1: Load & Preview 2025 NFL Combine Table\n\nThis notebook will read a sample (up to 1,000 rows) from the table `kyle_gilbreath.nfl_combine_data.2025_nfl_combine`.\n\n**Objectives:**\n- Display the Spark DataFrame for a quick glimpse.\n- Convert the sample to a pandas DataFrame to check shape and data types.\n- Show basic descriptive statistics for numeric columns.\n\nThe overview helps understand available columns before looking for trends.',
      status: 'completed'
    },
    {
      type: 'text',
      content: 'Step 1 Code Cells',
      status: 'completed'
    },
    {
      type: 'code',
      language: 'python',
      content: `# Load sample of 2025 NFL Combine data (limit 1000 rows)
from pyspark.sql import functions as F

TABLE_NAME = "kyle_gilbreath.nfl_combine_data.2025_nfl_combine"

# Select all columns but limit to 1000 rows to keep it lightweight
combine_df = spark.table(TABLE_NAME).limit(1000)

# Display the Spark DataFrame (first 20 rows) for a quick glance
display(combine_df)`,
      status: 'completed',
      executionTime: '1s',
      lastRun: '2 days ago'
    }
  ];

  const sampleData = [
    { name: 'Abdul Carter', school: 'Penn State', position: 'LB', draftedBy: null, age: 21, height: '6-3', weight: 250, armLength: 32.5, handSpan: 9.5 },
    { name: 'Travis Hunter', school: 'Colorado', position: 'CB', draftedBy: null, age: 20, height: '6-1', weight: 185, armLength: 31.0, handSpan: 9.0 },
    { name: 'Ashton Jeanty', school: 'Boise State', position: 'RB', draftedBy: null, age: 21, height: '5-9', weight: 205, armLength: 30.5, handSpan: 9.25 },
    { name: 'Mason Graham', school: 'Michigan', position: 'DT', draftedBy: null, age: 22, height: '6-3', weight: 318, armLength: 33.0, handSpan: 10.0 },
    { name: 'Tyler Warren', school: 'Penn State', position: 'TE', draftedBy: null, age: 21, height: '6-6', weight: 257, armLength: 33.5, handSpan: 10.25 },
    { name: 'Jalon Walker', school: 'Georgia', position: 'LB', draftedBy: null, age: 21, height: '6-2', weight: 245, armLength: 32.0, handSpan: 9.75 }
  ];

  return (
    <div className="notebook-page">
      {/* Left Sidebar */}
      <div className="notebook-sidebar">
        <div className="sidebar-header">
          <h3>Databricks</h3>
        </div>
        <nav className="sidebar-nav">
          {sidebarItems.map((item, index) => (
            <div key={index} className={`sidebar-item ${item.active ? 'active' : ''}`}>
              <div className="sidebar-item-main">
                <span className="sidebar-icon">{item.icon}</span>
                <span className="sidebar-text">{item.name}</span>
                {item.subItems && <span className="expand-arrow">▼</span>}
              </div>
              {item.subItems && (
                <div className="sidebar-subitems">
                  {item.subItems.map((subItem, subIndex) => (
                    <div key={subIndex} className="sidebar-subitem">
                      {subItem}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="notebook-main">
        {/* Top Bar */}
        <div className="notebook-topbar">
          <div className="topbar-left">
            <div className="menu-bar">
              <span className="menu-item">File</span>
              <span className="menu-item">Edit</span>
              <span className="menu-item">View</span>
              <span className="menu-item">Run</span>
              <span className="menu-item">Help</span>
            </div>
            <div className="language-selector">
              <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                <option value="Python">Python</option>
                <option value="Scala">Scala</option>
                <option value="SQL">SQL</option>
                <option value="R">R</option>
              </select>
            </div>
          </div>
          
          <div className="topbar-center">
            <div className="notebook-tabs">
              <span className={`tab ${activeTab === 'notebook' ? 'active' : ''}`}>
                {notebookTitle}
              </span>
            </div>
            <div className="notebook-info">
              <span className="tabs-toggle">Tabs: {tabsEnabled ? 'ON' : 'OFF'}</span>
              <span className="last-edit">Last edit was {lastEdit}</span>
            </div>
          </div>

          <div className="topbar-right">
            <button className="run-all-btn">Run all</button>
            <div className="cluster-info">
              <span className="cluster-label">Cluster:</span>
              <span className="cluster-name">{clusterInfo}</span>
            </div>
            <button className="schedule-btn">Schedule</button>
            <button className="share-btn">Share</button>
          </div>
        </div>

        {/* Notebook Content */}
        <div className="notebook-content">
          {notebookCells.map((cell, index) => (
            <div key={index} className={`notebook-cell ${cell.type}`}>
              {cell.type === 'markdown' && (
                <div className="cell-header markdown-header">
                  <span className="cell-type">Markdown</span>
                  {cell.status === 'completed' && <span className="cell-status">✓</span>}
                </div>
              )}
              
              {cell.type === 'text' && (
                <div className="cell-header text-header">
                  <span className="cell-type">Text</span>
                  {cell.status === 'completed' && <span className="cell-status">✓</span>}
                </div>
              )}
              
              {cell.type === 'code' && (
                <div className="cell-header code-header">
                  <span className="cell-type">{cell.language}</span>
                  {cell.status === 'completed' && (
                    <div className="cell-execution-info">
                      <span className="execution-time">{cell.executionTime}</span>
                      <span className="last-run">{cell.lastRun}</span>
                    </div>
                  )}
                </div>
              )}

              <div className="cell-content">
                {cell.type === 'markdown' && (
                  <div className="markdown-content" dangerouslySetInnerHTML={{ __html: cell.content.replace(/\n/g, '<br/>') }} />
                )}
                
                {cell.type === 'text' && (
                  <div className="text-content">{cell.content}</div>
                )}
                
                {cell.type === 'code' && (
                  <div className="code-content">
                    <pre><code>{cell.content}</code></pre>
                  </div>
                )}
              </div>

              {/* Show output for completed code cells */}
              {cell.type === 'code' && cell.status === 'completed' && (
                <div className="cell-output">
                  <div className="output-header">
                    <span className="output-label">Output</span>
                  </div>
                  <div className="output-table">
                    <table>
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>School</th>
                          <th>Position</th>
                          <th>Drafted By</th>
                          <th>Age on Draft Day</th>
                          <th>Height (FIIE)</th>
                          <th>Weight (lbs.)</th>
                          <th>Arm Length (inches)</th>
                          <th>Hand Span (inches)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sampleData.map((row, rowIndex) => (
                          <tr key={rowIndex}>
                            <td>{row.name}</td>
                            <td>{row.school}</td>
                            <td>{row.position}</td>
                            <td>{row.draftedBy || 'null'}</td>
                            <td>{row.age}</td>
                            <td>{row.height}</td>
                            <td>{row.weight}</td>
                            <td>{row.armLength}</td>
                            <td>{row.handSpan}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NotebookPage;
