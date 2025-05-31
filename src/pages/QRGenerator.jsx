import { useState } from 'react';
import { toast } from 'react-toastify';
import { FaQrcode, FaDownload, FaLink } from 'react-icons/fa';

const COLORS = [
  { name: 'Black', value: '#000000' },
  { name: 'Blue', value: '#2563eb' },
  { name: 'Red', value: '#ef4444' },
  { name: 'Green', value: '#22c55e' },
  { name: 'Purple', value: '#a21caf' },
];

const SIZES = [
  { name: 'Small (200x200)', value: 200 },
  { name: 'Medium (300x300)', value: 300 },
  { name: 'Large (400x400)', value: 400 },
];

function QRGenerator() {
  const [url, setUrl] = useState('');
  const [color, setColor] = useState(COLORS[0].value);
  const [size, setSize] = useState(SIZES[1].value);
  const [qrCode, setQrCode] = useState('');
  const [loading, setLoading] = useState(false);

  const generateQRCode = async (e) => {
    e.preventDefault();
    if (!url) {
      toast.error('Please enter a URL');
      return;
    }
    try {
      setLoading(true);
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url, color, size }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Failed to generate QR code');
      setQrCode(data.qrCode);
      toast.success('QR code generated successfully!');
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const downloadQRCode = () => {
    if (!qrCode) return;
    const link = document.createElement('a');
    link.href = qrCode;
    link.download = 'qrcode.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success('QR code downloaded!');
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col md:flex-row gap-8 items-center">
      <form onSubmit={generateQRCode} className="flex-1 space-y-4 w-full max-w-md">
        <label className="block text-gray-700 font-medium mb-1">Enter URL</label>
        <div className="relative mb-2">
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com"
            className="input pl-10"
            required
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <FaLink />
          </span>
        </div>
        <p className="text-xs text-gray-400 mb-2">The URL you want to encode in the QR code</p>
        <div className="mb-2">
          <label className="block text-gray-700 font-medium mb-1">QR Code Color</label>
          <div className="flex gap-3">
            {COLORS.map((c) => (
              <button
                type="button"
                key={c.value}
                className={`w-7 h-7 rounded-full border-2 ${color === c.value ? 'border-primary-600' : 'border-gray-300'}`}
                style={{ background: c.value }}
                aria-label={c.name}
                onClick={() => setColor(c.value)}
              />
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">QR Code Size</label>
          <select
            className="input"
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
          >
            {SIZES.map((s) => (
              <option key={s.value} value={s.value}>{s.name}</option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="btn btn-primary w-full flex items-center justify-center gap-2"
          disabled={loading}
        >
          <FaQrcode />
          {loading ? 'Generating...' : 'Generate QR Code'}
        </button>
      </form>
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-64 h-64 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
          {qrCode ? (
            <img src={qrCode} alt="Generated QR Code" className="w-full h-full object-contain" />
          ) : (
            <div className="text-gray-400 flex flex-col items-center">
              <FaQrcode className="text-5xl mb-2" />
              <span>Your QR code will appear here</span>
            </div>
          )}
        </div>
        {qrCode && (
          <button
            onClick={downloadQRCode}
            className="btn btn-primary flex items-center gap-2 w-full"
          >
            <FaDownload />
            Download QR Code
          </button>
        )}
      </div>
    </div>
  );
}

export default QRGenerator; 