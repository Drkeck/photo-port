import React from 'react'
import {render, cleanup, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Modal from '..';

const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'I am the description',
    index: 1
};

const mockToggleModel = jest.fn();

describe('Modal component', () => {
    it('renders', () => {
        render(<Modal currentPhoto={currentPhoto} onClose={mockToggleModel}></Modal>)
    })

    it('Matches snapsot DOM node structure', () => {
        const { asFragment } = render(<Modal currentPhoto={currentPhoto} onClose={mockToggleModel}></Modal>)
        expect(asFragment).toMatchSnapshot();
    })
})

describe('click event', () => {
    it('calls on close', () => {
        const { getByText } = render(<Modal currentPhoto={currentPhoto} onClose={mockToggleModel}></Modal>)
        fireEvent.click(getByText('Close this Modal'));

        expect(mockToggleModel).toHaveBeenCalledTimes(1)
    })
})