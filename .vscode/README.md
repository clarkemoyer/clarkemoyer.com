# VS Code Configuration

This directory contains VS Code workspace settings for the clarkemoyer.com project.

## Canva MCP Server

The project is configured to use the Canva MCP (Model Context Protocol) Server, which allows GitHub Copilot and Claude to interact with Canva's design API.

### Setup

1. **Install the Canva MCP Server** (automatic via npx)
   - The server will be automatically downloaded when first accessed via `npx @canva/mcp-server`

2. **Configure Environment Variables**
   - Create a `.env.local` file in the project root (or set environment variables in your system)
   - Add your Canva API credentials:
     ```
     CANVA_CLIENT_ID=your_client_id_here
     CANVA_CLIENT_SECRET=your_client_secret_here
     ```

3. **Get Canva API Credentials**
   - Visit the [Canva Developers Portal](https://www.canva.com/developers/)
   - Create a new app or use an existing app
   - Copy the Client ID and Client Secret

### Usage

Once configured, you can use the Canva MCP server through:
- GitHub Copilot Chat in VS Code
- Claude Desktop (if configured)

The MCP server enables capabilities like:
- Creating designs in Canva
- Searching for templates
- Managing design assets
- Automating design workflows

### Documentation

For more information, see:
- [Canva MCP Server Documentation](https://www.canva.dev/docs/connect/canva-mcp-server-setup/)
- [Model Context Protocol Specification](https://modelcontextprotocol.io/)

### Troubleshooting

If you encounter issues:
1. Verify your environment variables are set correctly
2. Ensure you have an active internet connection (MCP server requires network access)
3. Check that your Canva API credentials are valid
4. Review the [Canva MCP GitHub repository](https://github.com/canva-public/canva-mcp-server) for known issues
