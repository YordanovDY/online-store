import { it, expect, beforeEach, describe } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import Summary from './Summary';

beforeEach(() => {
    cleanup();
});

describe('General', () => {
    it('Should be in the document', () => {
        render(<Summary totalPrice={110} />);

        const item = screen.getByText('110.00$');

        expect(item).toBeInTheDocument();
    })

    it('Should display the total price', () => {
        render(<Summary totalPrice={110} />);

        const item = screen.getByText('110.00$');

        expect(item.textContent).toEqual('110.00$');
    })

    it('Should fix the total price to the second decimal place', () => {
        render(<Summary totalPrice={119.8999999999999} />);

        const item = screen.getByText('119.90$');

        expect(item.textContent).toEqual('119.90$');
    })

    it('Should convert the total price to number (string number)', () => {
        render(<Summary totalPrice="110" />);

        const item = screen.getByText('110.00$');

        expect(item.textContent).toEqual('110.00$');
    })
})



describe('Incorrect total price', () => {
    it('Should display 0.00$ (string text)', () => {
        render(<Summary totalPrice="aaddasfa" />);

        const item = screen.getByText('0.00$');

        expect(item.textContent).toEqual('0.00$');
    })

    it('Should display 0.00$ (undefined)', () => {
        render(<Summary />);

        const item = screen.getByText('0.00$');

        expect(item.textContent).toEqual('0.00$');
    })

    it('Should display 0.00$ (null)', () => {
        render(<Summary totalPrice={null} />);

        const item = screen.getByText('0.00$');

        expect(item.textContent).toEqual('0.00$');
    })

    it('Should display 0.00$ (NaN)', () => {
        render(<Summary totalPrice={NaN} />);

        const item = screen.getByText('0.00$');

        expect(item.textContent).toEqual('0.00$');
    })

    it('Should display 0.00$ (object)', () => {
        render(<Summary totalPrice={{ price: 100 }} />);

        const item = screen.getByText('0.00$');

        expect(item.textContent).toEqual('0.00$');
    })
})

describe('Purchase button', () => {
    it('Should display purchase button', () => {
        render(<Summary totalPrice="110" />);

        const item = screen.getByText('Purchase');

        expect(item).toBeInTheDocument();
    })

    it('Should hide purchase button', () => {
        render(<Summary totalPrice="0" />);

        const item = screen.queryByText('Purchase');

        expect(item).toBeNull();
    })
})