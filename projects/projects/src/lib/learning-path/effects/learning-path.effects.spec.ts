import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { LearningPathEffects } from './learning-path.effects';

describe('LearningPathEffects', () => {
  let actions$: Observable<any>;
  let effects: LearningPathEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LearningPathEffects, provideMockActions(() => actions$)]
    });

    effects = TestBed.get(LearningPathEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
