const QRCode = require('qrcode');

exports.handler = async function(event) {
  try {
    const { url, color, size } = JSON.parse(event.body);

    if (!url) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'URL is required' }),
      };
    }

    const qrCodeDataUrl = await QRCode.toDataURL(url, {
      errorCorrectionLevel: 'H',
      margin: 1,
      width: size || 400,
      color: {
        dark: color || '#000000',
        light: '#ffffff',
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ qrCode: qrCodeDataUrl }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to generate QR code' }),
    };
  }
};