import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ScenaEffects } from './scena.effects';

describe('ScenaEffects', () => {
  let actions$: Observable<any>;
  let effects: ScenaEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScenaEffects, provideMockActions(() => actions$)]
    });

    effects = TestBed.get(ScenaEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
