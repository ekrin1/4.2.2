import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';
import { describe, it, expect, vi } from 'vitest';
import { MantineProvider } from '@mantine/core';
import '@testing-library/jest-dom';

describe('Button component', () => {
  it('Отображается с children', () => {
    render(
      <MantineProvider>
        <Button>Click me</Button>
      </MantineProvider>
    );
    const buttonElement = screen.getByText('Click me');
    expect(buttonElement).toBeInTheDocument();
  });
  it('Отображает правильный класс', () => {
    render(
      <MantineProvider>
        <Button className="custom-class">Click me</Button>
      </MantineProvider>
    );
    const buttonElement = screen.getByRole('button', { name: 'Click me' });
    expect(buttonElement).toHaveClass('custom-class');
  });

  it('Вызывается обработчик onClick', () => {
    const handleClick = vi.fn();
    render(
      <MantineProvider>
        <Button onClick={handleClick}>Click me</Button>
      </MantineProvider>
    );
    const buttonElement = screen.getByText('Click me');
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
