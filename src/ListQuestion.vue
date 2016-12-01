<template>
<ul id="example-1" class="list-group">
    <h4>{{question.question_text}}</h4>
    <h2>What To Search for: {{question.slugfield}} </h2>
  <li type="button" class="list-group-item btn"  v-for="choice in question.choices" v-on:click="vote(choice)" >
          <span class="tag tag-default tag-pill float-xs-right">{{choice.votes}} Votes</span>

    {{ choice.choice_text }}
  </li>
</ul>

</template>
<script>
export default {
  name: "ListQuestion",
  data () {
    return {
      msg: 'Hello world!',
      question: []
    }
  },
  created: function () {
    this.init();
  },
  methods: {
    init: function () {
        var url = "http://192.241.159.51/api/polls/" + this.$route.params.slug;
        this.$http.get(url).then((response) => {
            this.question = response.body;
        })
    },
    vote: function(choice) {
        var url = "http://192.241.159.51/api/choices/" + choice.id + "/vote/"
        this.$http.post(url, {}).then((response) => {
            choice.votes += 1;
        });
    }
  }
}
</script>

<style>
  .example {
    color: red;
  }
</style>

