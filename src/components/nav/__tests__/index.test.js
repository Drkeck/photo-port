import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

const catagoties = [
    { name: 'portraits', description: 'Portraits of people in my life' }
]
const mockCurrentCatagory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

afterEach(cleanup)

describe('new nav component', () => {
    it('renders', () => {
        render(<Nav 
        catagoties={catagoties}
        setCurrentCategory={mockSetCurrentCategory}
        currentCatagory={mockCurrentCatagory}
        contactSelected={mockContactSelected}
        setContactSelected={mockSetContactSelected}
        />)
    })

    it('matches Snapshot', () => {
        const {asFragment} = render(<Nav 
            catagoties={catagoties}
            setCurrentCategory={mockSetCurrentCategory}
            currentCatagory={mockCurrentCatagory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected} />)
        expect(asFragment).toMatchSnapshot();
    })
})

describe('the emoji is visable', () => {
    it('inserts the emoji into the h2 element', () => {
        const { getByLabelText } = render(<Nav 
            catagoties={catagoties}
            setCurrentCategory={mockSetCurrentCategory}
            currentCatagory={mockCurrentCatagory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected} />)
        expect(getByLabelText('camera')).toHaveTextContent('📸')
    })
})

describe('links are visible', () => {
    it('inserts text into the links', () => {
      const { getByTestId } = render(<Nav 
        catagoties={catagoties}
        setCurrentCategory={mockSetCurrentCategory}
        currentCatagory={mockCurrentCatagory}
        contactSelected={mockContactSelected}
        setContactSelected={mockSetContactSelected} />);
      expect(getByTestId("link")).toHaveTextContent('Oh Snap!');
      expect(getByTestId("about")).toHaveTextContent('About me');
    });
  })