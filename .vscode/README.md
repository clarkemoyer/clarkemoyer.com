# VS Code Configuration

This directory contains VS Code workspace settings for the clarkemoyer.com project.

## Canva AI Connector

The project is configured to use the Canva AI Connector, which allows your AI assistant to seamlessly interact with Canva's design capabilities using the Model Context Protocol (MCP).

### Before You Start

To use the Canva AI Connector, you'll need:
- An AI assistant that can use AI connectors or MCP servers (such as GitHub Copilot in VS Code)
- A Canva account with any Canva plan
- Node.js 22.16 or later with npm (install from https://nodejs.org/en/download if needed)

**Note:** Some features require a paid Canva plan (Canva Pro or Enterprise). For example, autofill tools may only be available on Enterprise, while exporting designs is included in all plans.

### Setup

The Canva AI Connector is already configured in `.vscode/mcp.json`. The configuration will automatically:
- Download the MCP remote server when first accessed via `npx mcp-remote@latest`
- Connect to Canva's hosted MCP server at `https://mcp.canva.com/mcp`
- Enable your AI assistant to interact with Canva

**No API credentials are required** - the connector uses Canva's hosted service.

### Usage

Once configured, you can use the Canva AI Connector through GitHub Copilot Chat in VS Code (Agent mode).

The connector enables capabilities like:
- Creating new empty designs in Canva
- Autofilling templates with your content
- Finding your existing designs
- Exporting designs as PDFs or images

### Documentation

For more information, see:
- [Canva AI Connector Documentation](https://www.canva.dev/docs/connect/canva-mcp-server-setup/)
- [VS Code MCP Documentation](https://code.visualstudio.com/docs)
- [Model Context Protocol Specification](https://modelcontextprotocol.io/)

### Troubleshooting

If you encounter issues:
1. Ensure you have Node.js 22.16 or later installed
2. Verify you have an active internet connection (MCP server requires network access)
3. Make sure you're using GitHub Copilot in Agent mode in VS Code
4. Check that you're signed in to your Canva account
