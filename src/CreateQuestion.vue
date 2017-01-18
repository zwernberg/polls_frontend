<template>
  <div>
      <label for="questiontext">Question</label>
      <input type="text" id="questiontext" v-model="question_text" placeholder="Enter your question">
      <div id="CreateBtn" name="CreateBtn" v-on:click="addChoice()" class="button-style">+ add choice</div>

      <div v-for="(choice, index) in choices" :key="choice.id" class="option-group">
        <label for="choicetext">Option {{index+1}}</label>
        <div class="option-row">
          <input type="text" id="choicetext" v-model="choice.choice_text" :placeholder="choice.choice_text">
          <div id="DeleteRowBtn" name="DeleteRowBtn" v-on:click="removeChoice(index)" class="button-style">X</div>
        </div>
      </div>

      <div id="CreateBtn" name="CreateBtn" v-on:click="postQuestion()" class="button-style fixed-at-bottom">Submit</div>
  
  </div>
</template>
<script>
  export default {
    name: "CreateQuestion",
    data () {
      return {
        msg: 'Hello world!',
        question_text: '',
        choices: []

      }
    },
    created: function () {
      this.init();
    },
    methods: {
      init: function () {
        this.choices.push({ choice_text: '' });
      },
      removeChoice : function (index) {
        console.log(index);
        this.choices.splice(index,1);
      },
      addChoice: function(){
        this.choices.push({choice_text: ''});
      },
      postQuestion:function(){
        var url = "http://192.241.159.51/api/polls/";
        var payload = {question_text: this.question_text, choices: this.choices};

        // send get request
    this.$http.post(url, payload).then((response) => {

      console.log(response.body.id);
      this.$router.push({ path: 'get/' + response.body.slugfield, params: { slug: response.body.slugfield }})

    }, (response) => {
      // error callback
    });
      }
    }
  }
</script>

<style>
  input {
    color: #111d1d;
    border: 3px solid #111d1d;
    border-radius: 5px;
    font-size: 2.5em;
    font-weight: 700;
    margin: 10px;
    width: 100%;
  }
  label {
    float: left;
    font-size: 2.5em;
    font-weight: 700;
  }
  .button-style {
    border: 3px solid #111d1d;
    border-radius: 5px;
    font-size: 2.5em;
    font-weight: 700;
  }
  .option-group {
    margin-top: 100px;
  }
  .option-row {
    display: inline;
  }
  .option-row input {
    width: 85%;
    float: left;
  }
  .option-row .button-style {
    width: 10%;
    float: right;
  }
  .fixed-at-bottom {
    position: fixed;
    bottom: 3%;
    left: 3%;
    right: 3%;
  }

</style>