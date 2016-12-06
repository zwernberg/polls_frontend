<template>
<ul id="example-1" class="list-group">
    <h2>{{question.question_text}}</h4>
    <h4>What To Search for: {{question.slugfield}} </h2>
  <li type="button" class="list-group-item btn"  v-for="choice in question.choices" >
          <span class="tag tag-default tag-pill float-xs-right">{{choice.votes}} Votes</span>

    {{ choice.choice_text }}
  </li>
</ul>

</template>
<script>
export default {
  name: "VoteResult",
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
        var url = "http://192.241.159.51/api/polls/" + this.$route.params.slug + "/results/";
        this.$http.get(url).then((response) => {
            this.question = response.body;
        })
    },
  }
}
</script>

<style>
  .example {
    color: red;
  }
</style>

