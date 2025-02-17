import { render, screen, fireEvent } from '@testing-library/react';
import DayLineupBar from './DayLineupBar';

const mockChangeDay = vi.fn();

describe('DayLineupBar', () => {
  beforeEach(() => {
    render(<DayLineupBar changeDay={mockChangeDay} />);
  });

  test('debe llamar a la función changeDay con -1 al hacer clic en la flecha izquierda', () => {
    const leftArrow = screen.getByLabelText(/Cambiar al día anterior/i);
    fireEvent.click(leftArrow);
    expect(mockChangeDay).toHaveBeenCalledWith(-1);
  });

  test('debe llamar a la función changeDay con 1 al hacer clic en la flecha derecha', () => {
    const rightArrow = screen.getByLabelText(/Cambiar al día siguiente/i);
    fireEvent.click(rightArrow);
    expect(mockChangeDay).toHaveBeenCalledWith(1);
  });
});