#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

const electron = require('electron');
const main = path.join(__dirname, 'main.js');
const args = [main, ...process.argv.slice(2)];

const child = spawn(electron, args, { stdio: 'inherit' });

child.on('close', (code) => {
  process.exit(code ?? 0);
});

child.on('error', (err) => {
  console.error(err);
  process.exit(1);
});
