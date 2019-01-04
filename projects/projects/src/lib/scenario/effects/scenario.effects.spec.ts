import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { scenarioEffects } from './scenario.effects';

describe('scenarioEffects', () => {
  let actions$: Observable<any>;
  let effects: scenarioEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [scenarioEffects, provideMockActions(() => actions$)]
    });

    effects = TestBed.get(scenarioEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
