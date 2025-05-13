import { render, screen } from '@testing-library/react';
import ProductsPage from '../pages/products';

describe('ProductsPage', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<ProductsPage />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('displays the product list', () => {
    render(<ProductsPage />);
    const productList = screen.getByRole('list');
    expect(productList).toBeInTheDocument();
  });

  it('has a form for adding new products', () => {
    render(<ProductsPage />);
    const form = screen.getByRole('form');
    expect(form).toBeInTheDocument();
  });
});