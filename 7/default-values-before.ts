class Platform {
  /* ... */
}
class OperatingSystem {
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

function isSupported(platforms: IPlatformsList){
    
    let hasSupportedPlatform = true
    let hasSupportedBrowser = true
    
    if (platforms.platform){
        hasSupportedPlatform = platforms.platform.replace('.','') !== 'not valid platform name'
    }

    if (platforms.browsers){
        hasSupportedBrowser = platforms.browsers.some(browser=> browser.supportArrowFunctions)
    }

    return hasSupportedBrowser && hasSupportedPlatform
}

