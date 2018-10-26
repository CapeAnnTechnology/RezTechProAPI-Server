import { DoorModule } from './door.module';

describe('DoorModule', () => {
  let doorModule: DoorModule;

  beforeEach(() => {
    doorModule = new DoorModule();
  });

  it('should create an instance', () => {
    expect(doorModule).toBeTruthy();
  });
});
