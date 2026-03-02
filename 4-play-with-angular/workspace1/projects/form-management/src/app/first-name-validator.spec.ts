import { FirstNameValidator } from './first-name-validator';

describe('FirstNameValidator', () => {
  it('should create an instance', () => {
    const directive = new FirstNameValidator();
    expect(directive).toBeTruthy();
  });
});
