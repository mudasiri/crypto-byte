import { render, screen } from '@testing-library/react';
import Intro from '../../components/intro';

test('renders learn react link', () => {
  render(<Intro />);
  const linkElement = screen.getByText('CryptoByte');
  expect(linkElement).toBeInTheDocument();
});
