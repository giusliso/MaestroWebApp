import { TargetModule } from './target.module';

describe('TargetModule', () => {
  let targetModule: TargetModule;

  beforeEach(() => {
    targetModule = new TargetModule();
  });

  it('should create an instance', () => {
    expect(targetModule).toBeTruthy();
  });
});
