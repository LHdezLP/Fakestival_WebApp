import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from "vitest";
import TicketPanel from './TicketPanel';


  describe("TicketPanel Component", () => {
  
    test("el botón 'PROCEED' se habilita al seleccionar al menos un ticket", () => {
      render(<TicketPanel />);

      const proceedButton = screen.getByLabelText("Proceder con la compra");
      
      expect(proceedButton).toBeDisabled();

      const incrementButton = screen.getByLabelText("Aumentar Standard Pass");
      
      fireEvent.click(incrementButton);
      
      expect(proceedButton).toBeEnabled();
    });
  
    test("abre la ventana modal al hacer clic en 'PROCEED' cuando hay tickets seleccionados", () => {
      render(<TicketPanel />);
      
      const incrementButton = screen.getByLabelText("Aumentar VIP Pass");
      const proceedButton = screen.getByLabelText("Proceder con la compra");
      
      fireEvent.click(incrementButton);
      fireEvent.click(proceedButton);
      
      expect(screen.getByText(/tu carro/i)).toBeInTheDocument();     
    });

    test("no se puede seleccionar más de 5 tickets por tipo", () => {
      render(<TicketPanel />);
  
      const inputStandard = screen.getByLabelText("Standard Pass");
      const incrementButtonStandard = screen.getByLabelText("Aumentar Standard Pass");
            
      fireEvent.click(incrementButtonStandard); 
      fireEvent.click(incrementButtonStandard); 
      fireEvent.click(incrementButtonStandard); 
      fireEvent.click(incrementButtonStandard); 
      fireEvent.click(incrementButtonStandard); 

      expect(inputStandard).toHaveValue(5);

      fireEvent.click(incrementButtonStandard); 

      expect(inputStandard).toHaveValue(5);

      fireEvent.change(inputStandard, { target: { value: "6" } });

      expect(inputStandard).toHaveValue(5);

      fireEvent.change(inputStandard, { target: { value: "3" } });

      expect(inputStandard).toHaveValue(3);
    });
  });