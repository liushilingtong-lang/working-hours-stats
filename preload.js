// Preload script for secure context bridge
// Currently empty - the app is pure frontend with no Node.js API needs.
// This file exists as a security boundary and for future expansion
// (e.g., file system access, native notifications, auto-updater).

const { contextBridge } = require('electron');

// Example: expose app info to renderer if needed in the future
contextBridge.exposeInMainWorld('electronAPI', {
  platform: process.platform,
  version: process.versions.electron
});
