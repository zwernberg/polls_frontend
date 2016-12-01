<template>
  <div class="col-xs-12 col-sm-12">
    <form>
      <legend>Create A Question</legend>
      <div class="form-group">
        <div class="row">
          <label for="questiontext" class="col-xs-3 text-right control-label">Question</label>
          <div class="col-xs-6">
            <input type="text" class="form-control" id="questiontext" v-model="question_text" placeholder="Whats the Question?">
        </div>
      </div>
      <div v-for="(choice, index) in choices" :key="choice.id" class="form-group">
        <div class="row">
          <label for="choicetext" class="col-xs-3 text-right control-label">Choice {{index+1}}</label>
          <div class="col-xs-6">
            <input type="text" class="form-control" v-model="choice.choice_text" id="choicetext" :placeholder="choice.choice_text">
          </div>
          <div class="col-xs-3">
            <button type="button" id="DeleteRowBtn" name="DeleteRowBtn" v-on:click="removeChoice(index)" class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>

      <div class="form-group">
        <div class="row">
          <div class="col-xs-2">
          </div>
          <div class="col-xs-4">
            <button type="button" id="CreateBtn" name="CreateBtn" class="btn btn-success" v-on:click="postQuestion()">Create</button>
            <button type="button" id="CancelBtn" name="CanceltBtn" class="btn btn-danger">Cancel</button>
          </div>
          <div class="col-xs-3">
            <button type="button" id="CreateBtn" name="CreateBtn" v-on:click="addChoice()" class="btn btn-info">Add Choice</button>
          </div>
        </div>

    </form>


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
  .example {
    color: red;
  }
</style>