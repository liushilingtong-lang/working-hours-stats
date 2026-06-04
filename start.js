// Startup script to ensure ELECTRON_RUN_AS_NODE is not set
// This env var (if =1) forces Electron to run as plain Node.js
const { spawn } = require('child_process');
const path = require('path');

// Remove the problematic env var
delete process.env.ELECTRON_RUN_AS_NODE;

const electronPath = require('electron');
const args = [path.resolve(__dirname)];

const child = spawn(electronPath, args, {
  stdio: 'inherit',
  env: process.env
});

child.on('exit', (code) => process.exit(code));
