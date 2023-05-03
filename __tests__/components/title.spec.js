// test for validate render component Title /components/title.tsx
import React from 'react';
import { render } from '@testing-library/react';
import Title from '@/components/title';

describe('Title', () => {
  it('should render the title', () => {
    const title = 'Test';
    const { getByText } = render(<Title title={title} />);
    expect(getByText(title)).toBeTruthy();
  })
})
