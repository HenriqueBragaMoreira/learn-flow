import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { Header } from "~/components/header";

vi.mock("~/components/favorite-link", () => ({
  FavoriteLink: vi.fn(() => (
    <div data-testid="favorite-link-mock">FavoriteLink</div>
  )),
}));

vi.mock("~/components/changeTheme", () => ({
  ChangeTheme: vi.fn(() => (
    <div data-testid="change-theme-mock">ChangeTheme</div>
  )),
}));

vi.mock("~/components/motion/header-animation", () => ({
  HeaderAnimation: vi.fn(({ children }: { children: React.ReactNode }) => (
    <div data-testid="header-animation-mock">{children}</div>
  )),
}));

describe("Header Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("deve renderizar o logo/link principal e o link de favoritos", () => {
    render(<Header />);

    const mainLink = screen.getByRole("link", { name: /learn flow/i });
    expect(mainLink).toBeInTheDocument();
    expect(mainLink).toHaveAttribute("href", "/");

    expect(screen.getByText("GP")).toBeInTheDocument();
    expect(screen.getByTestId("favorite-link-mock")).toBeInTheDocument();
    expect(screen.getByTestId("header-animation-mock")).toBeInTheDocument();
  });

  test("deve renderizar o botão de menu do usuário", () => {
    render(<Header />);
    const userMenuButton = screen.getByRole("button", {
      name: /menu de usuário/i,
    });
    expect(userMenuButton).toBeInTheDocument();
  });

  test("deve mostrar os itens do dropdown ao clicar no botão de menu do usuário", async () => {
    render(<Header />);
    const userMenuButton = screen.getByRole("button", {
      name: /menu de usuário/i,
    });
    await userEvent.click(userMenuButton);

    // Esperar o botão indicar que o menu está aberto
    await waitFor(() => {
      expect(userMenuButton).toHaveAttribute("aria-expanded", "true");
    });

    expect(await screen.findByText(/perfil/i)).toBeInTheDocument();
    expect(await screen.findByText(/configurações/i)).toBeInTheDocument();
    expect(await screen.findByText(/sair/i)).toBeInTheDocument();
    expect(screen.getByTestId("change-theme-mock")).toBeInTheDocument();
  });
});
