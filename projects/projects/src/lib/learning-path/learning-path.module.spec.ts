import { LearningPathModule } from './learning-path.module';

describe('LearningPathModule', () => {
  let LearningPathModule: LearningPathModule;

  beforeEach(() => {
    LearningPathModule = new LearningPathModule();
  });

  it('should create an instance', () => {
    expect(LearningPathModule).toBeTruthy();
  });
});
