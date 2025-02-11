// import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// import LineUp from './LineUp';
// import { vi } from 'vitest';
// import { MemoryRouter } from "react-router-dom";

// describe('LineUp', () => {
//   beforeEach(() => {
//     // Mock de la API para cargar los datos
//     vi.stubGlobal('fetch', vi.fn((url) => {
//       if (url === '/data/days-data.json') {
//         return Promise.resolve({
//           ok: true,
//           json: () => Promise.resolve([
//             { id: "1", day: "THURSDAY 21" },
//             { id: "2", day: "FRIDAY 22" },
//             { id: "3", day: "SATURDAY 23" }
//           ])
//         });
//       }
      
//       if (url === '/data/bands-data.json') {
//         return Promise.resolve({
//           ok: true,
//           json: () => Promise.resolve([
//             {
//               id: "parkway-drive",
//               "preview-image": "/img/descarga.jpeg",
//               title: "PARKWAY DRIVE",
//               stage: "Main Stage",
//               "start-time": "20:00",
//               "end-time": "20:55",
//               "playing-day": "1"
//             },
//             {
//               id: "linkin-park",
//               "preview-image": "/img/maxresdefault.jpg",
//               title: "LINKIN PARK",
//               stage: "Main Stage",
//               "start-time": "19:00",
//               "end-time": "19:55",
//               "playing-day": "2"
//             }
//           ])
//         });
//       }

//       return Promise.reject('Not Found');
//     }));

//     // Simula una pantalla móvil con un ancho máximo de 760px
//     global.innerWidth = 759;
//     global.dispatchEvent(new Event('resize'));
//   });

//   it('debe cambiar las bandas mostradas según el día', async () => {
//     render(
//       <MemoryRouter>
//         <LineUp />
//       </MemoryRouter>
//     );
  
//     // Esperamos a que los días se hayan cargado y que el texto esté en el DOM
//     await waitFor(() => screen.getByText(/THURSDAY/i));
  
//     // Verificamos que las bandas del primer día se muestran
//     expect(screen.getByText('PARKWAY DRIVE')).toBeInTheDocument();
//     expect(screen.queryByText('LINKIN PARK')).not.toBeInTheDocument();
  
//     // Cambiamos al segundo día
//     fireEvent.click(screen.getByLabelText(/Cambiar al día siguiente/i));
  
//     // Esperamos a que el cambio de día se haya procesado
//     await waitFor(() => screen.getByText(/LINKIN PARK/i));
  
//     // Verificamos que las bandas del segundo día se muestran
//     expect(screen.getByText('LINKIN PARK')).toBeInTheDocument();
//     expect(screen.queryByText('PARKWAY DRIVE')).not.toBeInTheDocument();
//   });
// });
