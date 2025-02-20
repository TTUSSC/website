import { decode } from 'blurhash';

function decodeBlurHash(blurhash, width, height) {
  const pixels = decode(blurhash, width, height);
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  const imageData = ctx.createImageData(width, height);
  imageData.data.set(new Uint8ClampedArray(pixels));
  ctx.putImageData(imageData, 0, 0);
  return canvas.toDataURL();
}

export default decodeBlurHash;