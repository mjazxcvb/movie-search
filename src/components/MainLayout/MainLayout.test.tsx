import MediaCard from "../MediaCard";
import MainLayout from "./MainLayout";
import { render, screen } from "@testing-library/react";

const mockMedia = {
  Title: "1",
  Year: "2013",
  Rated: "Not Rated",
  Released: "01 Oct 2013",
  Plot: "Set in the golden era of Grand Prix Racing '1' tells the story of a generation of charismatic drivers who raced on the edge, risking their lives during Formula 1's deadliest period, and the men who stood up and changed the sport f...",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMjAxNDI5NTMxMF5BMl5BanBnXkFtZTgwMDMzMjg4MTE@._V1_SX300.jpg",
  Genre: "Documentary, Action, History",
};

describe("Test MainLayout component", () => {
  it("should show main layout header", () => {
    render(<MainLayout />);

    expect(screen.getByText("OHHMMDb")).toBeTruthy();
  });

  it("should main layout and its children", () => {
    render(
      <MainLayout>
        <MediaCard media={mockMedia} nominations />
      </MainLayout>
    );

    expect(screen.getByText("OHHMMDb")).toBeTruthy();
    expect(screen.getByText("1")).toBeTruthy();
    expect(screen.getByText(/2013/i)).toBeTruthy();
    expect(screen.getByText(/Documentary/i)).toBeTruthy();
    expect(screen.getByText(/Grand Prix/i)).toBeTruthy();
    expect(screen.getByRole("img")).toBeInTheDocument();

    expect(screen.getByText(/Remove/i)).toBeTruthy();
  });
});
