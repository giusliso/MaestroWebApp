import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ContentEffects } from './content.effects';

describe('contentEffects', () => {
  let actions$: Observable<any>;
  let effects: ContentEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ContentEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(ContentEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
