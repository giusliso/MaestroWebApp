import { ScenaModule } from './scena.module';

describe('ScenaModule', () => {
  let scenaModule: ScenaModule;

  beforeEach(() => {
    scenaModule = new ScenaModule();
  });

  it('should create an instance', () => {
    expect(scenaModule).toBeTruthy();
  });
});
