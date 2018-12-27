import { ScenarioModule } from './scenario.module';

describe('ScenarioModule', () => {
  let ScenarioModule: ScenarioModule;

  beforeEach(() => {
    ScenarioModule = new ScenarioModule();
  });

  it('should create an instance', () => {
    expect(ScenarioModule).toBeTruthy();
  });
});
