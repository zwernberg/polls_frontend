<template>
  <div>
    <h3>placeholder words</h3>
    <button class="btn btn-default">Cow</button>
    <button class="btn btn-default">Chicken</button>
    <button class="btn btn-default">Bull</button>
    <button class="btn btn-default">Moose</button>
    <button class="btn btn-default">Hawk</button>
    <button class="btn btn-default">Lion</button>
    <button class="btn btn-default">Rat</button>
  </div>
</template>

<script>
export default {
  name: "FindQuestion",
  data () {
    return {
      msg: 'Hello world!',
      question_text: '',
      choices: []

    }
  }
}
</script>

<style>
  .example {
    color: red;
  }
</style>