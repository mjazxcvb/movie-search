import MediaCard from "./MediaCard";
import { render, screen } from "@testing-library/react";

export const mockMedia = {
  Title: "1",
  Year: "2013",
  Rated: "Not Rated",
  Released: "01 Oct 2013",
  Plot: "Set in the golden era of Grand Prix Racing '1' tells the story of a generation of charismatic drivers who raced on the edge, risking their lives during Formula 1's deadliest period, and the men who stood up and changed the sport f...",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMjAxNDI5NTMxMF5BMl5BanBnXkFtZTgwMDMzMjg4MTE@._V1_SX300.jpg",
  Genre: "Documentary, Action, History",
};

const mockMediaNoPoster = {
  Title: "Avatar",
  Year: "2009",
  Rated: "Not Rated",
  Released: "01 Oct 2009",
};

describe("Test MediaCard component", () => {
  it("should show all media details and nominate button is present", () => {
    render(<MediaCard media={mockMedia} />);

    expect(screen.getByText("1")).toBeTruthy();
    expect(screen.getByText(/2013/i)).toBeTruthy();
    expect(screen.getByText(/Documentary/i)).toBeTruthy();
    expect(screen.getByText(/Grand Prix/i)).toBeTruthy();
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByText(/Nominate/i)).toBeTruthy();
  });

  it("should show all media details and remove button is present", () => {
    render(<MediaCard media={mockMedia} nominations />);

    expect(screen.getByText("1")).toBeTruthy();
    expect(screen.getByText(/2013/i)).toBeTruthy();
    expect(screen.getByText(/Documentary/i)).toBeTruthy();
    expect(screen.getByText(/Grand Prix/i)).toBeTruthy();
    expect(screen.getByRole("img")).toBeInTheDocument();

    expect(screen.getByText(/Remove/i)).toBeTruthy();
  });

  it("should show MediaCard but with missing Poster", () => {
    render(<MediaCard media={mockMediaNoPoster} />);

    expect(screen.getByText("Avatar")).toBeTruthy();
    expect(screen.getByText(/2009/i)).toBeTruthy();
    expect(screen.queryByRole("img")).toBeFalsy();
  });
});
