import { SimpleMiddleware } from './simple.middleware';

describe('SimpleMiddleware', () => {
  it('should be defined', () => {
    expect(new SimpleMiddleware()).toBeDefined();
  });
});
