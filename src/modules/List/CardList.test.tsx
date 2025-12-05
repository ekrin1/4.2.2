import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import CardList from './CardList';
import { MantineProvider } from '@mantine/core';

describe('CardList component', () => {
  it('Отображает текст Catalog', () => {
    const mockData = [{ id: 1, name: 'Product 1', price: 120, image: '' }];
    render(
      <MantineProvider>
        <CardList data={mockData} loading={false} />
      </MantineProvider>
    );

    const text = screen.getByText(/Catalog/i);
    expect(text).toBeInTheDocument();
  });
  it('Ничего не рендерит если  нет данных', () => {
    render(
      <MantineProvider>
        <CardList data={null} loading={false} />
      </MantineProvider>
    );
    const container = screen.queryByRole('list');
    expect(container).not.toBeInTheDocument();
  });
  it('Отображает карточку для каждого товара', () => {
    const mockData = [
      { id: 1, name: 'Brocolli - 1 Kg', price: 120, image: '' },
      { id: 2, name: 'Cauliflower - 1 Kg', price: 120, image: '' },
    ];
    render(
      <MantineProvider>
        <CardList data={mockData} loading={false} />
      </MantineProvider>
    );

    const card1 = screen.getByText(/Brocolli - 1 Kg/i);
    const card2 = screen.getByText(/Cauliflower - 1 Kg/i);
    expect(card1).toBeInTheDocument();
    expect(card2).toBeInTheDocument();
  });
  it('Отображает загрузку', () => {
    const mockData = [
      { id: 1, name: 'Brocolli - 1 Kg', price: 120, image: '' },
    ];
    render(
      <MantineProvider>
        <CardList data={mockData} loading={true} />
      </MantineProvider>
    );

    const loadingCard = screen.getByAltText(/Loader/i);
    expect(loadingCard).toBeInTheDocument();
  });
});
