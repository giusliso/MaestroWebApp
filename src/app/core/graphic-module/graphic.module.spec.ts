import { GraphicModule } from './graphic.module';

describe('GraphicModule', () => {
  let GraphicModule: GraphicModule;

  beforeEach(() => {
    GraphicModule = new GraphicModule();
  });

  it('should create an instance', () => {
    expect(GraphicModule).toBeTruthy();
  });
});
