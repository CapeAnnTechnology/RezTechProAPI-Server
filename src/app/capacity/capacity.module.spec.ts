import { CapacityModule } from './capacity.module';

describe('CapacityModule', () => {
  let capacityModule: CapacityModule;

  beforeEach(() => {
    capacityModule = new CapacityModule();
  });

  it('should create an instance', () => {
    expect(capacityModule).toBeTruthy();
  });
});
