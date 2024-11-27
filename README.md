# Paste Link Plugin for Obsidian

This plugin automatically converts selected text into a markdown link when you paste a URL. It streamlines the process of creating markdown links in your notes.

## Features

- Automatically wraps selected text in markdown link syntax when pasting a URL
- Preserves the original text selection
- Only activates when pasting valid URLs
- Falls back to normal paste behavior for non-URL content

## How to Use

1. Select the text you want to turn into a link
2. Copy a URL to your clipboard
3. Paste the URL (Cmd/Ctrl + V)
4. The selected text will automatically be converted into a markdown link

## Installation

1. Download the latest release from the releases page
2. Extract the plugin folder to your vault's plugins folder: `VaultFolder/.obsidian/plugins/`
3. Enable the plugin in Obsidian's settings

## Development

1. Clone this repo to your plugin directory
2. `npm install`
3. `npm run dev` to start compilation in watch mode

## License

MIT
