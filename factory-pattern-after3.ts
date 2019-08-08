
class AdService {
  AdModels = new Map<AdTypes, any>([
    [AdTypes.Article, ArticleAd],
    [AdTypes.Video, VideoAd],
    [AdTypes.SocialNetwork, SocialNetworkAd]
  ]);

  getAd(type: AdTypes, adData) {
    const AdModel = this.AdModels.get(type);
    return new AdModel(adData);
  }
}

enum AdTypes {
  Video = "video",
  Article = "article",
  SocialNetwork = "social-network"
}

interface IAd {
  id: string;
  name: string;
  calculatedDwellTime: number;
  // ...
}

class VideoAd implements IAd {
  id: string;
  name: string;
  calculatedDwellTime: number;
  constructor(adData) {}
}

class ArticleAd implements IAd {
  id: string;
  name: string;
  calculatedDwellTime: number;
  constructor(adData) {}
}

class SocialNetworkAd implements IAd {
  id: string;
  name: string;
  calculatedDwellTime: number;
  constructor(adData) {}
}