import React, { useState } from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ContactForm from '..'

afterEach(cleanup)

describe('check id', ()=>{
    it ('checks if id is present', () => {
        const { getByTestId } = render(<ContactForm></ContactForm>)
        expect(getByTestId('h1tag')).toHaveTextContent('Contact Me');
        expect(getByTestId('submit')).toHaveTextContent('Submit');
    })
})
