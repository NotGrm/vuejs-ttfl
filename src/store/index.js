import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    boxscore: {
      pts: 0,
      reb: 0,
      ast: 0,
      stl: 0,
      blk: 0,
      fgm: 1,
      tpm: 0,
      ftm: 0,
      tov: 0,
      fga: 2,
      tpa: 0,
      fta: 0
    }
  },
  getters: {
    missedFieldGoal: state => {
      return state.boxscore.fga - state.boxscore.fgm
    },
    missedThreePoints: state => {
      return state.boxscore.tpa - state.boxscore.tpm
    },
    missedFreeThrow: state => {
      return state.boxscore.fta - state.boxscore.ftm
    }
  },
  mutations: {
    updatePts (state, pts) {
      state.boxscore = {
        ...state.boxscore,
        pts
      }
    },
    updateReb (state, reb) {
      state.boxscore = {
        ...state.boxscore,
        reb
      }
    },
    updateAst (state, ast) {
      state.boxscore = {
        ...state.boxscore,
        ast
      }
    },
    updateStl (state, stl) {
      state.boxscore = {
        ...state.boxscore,
        stl
      }
    },
    updateBlk (state, blk) {
      state.boxscore = {
        ...state.boxscore,
        blk
      }
    },
    updateFgm (state, fgm) {
      state.boxscore = {
        ...state.boxscore,
        fgm
      }
    },
    updateTpm (state, tpm) {
      state.boxscore = {
        ...state.boxscore,
        tpm
      }
    },
    updateFtm (state, ftm) {
      state.boxscore = {
        ...state.boxscore,
        ftm
      }
    },
    updateTov (state, tov) {
      state.boxscore = {
        ...state.boxscore,
        tov
      }
    },
    updateFga (state, fga) {
      state.boxscore = {
        ...state.boxscore,
        fga
      }
    },
    updateTpa (state, tpa) {
      state.boxscore = {
        ...state.boxscore,
        tpa
      }
    },
    updateFta (state, fta) {
      state.boxscore = {
        ...state.boxscore,
        fta
      }
    }
  }
})
