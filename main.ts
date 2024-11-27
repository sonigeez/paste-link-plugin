import { type Editor, Plugin } from 'obsidian';

export default class PasteLinkPlugin extends Plugin {
	async onload() {
		this.registerEvent(
			this.app.workspace.on('editor-paste', (evt: ClipboardEvent, editor: Editor) => {
				this.handlePaste(evt, editor);
			})
		);
	}

	private handlePaste(evt: ClipboardEvent, editor: Editor): void {
		const clipboardText = evt.clipboardData?.getData('text');
		if (!clipboardText) return;
		try {
			new URL(clipboardText);
		} catch {
			return; 
		}

		const selectedText = editor.getSelection();
		if (!selectedText) return;
		evt.preventDefault();
		editor.replaceSelection(`[${selectedText}](${clipboardText})`);
	}

	onunload() {
		
	}
}
