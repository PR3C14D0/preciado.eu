import { useEffect, useState, Fragment } from 'react';
import DisableDevtool from 'disable-devtool';

export default function AdBlockDetector() {
  const [adBlockDetected, setAdBlockDetected] = useState(false);

  useEffect(() => {
    const bait = document.createElement('script');
    bait.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
    bait.async = true;

    bait.onload = () => {
      setAdBlockDetected(false);
    };

    bait.onerror = () => {
      setAdBlockDetected(true);
    };

    document.head.appendChild(bait);
  }, []);

  useEffect(() => {
    if (adBlockDetected) {
      document.body.classList.add("overflow-hidden");
      DisableDevtool();
    }
  }, [adBlockDetected])

  return (
    <Fragment>
      {adBlockDetected && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                  <div className="bg-neutral-950 rounded-xl shadow-xl p-6 text-gray-300 max-w-md w-full">
                      <h2 className="text-2xl font-semibold mb-4">Atención ‼️</h2>
                      <p className="mb-4">Este sitio web se mantiene en pie gracias a los anuncios. Por favor, desactiva tu AdBlocker</p>
                      <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 hover:cursor-pointer" onClick={() => window.location.reload()}>
                          He desactivado mi AdBlocker 👍
                      </button>
                  </div>
              </div>
      )}
    </Fragment>
  );
}
