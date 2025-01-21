import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from "vitest";
import TicketPanel from './TicketPanel';

test('abre el formulario al hacer clic en el botón "PROCEED"', () => {
    
    render(<TicketPanel />);

    expect(screen.queryByText("Tu carro")).not.toBeInTheDocument();
    const proceedButton = screen.getByText("PROCEED");
    fireEvent.click(proceedButton);

    expect(screen.getByText("Tu carro")).toBeInTheDocument();
})

describe("TicketPanel - Control de errores en el formulario", () => {
    it("debe mostrar un error cuando el campo 'Nombre Completo' está vacío y se intenta enviar el formulario", () => {
      
      render(<TicketPanel />);
  
      
      fireEvent.click(screen.getByText("PROCEED"));
  
      
      const submitButton = screen.getByText("Continuar con el pago");
  
      
      fireEvent.click(submitButton);
  
      
      const nameInput = screen.getByLabelText("Nombre Completo");
      expect(nameInput).toHaveAttribute("required");
  
    });
  });

  describe('TicketPanel - Control de errores en el formulario', () => {
    it('debe mostrar un error cuando el campo "Nombre Completo" está vacío y se intenta enviar el formulario', async () => {
      
      
      vi.mock('fetch', async () => {
        return { ok: true, json: () => ({}) };
      });
  
      render(<TicketPanel />);
  
      
      fireEvent.click(screen.getByText("PROCEED"));
  
      
      const submitButton = screen.getByText("Continuar con el pago");
  
      
      fireEvent.click(submitButton);
  
      
      const errorMessage = await screen.findByText("Complete este campo");
      expect(errorMessage).toBeInTheDocument();
    });
  });