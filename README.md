**Easily Manage Network Traffic with `@xscale/proxy-cli`**

This command-line interface (CLI) provides a convenient way to set up an HTTP reverse proxy server, streamlining network traffic management for development and testing purposes.

## Installation

**For project-specific usage:**

1. Open your terminal and navigate to your project directory.
2. Run the following command to install the package as a development dependency:

   ```bash
   yarn add -D @xscale/proxy-cli
   ```

**For global usage:**

1. (**Note:** Use with caution as global installations can interfere with other tools)
2. Run the following command to install the package globally:

   ```bash
   yarn global add @xscale/proxy-cli
   ```

## Usage Examples

- **Start a proxy server for a specific URL:**

  ```bash
  xproxy http https://xscale.agency
  ```

  This command sets up an HTTP reverse proxy that forwards requests to `https://xscale.agency`.

- **Start a proxy server with a custom port:**

  ```bash
  xproxy http https://xscale.agency --port 9879
  ```

  This command does the same as above, but specifies a custom port number `9879` for the proxy server.

- **List available commands:**

  ```bash
  xproxy
  ```

- **Get help for a specific command:**

  ```bash
  xproxy [command] --help
  ```

  Replace `[command]` with the actual command (e.g., `xproxy http --help`).

## Commands

**http:**

Starts an HTTP reverse proxy server. You can optionally specify a custom port using the `--port` flag.
