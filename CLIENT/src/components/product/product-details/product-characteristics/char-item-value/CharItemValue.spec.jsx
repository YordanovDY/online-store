import { it, expect, beforeEach, describe } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import CharItemValue from './CharItemValue';

beforeEach(() => {
    cleanup();
});

describe('General', () => {
    it('Should be in the document', () => {
        render(<CharItemValue value="characteristic 1" />);

        const item = screen.getByText('characteristic 1');

        expect(item).toBeInTheDocument();
    });

    it('Should contain char value as text', () => {
        render(<CharItemValue value="characteristic 2" />);

        const item = screen.getByText('characteristic 2');

        expect(item.textContent).toEqual('characteristic 2');
    });

    it('Should contain char value as text (number value)', () => {
        render(<CharItemValue value={23} />);

        const item = screen.getByText('23');

        expect(item.textContent).toEqual('23');
    });
})

describe('Falsy values', () => {
    it('Should be an empty string', () => {
        render(<CharItemValue value="" />);

        const item = screen.getByRole('paragraph');

        expect(item.textContent).toEqual('');
    })

    it('Should be an empty string for falsy values (undefined)', () => {
        render(<CharItemValue />);

        const item = screen.getByRole('paragraph');

        expect(item.textContent).toEqual('');
    })

    it('Should be an empty string for falsy values (null)', () => {
        render(<CharItemValue value={null} />);

        const item = screen.getByRole('paragraph');

        expect(item.textContent).toEqual('');
    })

    it('Should be an empty string for falsy values (NaN)', () => {
        render(<CharItemValue value={NaN} />);

        const item = screen.getByRole('paragraph');

        expect(item.textContent).toEqual('');
    })
})


describe('Boolean values', () => {
    it('Should be an icon', () => {
        render(<CharItemValue value="true" />);

        const item = screen.getByRole('presentation');

        expect(item).toBeInTheDocument();
    });


    it('Should be a circle check icon (string true)', () => {
        render(<CharItemValue value="true" />);

        const item = screen.getByRole('presentation');

        expect(item).toHaveClass('fa-circle-check');
    });

    it('Should be a circle x-mark icon (string false)', () => {
        render(<CharItemValue value="false" />);

        const item = screen.getByRole('presentation');

        expect(item).toHaveClass('fa-circle-xmark');
    });

    it('Should be a circle check icon (boolean true)', () => {
        render(<CharItemValue value={true} />);

        const item = screen.getByRole('presentation');

        expect(item).toHaveClass('fa-circle-check');
    });

    it('Should be a circle x-mark icon (boolean false)', () => {
        render(<CharItemValue value={false} />);

        const item = screen.getByRole('presentation');

        expect(item).toHaveClass('fa-circle-xmark');
    });
})

it('Should be image', () => {
    render(<CharItemValue value="A" />);

    const item = screen.getByRole('img');

    expect(item).toBeInTheDocument();
});