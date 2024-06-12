import { render, screen } from "@testing-library/react";
import PeopleList from "./PeopleList";

describe("PeopleList", () => {
  it("should render correctly", () => {
    const people = [
      {
        id: 1,
        name: "John Doe",
        birthday: "1990-01-01",
        image: "",
      },
    ];

    render(<PeopleList people={people} />);

    const list = screen.getByRole("list");

    expect(list).toBeInTheDocument();
  });
});
