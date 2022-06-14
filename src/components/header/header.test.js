import { screen, render } from '@testing-library/react';
import Header from './HeaderLogo';

/* eslint-disable */
describe("<Header Component />", () => {
  it("Renderiza a imagem da logo corretamente", () => {
    render(<Header />);
    const img = screen.getByAltText("Logo Brasa Burguer");
    expect(img).toBeInTheDocument();
  });
});
