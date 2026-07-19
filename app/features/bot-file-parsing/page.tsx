import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Bot File Parsing — PDF, Word, Excel, Web Pages',
  description: 'Drop a PDF, Word doc, Excel spreadsheet, or paste a URL — bots extract the content and answer questions about it in real time.',
}

export default function BotFileParsingPage() {
  return (
    <div className="pt-20 relative min-h-screen overflow-hidden">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 pt-0 pb-2">
        <div className="flex items-center gap-2 text-xs text-text-muted">
          <Link href="/features-overview" className="hover:text-primary transition-colors">Features</Link>
          <span className="text-white/20">/</span>
          <Link href="/ai-bots" className="hover:text-primary transition-colors">AI Bots</Link>
          <span className="text-white/20">/</span>
          <span className="text-primary">Bot File Parsing</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative z-10 min-h-[70vh] flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-purple-300 mb-8 border border-purple-500/20">
            <span className="material-symbols-outlined text-lg">description</span>
            File Analysis
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Bots That <span className="text-gradient">Read Your Files.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto">
            Drop a PDF, Word doc, Excel spreadsheet, or paste a URL — bots extract the content and answer questions about it in real time.
          </p>
        </div>
      </section>

      {/* Supported Formats */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Supported Formats</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card p-8 rounded-xl flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
                <span className="material-symbols-outlined text-primary text-3xl">picture_as_pdf</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">PDF</h3>
              <p className="text-white/60 text-sm">Full text extraction from any PDF — contracts, reports, research papers, manuals.</p>
            </div>
            <div className="glass-card p-8 rounded-xl flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6 border border-secondary/20">
                <span className="material-symbols-outlined text-secondary text-3xl">description</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Word (.docx)</h3>
              <p className="text-white/60 text-sm">Parse Microsoft Word documents, including formatting, tables, and structured content.</p>
            </div>
            <div className="glass-card p-8 rounded-xl flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-tertiary/10 flex items-center justify-center mb-6 border border-tertiary/20">
                <span className="material-symbols-outlined text-tertiary text-3xl">table_chart</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Excel (.xlsx)</h3>
              <p className="text-white/60 text-sm">Extract data from spreadsheets — cell values, formulas, multiple sheets, structured data.</p>
            </div>
            <div className="glass-card p-8 rounded-xl flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-accent-amber/10 flex items-center justify-center mb-6 border border-accent-amber/20">
                <span className="material-symbols-outlined text-amber-400 text-3xl">language</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Web Pages</h3>
              <p className="text-white/60 text-sm">URL content extraction via Mozilla Readability — articles, documentation, blog posts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-xl">
              <div className="text-5xl font-bold text-primary/30 mb-4">1</div>
              <h3 className="text-xl font-semibold text-white mb-3">Upload</h3>
              <p className="text-white/60">Drag a file into the chat or paste a URL. The bot accepts it as part of the conversation message.</p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <div className="text-5xl font-bold text-secondary/30 mb-4">2</div>
              <h3 className="text-xl font-semibold text-white mb-3">Extract</h3>
              <p className="text-white/60">FileParser extracts text content — from PDF pages, Word paragraphs, Excel cells, or web article body text via Readability.</p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <div className="text-5xl font-bold text-tertiary/30 mb-4">3</div>
              <h3 className="text-xl font-semibold text-white mb-3">Respond</h3>
              <p className="text-white/60">The AI reads the extracted content and answers your questions, summarizes key points, or references specific data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">What You Can Ask</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-8 rounded-xl">
              <span className="material-symbols-outlined text-primary text-3xl mb-4 block">summarize</span>
              <h3 className="text-lg font-semibold text-white mb-2">Summarize a 50-page contract</h3>
              <p className="text-white/60 text-sm">Upload a PDF and ask the bot to extract key terms, deadlines, and obligations.</p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <span className="material-symbols-outlined text-secondary text-3xl mb-4 block">query_stats</span>
              <h3 className="text-lg font-semibold text-white mb-2">Analyze spreadsheet data</h3>
              <p className="text-white/60 text-sm">Drop an Excel file and ask &ldquo;What does this say about Q3 revenue?&rdquo;</p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <span className="material-symbols-outlined text-tertiary text-3xl mb-4 block">article</span>
              <h3 className="text-lg font-semibold text-white mb-2">Extract key points from an article</h3>
              <p className="text-white/60 text-sm">Paste a URL and the bot reads the page via Readability, then summarizes the main arguments.</p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <span className="material-symbols-outlined text-amber-400 text-3xl mb-4 block">help</span>
              <h3 className="text-lg font-semibold text-white mb-2">Ask questions about any document</h3>
              <p className="text-white/60 text-sm">&ldquo;What are the termination conditions in this agreement?&rdquo; — the bot finds the answer in the file.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical / Security */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card p-8 md:p-12 rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Security &amp; Reliability</h2>
                <p className="text-white/60 mb-6">FileParser includes SSRF protection — URL fetches are validated against private IP ranges to prevent server-side request forgery attacks. Files are parsed in-memory and never persisted to conversation storage.</p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    <span>SSRF-protected URL fetching (private IP validation)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    <span>In-memory parsing — no file content persisted to storage</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    <span>Per-file MIME type inference from extension</span>
                  </li>
                </ul>
              </div>
              <div className="bg-black/40 border border-white/10 rounded-xl p-6 font-mono text-sm">
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
                  <span className="text-white/40">Supported MIME types</span>
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                  </div>
                </div>
                <pre className="text-purple-200 leading-relaxed overflow-x-auto whitespace-pre-wrap break-all">
<span className="text-white/40">{'// FileParser handles'}</span>
<span className="text-orange-400">{'"application/pdf"'}</span>        → pdf-parse
<span className="text-orange-400">{'"application/vnd.openxmlformats"'}</span> → mammoth
<span className="text-orange-400">{'"application/vnd.ms-excel"'}</span>   → xlsx
<span className="text-orange-400">{'"text/html"'}</span>               → readability
<span className="text-orange-400">{'"text/plain"'}</span>              → passthrough</pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to let bots read your files?</h2>
          <p className="text-white/60 mb-8">Drop a document in chat and get instant answers.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="gradient-cta text-white font-semibold px-6 py-3 rounded-xl inline-flex items-center gap-2 hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(139,92,246,0.35)] transition-all duration-200">
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
              Explore the Universe
            </Link>
            <Link href="/features/bot-tools" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[rgba(255,255,255,0.12)] text-text-secondary font-medium hover:border-[rgba(255,255,255,0.3)] hover:text-white hover:bg-[rgba(255,255,255,0.04)] transition-all duration-200">
              See bot tool calling →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
