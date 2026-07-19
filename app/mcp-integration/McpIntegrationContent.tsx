'use client'

'use client';

import React from 'react';
import Section from '@/components/Section';
import Button from '@/components/ui/Button';
import Link from 'next/link';
export default function McpIntegrationPageContent() {
  return (
    <main className="relative pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-2">
        <div className="flex items-center gap-2 text-xs text-text-muted">
          <Link href="/developers" className="hover:text-primary transition-colors">Developers</Link>
          <span className="text-white/20">/</span>
          <span className="text-primary">MCP Integration</span>
        </div>
      </div>

      {/* Hero */}
      <section className="max-w-container-max mx-auto px-gutter py-section-padding-v grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-border-purple">
            <span className="material-symbols-outlined text-sm text-primary">hub</span>
            <span className="text-caption font-caption uppercase tracking-widest text-primary">MCP Protocol v1.0</span>
          </div>
          <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface">
            Connect <span className="text-gradient">Everything.</span>
          </h1>
          <p className="font-body-md text-body-md text-text-secondary max-w-xl">
            Model Context Protocol (MCP) integration lets your bots connect to any tool, API, or data source. Give your AI agents real-time access to calendars, databases, ticketing systems, and more — all from inside your universe.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="https://github.com/BAWES-Universe/workadventure-universe/blob/universe/docs/developer/bots/mcp-servers.md"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-sm inline-flex items-center gap-2 hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(139,92,246,0.35)] transition-all duration-200"
            >
              View MCP Servers
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
            <a
              href="https://github.com/BAWES-Universe/workadventure-universe/blob/universe/docs/developer/bots/scripting.md"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card text-on-surface px-8 py-4 rounded-full font-bold hover:bg-white/5 transition-all inline-flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-base">code</span>
              Bot Scripting Guide
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="glass-card rounded-2xl p-8 overflow-hidden border-purple/30">
            <div className="flex items-center gap-2 mb-6 border-b border-divider pb-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <div className="ml-4 text-caption text-text-low-emphasis font-mono">mcp-config.json</div>
            </div>
            <pre className="font-mono text-sm leading-relaxed text-primary overflow-x-auto">{`{
  "mcpServers": {
    "calendar": {
      "url": "https://mcp.bawes.io/calendar",
      "tools": ["list_events", "create_event"]
    },
    "ticketing": {
      "url": "https://mcp.bawes.io/jira",
      "tools": ["search_issues", "create_ticket"]
    }
  }
}`}</pre>
            <div className="absolute -bottom-10 -right-10 opacity-10">
              <span className="material-symbols-outlined text-[200px]">hub</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-surface-container-low py-section-padding-v">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-16">
            <h2 className="font-headline-section text-headline-section text-on-surface">How MCP Works</h2>
            <p className="text-text-secondary max-w-xl mx-auto mt-4">Bots discover and call tools via the Model Context Protocol over HTTP.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="glass-card p-6 rounded-xl text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 border border-primary/20">
                <span className="material-symbols-outlined text-primary">search</span>
              </div>
              <h3 className="font-bold text-white mb-2">1. Discover Tools</h3>
              <p className="text-text-secondary text-sm">On startup and every hour, the bot calls <code className="text-primary text-xs">tools/list</code> on each MCP server to discover available capabilities.</p>
            </div>
            <div className="glass-card p-6 rounded-xl text-center">
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4 border border-secondary/20">
                <span className="material-symbols-outlined text-secondary">psychology</span>
              </div>
              <h3 className="font-bold text-white mb-2">2. AI Chooses</h3>
              <p className="text-text-secondary text-sm">During conversation, the AI model selects the right tool based on the player&apos;s request and the tool&apos;s schema.</p>
            </div>
            <div className="glass-card p-6 rounded-xl text-center">
              <div className="w-14 h-14 rounded-full bg-tertiary/10 flex items-center justify-center mx-auto mb-4 border border-tertiary/20">
                <span className="material-symbols-outlined text-tertiary">call_made</span>
              </div>
              <h3 className="font-bold text-white mb-2">3. Execute & Respond</h3>
              <p className="text-text-secondary text-sm">The bot sends <code className="text-tertiary text-xs">tools/call</code> to the MCP server and feeds the result back to the AI for the final response.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration */}
      <section className="max-w-container-max mx-auto px-gutter py-section-padding-v">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-headline-section text-headline-section text-on-surface">Registering an MCP Server</h2>
            <p className="text-text-secondary">In the in-game bot editor, under <strong>MCP Servers</strong>, you can add, edit, test, and remove servers. Each server requires:</p>
            <div className="glass-card p-6 rounded-xl">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-sm flex-shrink-0 mt-0.5">badge</span>
                  <div>
                    <p className="text-sm font-semibold text-white">Name</p>
                    <p className="text-xs text-text-secondary">Label for the server (e.g. &ldquo;Knowledge Base&rdquo;)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-sm flex-shrink-0 mt-0.5">link</span>
                  <div>
                    <p className="text-sm font-semibold text-white">Server URL</p>
                    <p className="text-xs text-text-secondary">Full URL of the MCP-over-HTTP endpoint</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-sm flex-shrink-0 mt-0.5">key</span>
                  <div>
                    <p className="text-sm font-semibold text-white">Auth Type</p>
                    <p className="text-xs text-text-secondary">None, Bearer Token, or API Key (stored encrypted)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-sm flex-shrink-0 mt-0.5">list</span>
                  <div>
                    <p className="text-sm font-semibold text-white">Headers</p>
                    <p className="text-xs text-text-secondary">Optional custom headers sent with every request</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="glass-card rounded-2xl p-6 border border-purple/20">
            <div className="flex items-center gap-2 mb-4 border-b border-divider pb-3">
              <span className="material-symbols-outlined text-primary">check_circle</span>
              <span className="text-sm font-semibold text-white">Test Connection</span>
            </div>
            <p className="text-text-secondary text-sm mb-4">After saving, click <strong>Test Connection</strong> to verify the <code className="text-purple-400 text-xs">tools/list</code> response and see which tools are exposed by your server.</p>
            <div className="glass-card rounded-xl overflow-hidden border border-purple-500/20">
              <div className="flex items-center gap-2 px-3 py-2 border-b border-white/5 bg-white/5">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                </div>
                <span className="ml-3 text-[10px] text-white/40 font-mono">test-connection.http</span>
              </div>
              <pre className="p-3 font-mono text-xs leading-relaxed text-purple-300 overflow-x-auto"><code>{`POST /mcp
Content-Type: application/json

{
  "jsonrpc": "2.0",
  "id": "test",
  "method": "tools/list"
}`}</code></pre>
            </div>
          </div>
        </div>
      </section>

      {/* Transport Details */}
      <section className="bg-surface-container-low py-section-padding-v">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-16">
            <h2 className="font-headline-section text-headline-section text-on-surface">Transport Contract</h2>
            <p className="text-text-secondary max-w-xl mx-auto mt-4">MCP over Streamable HTTP — the same protocol used by Claude Code and other MCP clients.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="glass-card rounded-xl p-6">
              <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">handshake</span>
                Initialize
              </h3>
              <p className="text-text-secondary text-sm mb-4">Sent before any method call. The server can return a <code className="text-purple-400 text-xs">Mcp-Session-Id</code> header for stateful sessions.</p>
              <div className="glass-card rounded-xl overflow-hidden border border-purple-500/20">
                <div className="flex items-center gap-2 px-3 py-2 border-b border-white/5 bg-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                  </div>
                  <span className="ml-3 text-[10px] text-white/40 font-mono">initialize.json</span>
                </div>
                <pre className="p-3 font-mono text-xs leading-relaxed text-purple-300 overflow-x-auto max-h-48"><code>{`{
  "jsonrpc": "2.0",
  "id": "init",
  "method": "initialize",
  "params": {
    "protocolVersion": "2024-11-05",
    "capabilities": {},
    "clientInfo": {
      "name": "workadventure-mcp-bot",
      "version": "1.0.0",
      "player_id": "<player-uuid>"
    }
  }
}`}</code></pre>
              </div>
            </div>
            <div className="glass-card rounded-xl p-6">
              <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">call</span>
                tools/call
              </h3>
              <p className="text-text-secondary text-sm mb-4">When the AI selects a tool, the bot sends a <code className="text-purple-400 text-xs">tools/call</code> request with the chosen arguments.</p>
              <div className="glass-card rounded-xl overflow-hidden border border-purple-500/20">
                <div className="flex items-center gap-2 px-3 py-2 border-b border-white/5 bg-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                  </div>
                  <span className="ml-3 text-[10px] text-white/40 font-mono">tools-call.json</span>
                </div>
                <pre className="p-3 font-mono text-xs leading-relaxed text-purple-300 overflow-x-auto max-h-48"><code>{`{
  "jsonrpc": "2.0",
  "id": "exec",
  "method": "tools/call",
  "params": {
    "name": "my_tool",
    "arguments": {
      "query": "latest updates"
    }
  }
}`}</code></pre>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-text-secondary text-sm max-w-xl mx-auto">
              Timeout: <strong className="text-white">10 seconds</strong>. Requests exceeding this are discarded and the AI receives an error.
              All tool requests are sent with <code className="text-primary text-xs">player_id</code> for per-user session tracking.
            </p>
          </div>
        </div>
      </section>

      {/* Player Identification */}
      <section className="max-w-container-max mx-auto px-gutter py-section-padding-v">
        <div className="glass-card rounded-2xl p-8 md:p-12 border border-purple/20">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="font-headline-section text-headline-section text-on-surface">Player Identification</h2>
              <p className="text-text-secondary">Each player gets their own MCP session, allowing your server to distinguish users and maintain per-player state.</p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-sm flex-shrink-0 mt-0.5">badge</span>
                  <div>
                    <p className="text-sm font-semibold text-white"><code className="text-purple-400">player_id</code></p>
                    <p className="text-xs text-text-secondary">A stable UUID sent with every initialize request. Use it for per-player state, context, and rate limits.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-sm flex-shrink-0 mt-0.5">explore</span>
                  <div>
                    <p className="text-sm font-semibold text-white">Tool Discovery</p>
                    <p className="text-xs text-text-secondary">During initial tool discovery (before any player conversation), <code className="text-purple-400">player_id</code> is <code className="text-purple-400">null</code>. Your handler must accept null.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-sm flex-shrink-0 mt-0.5">sync_saved_locally</span>
                  <div>
                    <p className="text-sm font-semibold text-white">Session Lifecycle</p>
                    <p className="text-xs text-text-secondary">Each player gets a cached MCP session keyed by server URL, auth config, and <code className="text-purple-400">player_id</code>. Sessions expire after 1 hour of inactivity. First tool call per player triggers one <code className="text-purple-400">initialize</code> round-trip (~50&ndash;200ms), then reuse within the hour.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-sm flex-shrink-0 mt-0.5">cached</span>
                  <div>
                    <p className="text-sm font-semibold text-white">Tool List Caching</p>
                    <p className="text-xs text-text-secondary">The tool list from <code className="text-purple-400">tools/list</code> is cached for 1 hour across all players. Tool changes may take up to 1 hour to propagate unless the bot is restarted.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="glass-card rounded-2xl overflow-hidden border border-purple-500/20">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/5 bg-white/5">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                </div>
                <span className="ml-4 text-xs text-white/40 font-mono">session-lifecycle.ts</span>
              </div>
              <pre className="p-4 font-mono text-xs leading-relaxed text-purple-300 overflow-x-auto max-h-48"><code>{`// Each player gets their own session
const sessions = new Map();

function getSession(playerId, serverUrl) {
  const key = \`$\{playerId}:$\{serverUrl}\`;
  let session = sessions.get(key);

  if (!session || isExpired(session)) {
    // Triggers initialize round-trip
    session = createSession(serverUrl);
    sessions.set(key, session);
  }

  return session;
}

// Session expires after 1h inactivity
// Tool list refreshes every 1h
setInterval(refreshToolList, 3600000);`}</code></pre>
            </div>
          </div>
        </div>
      </section>

      {/* Example Server */}
      <section className="max-w-container-max mx-auto px-gutter py-section-padding-v">
        <div className="glass-card rounded-2xl p-8 md:p-12 border border-purple/20">
          <h2 className="font-headline-section text-headline-section text-on-surface mb-4">Minimal MCP Server (Node.js)</h2>
          <p className="text-text-secondary mb-8">A complete, runnable example to get started with your own MCP server.</p>
          <div className="glass-card rounded-2xl overflow-hidden border border-purple-500/20">
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/5 bg-white/5">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
              </div>
              <span className="ml-4 text-xs text-white/40 font-mono">mcp-server.js</span>
            </div>
            <pre className="p-4 font-mono text-xs leading-relaxed text-purple-300 overflow-x-auto max-h-64"><code>{`import express from 'express';
const app = express();
app.use(express.json());

app.post('/mcp', (req, res) => {
  const { method, params } = req.body;

  if (method === 'initialize') {
    return res.json({
      jsonrpc: '2.0', id: req.body.id,
      result: { protocolVersion: '2024-11-05',
        capabilities: {},
        serverInfo: { name: 'example-mcp', version: '1.0.0' },
      },
    });
  }

  if (method === 'tools/list') {
    return res.json({
      jsonrpc: '2.0', id: req.body.id,
      result: { tools: [{
        name: 'my_query',
        description: 'Query knowledge about a topic',
        inputSchema: {
          type: 'object',
          properties: { topic: { type: 'string' } },
        },
      }]},
    });
  }

  if (method === 'tools/call') {
    const result = \`You asked about: \${params.arguments.topic}\`;
    return res.json({
      jsonrpc: '2.0', id: req.body.id,
      result: { content: [{ type: 'text', text: result }] },
    });
  }

  res.status(400).json({
    jsonrpc: '2.0', id: req.body.id,
    error: { code: -32601, message: 'Method not found' },
  });
});

app.listen(3001);`}</code></pre>
          </div>
        </div>
      </section>

      {/* Deep Dives */}
      <section className="max-w-container-max mx-auto px-gutter py-section-padding-v">
        <h2 className="font-headline-section text-headline-section text-on-surface mb-12 text-center">Related Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/features/bot-tools" className="glass-card p-card-padding rounded-2xl group cursor-pointer">
            <span className="material-symbols-outlined text-primary mb-4 text-3xl">handyman</span>
            <h3 className="font-headline-card text-headline-card text-on-surface mb-2 group-hover:text-primary transition-colors">Bot Tool Calling</h3>
            <p className="text-text-secondary text-sm">Bots invoke tools inside conversations to perform real-world actions.</p>
          </Link>
          <Link href="/features/bot-behaviors" className="glass-card p-card-padding rounded-2xl group cursor-pointer">
            <span className="material-symbols-outlined text-secondary mb-4 text-3xl">psychology</span>
            <h3 className="font-headline-card text-headline-card text-on-surface mb-2 group-hover:text-secondary transition-colors">Bot Behaviors</h3>
            <p className="text-text-secondary text-sm">Define complex behavioral patterns and personality-driven AI responses.</p>
          </Link>
          <Link href="/features/scripting" className="glass-card p-card-padding rounded-2xl group cursor-pointer">
            <span className="material-symbols-outlined text-tertiary mb-4 text-3xl">terminal</span>
            <h3 className="font-headline-card text-headline-card text-on-surface mb-2 group-hover:text-tertiary transition-colors">Scripting API</h3>
            <p className="text-text-secondary text-sm">Write custom in-world logic with JS/TS for complete control.</p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-container-max mx-auto px-gutter py-section-padding-v text-center">
        <div className="glass-card p-12 rounded-3xl relative overflow-hidden">
          <h2 className="font-headline-section text-headline-section text-on-surface mb-6">Ready to connect your bots?</h2>
          <p className="text-text-secondary max-w-xl mx-auto mb-10">Give your AI agents the power to act. MCP integration unlocks a new dimension of bot capabilities.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/BAWES-Universe/workadventure-universe/blob/universe/docs/developer/bots/mcp-servers.md"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-4 rounded-full font-bold inline-flex items-center gap-2 hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(139,92,246,0.35)] transition-all duration-200"
            >
              Get Started with MCP
            </a>
            <a
              href="https://github.com/BAWES-Universe/workadventure-universe/blob/universe/docs/developer/bots/scripting.md"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card text-on-surface px-10 py-4 rounded-full font-bold hover:bg-white/5 transition-all inline-flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-base">open_in_new</span>
              Explore Bot Scripting
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
