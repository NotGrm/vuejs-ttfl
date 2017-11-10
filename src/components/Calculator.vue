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
export default {
  name: 'HelloWorld',
  data () {
    return {
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
  computed: {
    missedFieldGoal () {
      return this.fga - this.fgm
    },
    missedThreePoints () {
      return this.tpa - this.tpm
    },
    missedFreeThrow () {
      return this.fta - this.ftm
    },
    score () {
      const { pts, reb, ast, stl, blk, fgm, tpm, ftm, tov, missedFieldGoal, missedThreePoints, missedFreeThrow } = this

      return pts + reb + ast + stl + blk + fgm + tpm + ftm - tov - missedFieldGoal - missedThreePoints - missedFreeThrow
    }
  },
  watch: {
    fgm: function (value) {
      this.fga = this.maxAttempt(value, this.fga)
    },
    tpm: function (value) {
      this.tpa = this.maxAttempt(value, this.tpa)
    },
    ftm: function (value) {
      this.fta = this.maxAttempt(value, this.fta)
    }
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
