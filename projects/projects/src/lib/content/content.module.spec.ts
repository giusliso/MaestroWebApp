import { ContentModule } from './content.module';

describe('ContentModule', () => {
  let ContentModule: ContentModule;

  beforeEach(() => {
    ContentModule = new ContentModule();
  });

  it('should create an instance', () => {
    expect(ContentModule).toBeTruthy();
  });
});
