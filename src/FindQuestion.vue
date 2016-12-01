<template>
  <form class="form-inline">
    <h3>placeholder words</h3>
    <div class="form-group">
      <select class="form-control" v-model="color">
      <option>red</option>
      <option>blue</option>
      <option>white</option>
      <option>yellow</option>
      <option>green</option>
      <option>black</option>
      <option>orange</option>
    </select>
    </div>

    <div class="form-group">
      <select class="form-control" v-model="number">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
      </select>
    </div>

    <div class="form-group">
      <select class="form-control" v-model="animal">
        <option>monkey</option>
        <option>cow</option>
        <option>chicken</option>
        <option>bull</option>
        <option>moose</option>
        <option>hawk</option>
        <option>lion</option>
        <option>rat</option>
        <option>dog</option>
        <option>cat</option>
      </select>
    </div>
<button type="button" id="CreateBtn" name="CreateBtn" class="btn btn-success" v-on:click="FindQuestion()">Find Question</button>
  </form>
</template>

<script>
export default {
  name: "FindQuestion",
  data () {
    return {
      color: "red",
      number: 1,
      animal: "monkey"

    }
  },
    methods: {
    FindQuestion:function(){
      var query = this.color + this.number.toString() + this.animal
     this.$router.push({ path: 'get/' + query, params: { slug: query }})
    }
  }
}
</script>

<style>
  .example {
    color: red;
  }
</style>