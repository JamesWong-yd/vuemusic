import {playMode} from 'common/js/config'

const state = {
  singer: {},
  playing: true,
  fullScreen: false,
  playlist: [],
  sequenceList: [],
  mode: playMode.sequence,
  currentIndex: -1
}

export default state
