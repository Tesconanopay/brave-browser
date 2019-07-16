/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

// Components
import TipSite from './tipSite'
import TipTwitterUser from './tipTwitterUser'
import TipRedditUser from './tipRedditUser'

// Utils
import * as rewardsActions from '../actions/tip_actions'

interface TipDialogArgs {
  url: string
  publisherKey: string
  tweetMetaData?: RewardsTip.TweetMetaData
  redditMetaData?: RewardsTip.RedditMetaData
}

interface Props extends RewardsTip.ComponentProps {
  dialogArgs: TipDialogArgs
}

export class App extends React.Component<Props, {}> {
  get actions () {
    return this.props.actions
  }

  getTipBanner = (url: string, publisher: RewardsTip.Publisher, tweetMetaData?: RewardsTip.TweetMetaData, redditMetaData?: RewardsTip.RedditMetaData) => {
    if (tweetMetaData) {
      return (
        <TipTwitterUser
          url={url}
          publisher={publisher}
          tweetMetaData={tweetMetaData}
        />
      )
    } else if (redditMetaData) {
      return (
        <TipRedditUser
          url={url}
          publisher={publisher}
          redditMetaData={redditMetaData}
        />
      )
    } else {
      return (
        <TipSite
          url={url}
          publisher={publisher}
        />
      )
    }
  }

  render () {
    const { publishers } = this.props.rewardsDonateData

    if (!publishers) {
      return null
    }

    const url = this.props.dialogArgs.url
    const tweetMetaData = this.props.dialogArgs.tweetMetaData
    const redditMetaData = this.props.dialogArgs.redditMetaData
    const publisherKey = this.props.dialogArgs.publisherKey
    const publisher = publishers[publisherKey]

    if (!publisher) {
      return null
    }

    return (
      <div>
        {this.getTipBanner(url, publisher, tweetMetaData, redditMetaData)}
      </div>
    )
  }
}

export const mapStateToProps = (state: RewardsTip.ApplicationState) => ({
  rewardsDonateData: state.rewardsDonateData
})

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators(rewardsActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)