import { platform } from "os";

class Platform {
    
  /* ... */
}
class OperatingSystem {
    name
  /* ... */
}
class Browser {
    supportArrowFunctions
  /* ... */
}

interface IPlatformsList {
  platform?: string;
  operatingSystems?: OperatingSystem[];
  browsers?: Browser[];
}


class PlatformList {
    public platform: string;
    public operatingSystems: OperatingSystem[];
    public browsers: Browser[];
  
    constructor({
      platform = '',
      operatingSystems = [],
      browsers = []
    }: IPlatformsList = {}) {
      this.platform = platform;
      this.operatingSystems = operatingSystems;
      this.browsers = browsers;
    }
  }

function isSupported(platforms: PlatformList){
    
    let hasSupportedPlatform = platforms.platform.replace('.','') !== 'not valid platform name'
    let hasSupportedBrowser = platforms.browsers.some(browser => browser.supportArrowFunctions)
    let hasSupportedOs = platforms.operatingSystems.every(os => os.name === 'linux')
    
    return hasSupportedBrowser && hasSupportedPlatform && hasSupportedOs
}

