import { TribunalModule } from './tribunal.module';

describe('TribunalModule', () => {
  let tribunalModule: TribunalModule;

  beforeEach(() => {
    tribunalModule = new TribunalModule();
  });

  it('should create an instance', () => {
    expect(tribunalModule).toBeTruthy();
  });
});
