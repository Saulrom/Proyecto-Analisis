// EventSummary.jsx
import React from 'react';
// import QrReader from 'react-qr-reader';
import eventData from './events.json';

const EventSummary = () => {
  // const [scannedData, setScannedData] = useState('');

  // const handleScan = (data) => {
  //   if (data) {
  //     setScannedData(data);
  //   }
  // };

  // const handleError = (error) => {
  //   console.error(error);
  // };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Resumen de Eventos</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {/* <div className="bg-white rounded-lg shadow-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Escanear Carnet de Estudiante</h2>
          <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ width: '100%', height: 'auto' }}
          />
          {scannedData && (
            <p className="text-green-500 font-semibold mt-2">Código de barras escaneado: {scannedData}</p>
          )}
        </div> */}
        {eventData.map(event => (
          <div key={event.id} className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
            <img src={event.imageUrl} alt={event.title} className="w-full h-40 object-cover mb-2 rounded-lg" />
            <p className="text-gray-500 mb-2">{event.description}</p>
            <p className="text-gray-600 mb-2">Fecha: {event.date}</p>
            <p className="text-blue-500 font-semibold">Tipo de Evento: {event.eventType}</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded mt-4 transition-transform transform hover:scale-110 transition-opacity duration-300 ease-in-out hover:opacity-75">
              Unirse al evento
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventSummary;



