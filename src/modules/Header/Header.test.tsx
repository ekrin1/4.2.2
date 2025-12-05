import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import Header from './Header';
import { MantineProvider } from '@mantine/core';

describe('Header component', () => {
  it('Отображает логотип', () => {
    render(
      <MantineProvider>
        <Header />;
      </MantineProvider>
    );
    const logo = screen.getByAltText(/logo/i);
    expect(logo).toBeInTheDocument();
  });
  it('Отображает текст ', () => {
    render(
      <MantineProvider>
        <Header />;
      </MantineProvider>
    );
    const text = screen.getByText(/vegetable/i);
    expect(text).toBeInTheDocument();
  });
  it('Отображает кнопку', () => {
    render(
      <MantineProvider>
        <Header />;
      </MantineProvider>
    );
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
  it('Отображает текст внутри кнопки', () => {
    render(
      <MantineProvider>
        <Header />;
      </MantineProvider>
    );
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Cart');
  });
  it('Отображает изначальное количество заказов', () => {
    render(
      <MantineProvider>
        <Header />;
      </MantineProvider>
    );
    const number = screen.getByText(0);
    expect(number).toBeInTheDocument();
  });
});
