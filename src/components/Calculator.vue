<template>
  <div>
    <header class="header">
      <h2 class="text-center">TTFL Calculator</h2>
    </header>

    <form>
      <fieldset>
        <legend>Stats</legend>
        <div class="form-group row">
          <label class="col col-form-label" for="">Points: </label>
          <div class="col">
            <input 
              v-model.number="pts"
              class="form-control text-right"
              type="number">
          </div>
        </div>
        <div class="form-group row">
          <label class="col col-form-label" for="">Rebonds: </label>
          <div class="col">
            <input 
              v-model.number="reb"
              class="form-control text-right"
              type="number">
          </div>
        </div>
        <div class="form-group row">
          <label class="col col-form-label" for="">Passes: </label>
          <div class="col">
            <input 
              v-model.number="ast"
              class="form-control text-right"
              type="number">
          </div>
        </div>
        <div class="form-group row">
          <label class="col col-form-label" for="">Interceptions: </label>
          <div class="col">
            <input 
              v-model.number="stl"
              class="form-control text-right"
              type="number">
          </div>
        </div>
        <div class="form-group row">
          <label class="col col-form-label" for="">Contres: </label>
          <div class="col">
            <input 
              v-model.number="blk"
              class="form-control text-right"
              type="number">
          </div>
        </div>
        <div class="form-group row">
          <label class="col col-form-label" for="">Tir réussis: </label>
          <div class="col">
            <input 
              v-model.number="fgm"
              class="form-control text-right"
              type="number">
          </div>
        </div>
        <div class="form-group row">
          <label class="col col-form-label" for="">3 points réussis: </label>
          <div class="col">
            <input 
              v-model.number="tpm"
              class="form-control text-right"
              type="number">
          </div>
        </div>
        <div class="form-group row">
          <label class="col col-form-label" for="">Lancers réussis: </label>
          <div class="col">
            <input 
              v-model.number="ftm"
              class="form-control text-right"
              type="number">
          </div>
        </div>

        <div class="form-group row">
          <label class="col col-form-label" for="">Balles perdues: </label>
          <div class="col">
            <input 
              v-model.number="tov"
              class="form-control text-right"
              type="number">
          </div>
        </div>
        <div class="form-group row">
          <label class="col col-form-label" for="">Tirs tentés: </label>
          <div class="col">
            <input 
              v-model.number="fga"
              class="form-control text-right"
              type="number">
          </div>
        </div>
        <div class="form-group row">
          <label class="col col-form-label" for="">3 points tentés: </label>
          <div class="col">
            <input 
              v-model.number="tpa"
              class="form-control text-right"
              type="number">
          </div>
        </div>
        <div class="form-group row">
          <label class="col col-form-label" for="">Lancers tentés: </label>
          <div class="col">
            <input 
              v-model.number="fta"
              class="form-control text-right"
              type="number">
          </div>
        </div>
      </fieldset>

    
    </form>
    
    <div class="navbar navbar-light bg-light fixed-bottom">
      <span class="navbar-text">
        Score:
      </span>
      <span class="navbar-text ml-auto">
        {{ score }}
      </span>
    </div>
  </div>

</template>


<script>

import { mapGetters } from 'vuex'

export default {
  name: 'HelloWorld',

  computed: {
    score () {
      const { pts, reb, ast, stl, blk, fgm, tpm, ftm, tov, missedFieldGoal, missedThreePoints, missedFreeThrow } = this

      return pts + reb + ast + stl + blk + fgm + tpm + ftm - tov - missedFieldGoal - missedThreePoints - missedFreeThrow
    },
    pts: {
      get () {
        return this.$store.state.boxscore.pts
      },
      set (value) {
        this.$store.commit('updatePts', value)
      }
    },
    reb: {
      get () {
        return this.$store.state.boxscore.reb
      },
      set (value) {
        this.$store.commit('updateReb', value)
      }
    },
    ast: {
      get () {
        return this.$store.state.boxscore.ast
      },
      set (value) {
        this.$store.commit('updateAst', value)
      }
    },
    stl: {
      get () {
        return this.$store.state.boxscore.stl
      },
      set (value) {
        this.$store.commit('updateStl', value)
      }
    },
    blk: {
      get () {
        return this.$store.state.boxscore.blk
      },
      set (value) {
        this.$store.commit('updateBlk', value)
      }
    },
    fgm: {
      get () {
        return this.$store.state.boxscore.fgm
      },
      set (value) {
        this.$store.commit('updateFgm', value)
        this.$store.commit('updateFga', this.maxAttempt(value, this.fga))
      }
    },
    tpm: {
      get () {
        return this.$store.state.boxscore.tpm
      },
      set (value) {
        this.$store.commit('updateTpm', value)
        this.$store.commit('updateTpa', this.maxAttempt(value, this.tpa))
      }
    },
    ftm: {
      get () {
        return this.$store.state.boxscore.ftm
      },
      set (value) {
        this.$store.commit('updateFtm', value)
        this.$store.commit('updateFta', this.maxAttempt(value, this.fta))
      }
    },
    tov: {
      get () {
        return this.$store.state.boxscore.tov
      },
      set (value) {
        this.$store.commit('updateTov', value)
      }
    },
    fga: {
      get () {
        return this.$store.state.boxscore.fga
      },
      set (value) {
        this.$store.commit('updateFga', value)
      }
    },
    tpa: {
      get () {
        return this.$store.state.boxscore.tpa
      },
      set (value) {
        this.$store.commit('updateTpa', value)
      }
    },
    fta: {
      get () {
        return this.$store.state.boxscore.fta
      },
      set (value) {
        this.$store.commit('updateFta', value)
      }
    },
    ...mapGetters([
      'missedFieldGoal',
      'missedThreePoints',
      'missedFreeThrow'
    ])
  },
  methods: {
    maxAttempt (value, prop) {
      return value > prop ? value : prop
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  padding-bottom: 9px;
  margin: 40px 0 20px;
  border-bottom: 1px solid #eee;
}
</style>
