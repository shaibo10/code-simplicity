class AdService {
  getAd(adData, type: string) {
    if (type === 'video') {
      return new VideoAd(adData)
    } else if (type === 'article') {
      return new ArticleAd(adData)
    } else if (type === 'social-network') {
      return new SocialNetworkAd(adData)
    }
  }
}
