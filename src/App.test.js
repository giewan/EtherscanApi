// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders EtherscanApi title', () => {
    render(<App />);
    const titleElement = screen.getByText(/EtherscanApi/i);
    expect(titleElement).toBeInTheDocument();
});
