// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.composite.grid.no_filter.no_shadow.fillRect
// Description:
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

test(t => {
  const canvas = new OffscreenCanvas(80, 60);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgb(0, 102, 255)';
  ctx.fillRect(15, 15, 50, 30);

  ctx.translate(25, 20);
  ctx.rotate(Math.PI / 2);
  ctx.scale(0.6, 1.2);
  ctx.translate(-25, -20);

  ctx.globalAlpha = 0.5;

  // No filter.
  // No shadow.

  ctx.globalCompositeOperation = 'source-over'

  ctx.fillStyle = 'rgb(52, 255, 52)';
  ctx.fillRect(5, 5, 50, 30);
}, "");

test(t => {
  const canvas = new OffscreenCanvas(80, 60);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgb(0, 102, 255)';
  ctx.fillRect(15, 15, 50, 30);

  ctx.translate(25, 20);
  ctx.rotate(Math.PI / 2);
  ctx.scale(0.6, 1.2);
  ctx.translate(-25, -20);

  ctx.globalAlpha = 0.5;

  // No filter.
  // No shadow.

  ctx.globalCompositeOperation = 'source-in'

  ctx.fillStyle = 'rgb(52, 255, 52)';
  ctx.fillRect(5, 5, 50, 30);
}, "");

test(t => {
  const canvas = new OffscreenCanvas(80, 60);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgb(0, 102, 255)';
  ctx.fillRect(15, 15, 50, 30);

  ctx.translate(25, 20);
  ctx.rotate(Math.PI / 2);
  ctx.scale(0.6, 1.2);
  ctx.translate(-25, -20);

  ctx.globalAlpha = 0.5;

  // No filter.
  // No shadow.

  ctx.globalCompositeOperation = 'source-out'

  ctx.fillStyle = 'rgb(52, 255, 52)';
  ctx.fillRect(5, 5, 50, 30);
}, "");

test(t => {
  const canvas = new OffscreenCanvas(80, 60);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgb(0, 102, 255)';
  ctx.fillRect(15, 15, 50, 30);

  ctx.translate(25, 20);
  ctx.rotate(Math.PI / 2);
  ctx.scale(0.6, 1.2);
  ctx.translate(-25, -20);

  ctx.globalAlpha = 0.5;

  // No filter.
  // No shadow.

  ctx.globalCompositeOperation = 'source-atop'

  ctx.fillStyle = 'rgb(52, 255, 52)';
  ctx.fillRect(5, 5, 50, 30);
}, "");

test(t => {
  const canvas = new OffscreenCanvas(80, 60);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgb(0, 102, 255)';
  ctx.fillRect(15, 15, 50, 30);

  ctx.translate(25, 20);
  ctx.rotate(Math.PI / 2);
  ctx.scale(0.6, 1.2);
  ctx.translate(-25, -20);

  ctx.globalAlpha = 0.5;

  // No filter.
  // No shadow.

  ctx.globalCompositeOperation = 'destination-over'

  ctx.fillStyle = 'rgb(52, 255, 52)';
  ctx.fillRect(5, 5, 50, 30);
}, "");

test(t => {
  const canvas = new OffscreenCanvas(80, 60);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgb(0, 102, 255)';
  ctx.fillRect(15, 15, 50, 30);

  ctx.translate(25, 20);
  ctx.rotate(Math.PI / 2);
  ctx.scale(0.6, 1.2);
  ctx.translate(-25, -20);

  ctx.globalAlpha = 0.5;

  // No filter.
  // No shadow.

  ctx.globalCompositeOperation = 'destination-in'

  ctx.fillStyle = 'rgb(52, 255, 52)';
  ctx.fillRect(5, 5, 50, 30);
}, "");

test(t => {
  const canvas = new OffscreenCanvas(80, 60);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgb(0, 102, 255)';
  ctx.fillRect(15, 15, 50, 30);

  ctx.translate(25, 20);
  ctx.rotate(Math.PI / 2);
  ctx.scale(0.6, 1.2);
  ctx.translate(-25, -20);

  ctx.globalAlpha = 0.5;

  // No filter.
  // No shadow.

  ctx.globalCompositeOperation = 'destination-out'

  ctx.fillStyle = 'rgb(52, 255, 52)';
  ctx.fillRect(5, 5, 50, 30);
}, "");

test(t => {
  const canvas = new OffscreenCanvas(80, 60);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgb(0, 102, 255)';
  ctx.fillRect(15, 15, 50, 30);

  ctx.translate(25, 20);
  ctx.rotate(Math.PI / 2);
  ctx.scale(0.6, 1.2);
  ctx.translate(-25, -20);

  ctx.globalAlpha = 0.5;

  // No filter.
  // No shadow.

  ctx.globalCompositeOperation = 'destination-atop'

  ctx.fillStyle = 'rgb(52, 255, 52)';
  ctx.fillRect(5, 5, 50, 30);
}, "");

test(t => {
  const canvas = new OffscreenCanvas(80, 60);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgb(0, 102, 255)';
  ctx.fillRect(15, 15, 50, 30);

  ctx.translate(25, 20);
  ctx.rotate(Math.PI / 2);
  ctx.scale(0.6, 1.2);
  ctx.translate(-25, -20);

  ctx.globalAlpha = 0.5;

  // No filter.
  // No shadow.

  ctx.globalCompositeOperation = 'lighter'

  ctx.fillStyle = 'rgb(52, 255, 52)';
  ctx.fillRect(5, 5, 50, 30);
}, "");

test(t => {
  const canvas = new OffscreenCanvas(80, 60);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgb(0, 102, 255)';
  ctx.fillRect(15, 15, 50, 30);

  ctx.translate(25, 20);
  ctx.rotate(Math.PI / 2);
  ctx.scale(0.6, 1.2);
  ctx.translate(-25, -20);

  ctx.globalAlpha = 0.5;

  // No filter.
  // No shadow.

  ctx.globalCompositeOperation = 'copy'

  ctx.fillStyle = 'rgb(52, 255, 52)';
  ctx.fillRect(5, 5, 50, 30);
}, "");

test(t => {
  const canvas = new OffscreenCanvas(80, 60);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgb(0, 102, 255)';
  ctx.fillRect(15, 15, 50, 30);

  ctx.translate(25, 20);
  ctx.rotate(Math.PI / 2);
  ctx.scale(0.6, 1.2);
  ctx.translate(-25, -20);

  ctx.globalAlpha = 0.5;

  // No filter.
  // No shadow.

  ctx.globalCompositeOperation = 'xor'

  ctx.fillStyle = 'rgb(52, 255, 52)';
  ctx.fillRect(5, 5, 50, 30);
}, "");

test(t => {
  const canvas = new OffscreenCanvas(80, 60);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgb(0, 102, 255)';
  ctx.fillRect(15, 15, 50, 30);

  ctx.translate(25, 20);
  ctx.rotate(Math.PI / 2);
  ctx.scale(0.6, 1.2);
  ctx.translate(-25, -20);

  ctx.globalAlpha = 0.5;

  // No filter.
  // No shadow.

  ctx.globalCompositeOperation = 'multiply'

  ctx.fillStyle = 'rgb(52, 255, 52)';
  ctx.fillRect(5, 5, 50, 30);
}, "");

test(t => {
  const canvas = new OffscreenCanvas(80, 60);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgb(0, 102, 255)';
  ctx.fillRect(15, 15, 50, 30);

  ctx.translate(25, 20);
  ctx.rotate(Math.PI / 2);
  ctx.scale(0.6, 1.2);
  ctx.translate(-25, -20);

  ctx.globalAlpha = 0.5;

  // No filter.
  // No shadow.

  ctx.globalCompositeOperation = 'screen'

  ctx.fillStyle = 'rgb(52, 255, 52)';
  ctx.fillRect(5, 5, 50, 30);
}, "");

test(t => {
  const canvas = new OffscreenCanvas(80, 60);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgb(0, 102, 255)';
  ctx.fillRect(15, 15, 50, 30);

  ctx.translate(25, 20);
  ctx.rotate(Math.PI / 2);
  ctx.scale(0.6, 1.2);
  ctx.translate(-25, -20);

  ctx.globalAlpha = 0.5;

  // No filter.
  // No shadow.

  ctx.globalCompositeOperation = 'overlay'

  ctx.fillStyle = 'rgb(52, 255, 52)';
  ctx.fillRect(5, 5, 50, 30);
}, "");

test(t => {
  const canvas = new OffscreenCanvas(80, 60);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgb(0, 102, 255)';
  ctx.fillRect(15, 15, 50, 30);

  ctx.translate(25, 20);
  ctx.rotate(Math.PI / 2);
  ctx.scale(0.6, 1.2);
  ctx.translate(-25, -20);

  ctx.globalAlpha = 0.5;

  // No filter.
  // No shadow.

  ctx.globalCompositeOperation = 'darken'

  ctx.fillStyle = 'rgb(52, 255, 52)';
  ctx.fillRect(5, 5, 50, 30);
}, "");

test(t => {
  const canvas = new OffscreenCanvas(80, 60);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgb(0, 102, 255)';
  ctx.fillRect(15, 15, 50, 30);

  ctx.translate(25, 20);
  ctx.rotate(Math.PI / 2);
  ctx.scale(0.6, 1.2);
  ctx.translate(-25, -20);

  ctx.globalAlpha = 0.5;

  // No filter.
  // No shadow.

  ctx.globalCompositeOperation = 'lighten'

  ctx.fillStyle = 'rgb(52, 255, 52)';
  ctx.fillRect(5, 5, 50, 30);
}, "");

test(t => {
  const canvas = new OffscreenCanvas(80, 60);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgb(0, 102, 255)';
  ctx.fillRect(15, 15, 50, 30);

  ctx.translate(25, 20);
  ctx.rotate(Math.PI / 2);
  ctx.scale(0.6, 1.2);
  ctx.translate(-25, -20);

  ctx.globalAlpha = 0.5;

  // No filter.
  // No shadow.

  ctx.globalCompositeOperation = 'color-dodge'

  ctx.fillStyle = 'rgb(52, 255, 52)';
  ctx.fillRect(5, 5, 50, 30);
}, "");

test(t => {
  const canvas = new OffscreenCanvas(80, 60);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgb(0, 102, 255)';
  ctx.fillRect(15, 15, 50, 30);

  ctx.translate(25, 20);
  ctx.rotate(Math.PI / 2);
  ctx.scale(0.6, 1.2);
  ctx.translate(-25, -20);

  ctx.globalAlpha = 0.5;

  // No filter.
  // No shadow.

  ctx.globalCompositeOperation = 'color-burn'

  ctx.fillStyle = 'rgb(52, 255, 52)';
  ctx.fillRect(5, 5, 50, 30);
}, "");

test(t => {
  const canvas = new OffscreenCanvas(80, 60);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgb(0, 102, 255)';
  ctx.fillRect(15, 15, 50, 30);

  ctx.translate(25, 20);
  ctx.rotate(Math.PI / 2);
  ctx.scale(0.6, 1.2);
  ctx.translate(-25, -20);

  ctx.globalAlpha = 0.5;

  // No filter.
  // No shadow.

  ctx.globalCompositeOperation = 'hard-light'

  ctx.fillStyle = 'rgb(52, 255, 52)';
  ctx.fillRect(5, 5, 50, 30);
}, "");

test(t => {
  const canvas = new OffscreenCanvas(80, 60);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgb(0, 102, 255)';
  ctx.fillRect(15, 15, 50, 30);

  ctx.translate(25, 20);
  ctx.rotate(Math.PI / 2);
  ctx.scale(0.6, 1.2);
  ctx.translate(-25, -20);

  ctx.globalAlpha = 0.5;

  // No filter.
  // No shadow.

  ctx.globalCompositeOperation = 'soft-light'

  ctx.fillStyle = 'rgb(52, 255, 52)';
  ctx.fillRect(5, 5, 50, 30);
}, "");

test(t => {
  const canvas = new OffscreenCanvas(80, 60);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgb(0, 102, 255)';
  ctx.fillRect(15, 15, 50, 30);

  ctx.translate(25, 20);
  ctx.rotate(Math.PI / 2);
  ctx.scale(0.6, 1.2);
  ctx.translate(-25, -20);

  ctx.globalAlpha = 0.5;

  // No filter.
  // No shadow.

  ctx.globalCompositeOperation = 'difference'

  ctx.fillStyle = 'rgb(52, 255, 52)';
  ctx.fillRect(5, 5, 50, 30);
}, "");

test(t => {
  const canvas = new OffscreenCanvas(80, 60);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgb(0, 102, 255)';
  ctx.fillRect(15, 15, 50, 30);

  ctx.translate(25, 20);
  ctx.rotate(Math.PI / 2);
  ctx.scale(0.6, 1.2);
  ctx.translate(-25, -20);

  ctx.globalAlpha = 0.5;

  // No filter.
  // No shadow.

  ctx.globalCompositeOperation = 'exclusion'

  ctx.fillStyle = 'rgb(52, 255, 52)';
  ctx.fillRect(5, 5, 50, 30);
}, "");

test(t => {
  const canvas = new OffscreenCanvas(80, 60);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgb(0, 102, 255)';
  ctx.fillRect(15, 15, 50, 30);

  ctx.translate(25, 20);
  ctx.rotate(Math.PI / 2);
  ctx.scale(0.6, 1.2);
  ctx.translate(-25, -20);

  ctx.globalAlpha = 0.5;

  // No filter.
  // No shadow.

  ctx.globalCompositeOperation = 'hue'

  ctx.fillStyle = 'rgb(52, 255, 52)';
  ctx.fillRect(5, 5, 50, 30);
}, "");

test(t => {
  const canvas = new OffscreenCanvas(80, 60);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgb(0, 102, 255)';
  ctx.fillRect(15, 15, 50, 30);

  ctx.translate(25, 20);
  ctx.rotate(Math.PI / 2);
  ctx.scale(0.6, 1.2);
  ctx.translate(-25, -20);

  ctx.globalAlpha = 0.5;

  // No filter.
  // No shadow.

  ctx.globalCompositeOperation = 'saturation'

  ctx.fillStyle = 'rgb(52, 255, 52)';
  ctx.fillRect(5, 5, 50, 30);
}, "");

test(t => {
  const canvas = new OffscreenCanvas(80, 60);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgb(0, 102, 255)';
  ctx.fillRect(15, 15, 50, 30);

  ctx.translate(25, 20);
  ctx.rotate(Math.PI / 2);
  ctx.scale(0.6, 1.2);
  ctx.translate(-25, -20);

  ctx.globalAlpha = 0.5;

  // No filter.
  // No shadow.

  ctx.globalCompositeOperation = 'color'

  ctx.fillStyle = 'rgb(52, 255, 52)';
  ctx.fillRect(5, 5, 50, 30);
}, "");

test(t => {
  const canvas = new OffscreenCanvas(80, 60);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgb(0, 102, 255)';
  ctx.fillRect(15, 15, 50, 30);

  ctx.translate(25, 20);
  ctx.rotate(Math.PI / 2);
  ctx.scale(0.6, 1.2);
  ctx.translate(-25, -20);

  ctx.globalAlpha = 0.5;

  // No filter.
  // No shadow.

  ctx.globalCompositeOperation = 'luminosity'

  ctx.fillStyle = 'rgb(52, 255, 52)';
  ctx.fillRect(5, 5, 50, 30);
}, "");

done();
