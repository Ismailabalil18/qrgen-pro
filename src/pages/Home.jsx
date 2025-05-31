import QRGenerator from './QRGenerator';

function Home() {
  return (
    <div className="bg-gradient-to-b from-blue-200 to-blue-400 pb-16">
      <section className="max-w-3xl mx-auto text-center py-16 px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Generate Professional QR Codes Instantly</h1>
        <p className="text-lg text-blue-100 mb-8">Boost your marketing campaigns with custom QR codes. Free, fast, and no registration required.</p>
      </section>
      <section className="max-w-2xl mx-auto -mt-12 z-10 relative px-2">
        <QRGenerator />
      </section>
    </div>
  );
}

export default Home; 