import React from 'react';
import { render } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";
import DashboardPage from './DashboardPage';

it('Verify Title', () => {
    const { getByRole } = render(<DashboardPage />);
    expect(getByRole('heading')).toHaveTextContent(/Dashboard/i)
})