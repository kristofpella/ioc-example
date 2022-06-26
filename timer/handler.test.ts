import { TimerHandler } from './handler';

// This test is responsible for testing if we
// set up our TimerHandler properly and it does have all the features
// we want
describe('TimerHandler', () => {
    const handler = new TimerHandler();
  
    test('defines startTimer()', () => {
      expect(typeof handler.startTimer).toBe("function");
    });

    test('defines stopTimer()', () => {
        expect(typeof handler.stopTimer).toBe("function");
    });

    // This test is designed to fail on purpose to demonstrate
    // that this feature is yet to be implemented
    test('defines resumeTimer()', () => {
        expect(typeof (handler as any).resumeTimer).toBe("function");
    });
});


/* PRACTICE TODO *'/

// Write tests for testing if the methods of the TimerHandler are working as expected
// Here you can find an example for how to test that a metbod is being
// called without arguments.
// With this pattern you can come up with ideas on how to test
// if for example the startTimer method actually started the timeout

/* test("setRule() is called with arguments", () => {
  const setRuleSpy = jest.spyOn(validator, "setRule");

  const trueRule = jest.fn(() => true);

  const result = validator.setRule("true", trueRule);

  expect(result).toBeUndefined();

  expect(setRuleSpy).toHaveBeenCalledWith("true", trueRule);

  setRuleSpy.mockClear();
}); */
