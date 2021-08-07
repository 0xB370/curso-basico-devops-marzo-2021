import React from 'react';
import { render } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";
import DashboardPage from './DashboardPage';

it('renders without crashing', () => {
    const { getByRole } = render(<DashboardPage />);
    expect(getByRole('heading')).toHaveTextContent('Ddashboard in Dev namespace!')
})