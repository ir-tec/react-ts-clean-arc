export function showNumber(a: number): number {
  return a;
}

describe("test_number", () => {
  it("adding test", () => {
    expect(showNumber(2)).toEqual(2);
  });
});
