import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TargetEffects } from './target.effects';

describe('TargetEffects', () => {
  const actions$: Observable<any> = null;
  let effects: TargetEffects = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TargetEffects, provideMockActions(() => actions$)]
    });

    effects = TestBed.get(TargetEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
