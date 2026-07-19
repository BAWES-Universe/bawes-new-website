# Bot File Parsing

**Status:** 🟢 LIVE

Bots analyze PDF, Word (.docx), Excel (.xlsx), and web pages (via Mozilla Readability). Users upload files or paste URLs, the bot extracts text content, and the AI responds with summaries, answers, or analysis.

## How It Works

1. User uploads a file in chat or pastes a URL
2. FileParser extracts text content (pdf-parse for PDF, mammoth for Word, xlsx for Excel, Readability for web)
3. Extracted text feeds into the AI for response generation
4. Bot answers questions, summarizes, or references specific data from the file

## Supported Formats

- **PDF** — Full text extraction via pdf-parse
- **Word (.docx)** — Document parsing via mammoth
- **Excel (.xlsx)** — Cell values and multi-sheet data via xlsx
- **Web Pages** — Content extraction via Mozilla Readability

## Security

- SSRF-protected URL fetching (private IP validation)
- In-memory parsing — file content not persisted to conversation storage
- Per-file MIME type inference from extension

## Use Cases

- "Summarize this 50-page contract"
- "What does this Excel sheet say about Q3 revenue?"
- "Read this article and tell me the key points" (with Firecrawl MCP for web extraction)
- "What are the termination conditions in this agreement?"

## Code

`bots/services/FileParser.ts`, `bots/services/WebPageExtractor.ts`

## Related

- [Bot tool calling](./bot-tool-calling/) — FileParser is called as a tool
- [MCP server management](../04-mcp/mcp-server-management/) — configure which servers a bot connects to
