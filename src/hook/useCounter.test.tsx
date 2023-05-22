import { useCounter } from "./useCounter";
import { renderHook, act } from "@testing-library/react";

describe("useCounter hook", () => {
  test("should render initialValue 0", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.counter).toBe(0);
  });

  test("should accept render same count", () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialValue: 10,
      },
    });
    expect(result.current.counter).toBe(10);
  });

  test("should increment the value", () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.increment());
    expect(result.current.counter).toBe(1);
  });

  test("should decrement the value", () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.decrement());
    expect(result.current.counter).toBe(-1);
  });
});
