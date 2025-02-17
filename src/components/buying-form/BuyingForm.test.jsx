import { render, screen, fireEvent } from "@testing-library/react";
import BuyingForm from "./BuyingForm";

describe("BuyingForm Component", () => {
  const mockHandleCloseModal = vi.fn();
  const mockCounts = { standard: 1, vip: 2, premium: 0 };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("muestra la información de los tickets seleccionados correctamente", () => {
    render(<BuyingForm counts={mockCounts} handleCloseModal={mockHandleCloseModal} />);

    
    expect(screen.getByText("Standard Pass x1")).toBeInTheDocument();
    expect(screen.getByText("VIP Pass x2")).toBeInTheDocument();
    expect(screen.queryByText("Premium Pass")).not.toBeInTheDocument(); 
    
    expect(screen.getByText("339.97€")).toBeInTheDocument(); 
  });

  test("muestra mensajes de error si se envía un formulario vacío", () => {
    render(<BuyingForm counts={mockCounts} handleCloseModal={mockHandleCloseModal} />);

    const submitButton = screen.getByText("Continuar con el pago");
    fireEvent.click(submitButton);

    expect(screen.getByText("El nombre es obligatorio.")).toBeInTheDocument();
    expect(screen.getByText("El correo electrónico es obligatorio.")).toBeInTheDocument();
    expect(screen.getByText("Selecciona un método de pago.")).toBeInTheDocument();
  });

  

  test("Informa al usuario del formato de email esperado si se ha introducido uno incorrecto", () => {
    render(<BuyingForm counts={mockCounts} handleCloseModal={mockHandleCloseModal} />);

    fireEvent.change(screen.getByPlaceholderText("juan.perez@email.com"), { target: { value: "pepitomail.com" } });

    const submitButton = screen.getByText("Continuar con el pago");
    fireEvent.click(submitButton);

    expect(screen.getByText("Por favor, introduce un correo válido. Ejemplo: persona@algo.com")).toBeInTheDocument();
  });

  test.only("cierra el modal al completar el formulario correctamente", () => {
    render(<BuyingForm counts={mockCounts} handleCloseModal={mockHandleCloseModal} />);

    fireEvent.change(screen.getByPlaceholderText("Juan Perez"), { target: { value: "Juan Perez" } });
    fireEvent.change(screen.getByPlaceholderText("juan.perez@email.com"), { target: { value: "juan.perez@email.com" } });
    fireEvent.change(screen.getByLabelText("Método de pago"), { target: { value: "creditCard" } });

    const submitButton = screen.getByText("Continuar con el pago");
    fireEvent.click(submitButton);

    expect(mockHandleCloseModal).toHaveBeenCalledTimes(1);
  });

  
});