<template>
<ul id="example-1" class="list-group">
    <h2>{{question.question_text}}</h4>
    <h4>What To Search for: {{question.slugfield}} </h2>
  <li type="button" class=" list-group-item btn"  v-for="choice in question.choices" v-on:click="vote(choice)">

    {{ choice.choice_text }}
  </li>
</ul>

</template>
<script>
export default {
  name: "ListQuestion",
  data () {
    return {
      voted: false,
      question: []
    }
  },
  created: function () {
    this.checkVoted();
    this.init();
  },
  methods: {
    init: function () {
        var url = "http://192.241.159.51/api/polls/" + this.$route.params.slug;
        this.$http.get(url).then((response) => {
            this.question = response.body;
        })
    },
    checkVoted: function(){
      this.voted = JSON.parse(localStorage.getItem(this.$route.params.slug) !== null || false )
      if(this.voted){
        this.$router.push({name:'getResult', params: {slug:this.$route.params.slug}})
      }
    },
    vote: function(choice) {
        var url = "http://192.241.159.51/api/choices/" + choice.id + "/vote/"
        this.$http.post(url, {}).then((response) => {
            choice.votes += 1;
            localStorage.setItem(this.$route.params.slug, choice.id)
            this.$router.push({ name: 'getResult', params: { slug: this.$route.params.slug }})
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

