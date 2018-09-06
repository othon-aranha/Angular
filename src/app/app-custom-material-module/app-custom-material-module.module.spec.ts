import { AppCustomMaterialModuleModule } from './app-custom-material-module.module';

describe('AppCustomMaterialModuleModule', () => {
  let appCustomMaterialModuleModule: AppCustomMaterialModuleModule;

  beforeEach(() => {
    appCustomMaterialModuleModule = new AppCustomMaterialModuleModule();
  });

  it('should create an instance', () => {
    expect(appCustomMaterialModuleModule).toBeTruthy();
  });
});
