enum StatusState{
  Archived,
  Pause,
  Play
}

interface ICommand{
  execute: (campaign, campaignComponent?) => void
}

class CampaignComponent {
  private updateStatusCommands = new Map<StatusState, { execute: Function }>([
    [
      StatusState.Archived,
      { execute: campaign => this.updateArchive(campaign) }
    ],
    [
      StatusState.Pause, 
      { execute: campaign => this.updatePause(campaign) }],
    [
      StatusState.Play,
      new PlayCommand()
    ]
  ])


  updateCampaignStatus(campaign, status) {
    const command = this.updateStatusCommands.get(status);
    command.execute(campaign)
  }

  private updateArchive(campaign){
    // do some staff
  }

  private updatePlaying(campaign){
    // do some staff
  }

  private updatePause(campaign){
    // do some staff
  }

}

class PlayCommand implements ICommand {
  execute(campaign, campaignComponent){
      // do some staff
  }
}
