import { join } from 'path';
import config from '../config/wdio.shared.local.conf';

// ============
// Specs
// ============
config.maxInstances = 1;
config.specs = ['../tests/specs/emi.spec.ts'];

// ============
// Capabilities
// ============
config.capabilities = [
  {
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': 'My_pixel_3_test',
    'appium:platformVersion': '12',
    'appium:noReset': false,
    'appium:udid': 'emulator-5554',
    'appium:app': join(process.cwd(), './apps/emicalc.apk'),
    'appium:appPackage': 'com.continuum.emi.calculator',
    'appium:appActivity': 'com.finance.emicalci.activity.Splash_screnn',
  },
];

exports.config = config;
