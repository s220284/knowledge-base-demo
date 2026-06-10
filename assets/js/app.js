// Knowledge Base Demo — shared shell + lightweight interactivity
// Injects sidebar nav so every page stays in sync.

const NAV = [
  { section: 'Workspace', items: [
    { href: 'index.html', label: 'Dashboard', icon: 'home' },
    { href: 'chat.html', label: 'Knowledge Base', icon: 'message-square' },
    { href: 'brief.html', label: 'Daily Brief', icon: 'newspaper' },
    { href: 'search.html', label: 'Search', icon: 'search' },
  ]},
  { section: 'Customers', items: [
    { href: 'accounts.html', label: 'Accounts', icon: 'building' },
    { href: 'people.html', label: 'People', icon: 'users' },
    { href: 'cdp.html', label: 'Customer Data', icon: 'layers' },
    { href: 'graph.html', label: 'Relationship Graph', icon: 'network' },
  ]},
  { section: 'Operations', items: [
    { href: 'drafts.html', label: 'Email Drafts', icon: 'mail' },
    { href: 'evals.html', label: 'Quality Evals', icon: 'bar-chart' },
    { href: 'sources.html', label: 'Data Sources', icon: 'plug' },
    { href: 'admin.html', label: 'Admin', icon: 'settings' },
  ]},
];

// Minimal inline SVG icon set (Lucide-style)
const ICONS = {
  'home': '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2h-4M9 22V12h6v10M9 22h6"/>',
  'message-square': '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  'newspaper': '<path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2M18 14h-8M15 18h-5M10 6h8M18 10h-8"/>',
  'search': '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  'building': '<rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/>',
  'users': '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  'layers': '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
  'network': '<circle cx="12" cy="12" r="3"/><circle cx="5" cy="5" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><line x1="7" y1="6" x2="10" y2="10"/><line x1="17" y1="6" x2="14" y2="10"/><line x1="7" y1="18" x2="10" y2="14"/><line x1="17" y1="18" x2="14" y2="14"/>',
  'mail': '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-10 5L2 7"/>',
  'bar-chart': '<line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/>',
  'plug': '<path d="M12 22v-5M9 8V2M15 8V2M18 8v2a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8h12z"/>',
  'settings': '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
};

function svg(name) {
  const path = ICONS[name] || '';
  return `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;
}

function renderShell(activeHref) {
  const sidebarHtml = `
    <aside class="sidebar">
      <div class="brand">
        <div class="brand-mark">A</div>
        <div>
          <div class="brand-text">Acme Corporation</div>
          <div class="brand-sub">Knowledge Base</div>
        </div>
      </div>
      <nav class="nav">
        ${NAV.map(group => `
          <div class="nav-section-label">${group.section}</div>
          ${group.items.map(item => `
            <a href="${item.href}" class="nav-item ${item.href === activeHref ? 'active' : ''}">
              ${svg(item.icon)} ${item.label}
            </a>
          `).join('')}
        `).join('')}
      </nav>
      <div class="sidebar-footer">
        <div class="avatar">AC</div>
        <div>
          <div style="font-weight:500;color:var(--ink)">Alex Chen</div>
          <div style="font-size:11px;color:var(--ink-3)">Head of Insights</div>
        </div>
      </div>
    </aside>
  `;
  const slot = document.getElementById('sidebar-slot');
  if (slot) slot.outerHTML = sidebarHtml;
}

function renderDemoBanner() {
  const banner = document.createElement('div');
  banner.className = 'demo-banner';
  banner.innerHTML = '⚠ Demo environment — all data is fictional. <a href="#about">About this demo</a>';
  document.body.insertBefore(banner, document.body.firstChild);
}

// Simple chat input simulation
function setupChatInput() {
  const input = document.getElementById('chat-input');
  const messages = document.getElementById('chat-messages');
  if (!input || !messages) return;
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && input.value.trim()) {
      const userQ = input.value.trim();
      messages.insertAdjacentHTML('beforeend', `
        <div class="msg user">
          <div class="msg-avatar">AC</div>
          <div class="msg-body">${userQ}</div>
        </div>
      `);
      input.value = '';
      messages.scrollTop = messages.scrollHeight;
      setTimeout(() => {
        messages.insertAdjacentHTML('beforeend', `
          <div class="msg ai">
            <div class="msg-avatar">KB</div>
            <div class="msg-body">
              This is a demo environment, so I cannot answer live queries. In production, this response would be generated by querying the indexed knowledge base across email, meeting transcripts, CRM activity, and document repositories, then synthesized by a large language model with grounded citations to the source material.
              <div class="msg-citations">
                <span class="citation">📧 Email · Apr 22</span>
                <span class="citation">📄 Q1 Strategy Memo</span>
                <span class="citation">🎙 Quarterly Review · Mar 14</span>
              </div>
            </div>
          </div>
        `);
        messages.scrollTop = messages.scrollHeight;
      }, 600);
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderDemoBanner();
  const active = document.body.dataset.activeNav || '';
  renderShell(active);
  setupChatInput();
});
