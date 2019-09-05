class CampaignComponent {
  private updateStatusCommands = new Map<StatusState, Function>([
    [StatusState.Archived, this.updateArchive.bind(this)],
    [StatusState.Pause, this.updatePause.bind(this)],
    [StatusState.Play, this.updatePlaying.bind(this)],
  ]);

  updateCampaignStatus(campaign, status) {
    const command = this.updateStatusCommands.get(status)
    command(campaign)
  }

  private updateArchive(campaign) {
    // do some staff
  }

  private updatePlaying(campaign) {
    // do some staff
  }

  private updatePause(campaign) {
    // do some staff
  }
}
