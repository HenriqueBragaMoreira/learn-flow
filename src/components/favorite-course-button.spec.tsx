import type { Rive } from "@rive-app/react-canvas";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { FavoriteCourseButton } from "~/components/favorite-course-button";
import type { Course } from "~/types/data";

const mockToggleFavoriteCourse = vi.fn();
const mockIsFavoriteCourse = vi.fn();

const mockUseStateInput = vi.fn();

vi.mock("~/store/favorite-courses", () => ({
  favoriteCoursesStore: () => ({
    isFavoriteCourse: mockIsFavoriteCourse,
    toggleFavoriteCourse: mockToggleFavoriteCourse,
  }),
}));

interface MockInputValueHolder {
  value: boolean | number | string | null;
}
const mockRiveInputValueHolder: MockInputValueHolder = { value: false };

const MockRiveComponent = vi.fn(() => <div data-testid="rive-mock" />);

vi.mock("@rive-app/react-canvas", async () => {
  const original = await vi.importActual("@rive-app/react-canvas");
  return {
    ...original,
    useRive: vi.fn(() => ({
      RiveComponent: MockRiveComponent,
      rive: {} as Rive,
    })),
    useStateMachineInput: (
      ...args: [Rive | null, string?, string?, (number | boolean)?]
    ) => mockUseStateInput(...args),
  };
});

const mockCourse: Course = {
  id: 1,
  title: "Test Course",
  description: "A test course description",
  price: 99.99,
  created_at: "2024-01-01T00:00:00.000Z",
};

describe("FavoriteCourseButton Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockRiveInputValueHolder.value = false;
    mockIsFavoriteCourse.mockReturnValue(false);

    mockUseStateInput.mockImplementation(
      (
        _rive: Rive | null,
        _stateMachineName: string,
        _inputName: string,
        initialValue?: boolean | number
      ): MockInputValueHolder | null => {
        mockRiveInputValueHolder.value =
          initialValue === undefined ? null : initialValue;
        return mockRiveInputValueHolder;
      }
    );
  });

  test("deve renderizar corretamente quando o curso não é favorito", () => {
    render(<FavoriteCourseButton course={mockCourse} />);

    const button = screen.getByRole("button", {
      name: /adicionar aos favoritos/i,
    });
    expect(button).toBeInTheDocument();
    expect(screen.getByTestId("rive-mock")).toBeInTheDocument();
    expect(mockUseStateInput).toHaveBeenCalledWith(
      expect.anything(),
      expect.any(String),
      expect.any(String),
      false
    );
  });

  test("deve renderizar corretamente quando o curso é favorito", () => {
    mockIsFavoriteCourse.mockReturnValue(true);
    render(<FavoriteCourseButton course={mockCourse} />);

    const button = screen.getByRole("button", {
      name: /remover dos favoritos/i,
    });
    expect(button).toBeInTheDocument();
    expect(screen.getByTestId("rive-mock")).toBeInTheDocument();
    expect(mockUseStateInput).toHaveBeenCalledWith(
      expect.anything(),
      expect.any(String),
      expect.any(String),
      true
    );
    expect(mockRiveInputValueHolder.value).toBe(true);
  });

  test("deve chamar toggleFavoriteCourse e atualizar o input do Rive ao clicar para favoritar", () => {
    mockIsFavoriteCourse.mockReturnValue(false);
    render(<FavoriteCourseButton course={mockCourse} />);

    const button = screen.getByRole("button", {
      name: /adicionar aos favoritos/i,
    });
    fireEvent.click(button);

    expect(mockToggleFavoriteCourse).toHaveBeenCalledWith(mockCourse);
    expect(mockRiveInputValueHolder.value).toBe(true);
  });

  test("deve chamar toggleFavoriteCourse e atualizar o input do Rive ao clicar para desfavoritar", () => {
    mockIsFavoriteCourse.mockReturnValue(true);
    render(<FavoriteCourseButton course={mockCourse} />);

    const button = screen.getByRole("button", {
      name: /remover dos favoritos/i,
    });
    fireEvent.click(button);

    expect(mockToggleFavoriteCourse).toHaveBeenCalledWith(mockCourse);
    expect(mockRiveInputValueHolder.value).toBe(false);
  });

  test("não deve fazer nada se o input do Rive não estiver disponível (retornar null)", () => {
    mockUseStateInput.mockImplementation(() => null);
    render(<FavoriteCourseButton course={mockCourse} />);

    const button = screen.getByRole("button", {
      name: /adicionar aos favoritos/i,
    });
    fireEvent.click(button);

    expect(mockToggleFavoriteCourse).not.toHaveBeenCalled();
  });
});
