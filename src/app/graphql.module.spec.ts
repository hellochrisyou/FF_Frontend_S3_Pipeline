import { TestBed } from '@angular/core/testing';
import { GraphQLModule } from './graphql.module';
describe('GraphQLModule', () => {
  let pipe: GraphQLModule;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [GraphQLModule] });
    pipe = TestBed.get(GraphQLModule);
  });
  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
