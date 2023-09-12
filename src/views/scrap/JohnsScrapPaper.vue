<template>
  <div id="container">
    <button :class="{clicked: wasClicked, hovered: isHovered}" @mouseover="isHovered = true" @mouseleave="isHovered = false
" @click="increment">CLICK ME</button>
    <div>{{count}}</div>
    <textarea v-model="johnText" />
    <div>{{johnText}}</div>
    <br/>
    <p>
      Ask a yes/no question:
      <input v-model="question" />
    </p>
    <p>{{ answer }}</p>
    <br/>
    <p>
      Watcher practice:
      <input v-model="watch_model" />
      <p> {{watch_button}}</p>
    </p>
  </div>
</template>

<script>
import { debounce } from 'lodash';
export default {
  data() {
    return {
      count: 1,
      wasClicked: false,
      isHovered: false,
      johnText: "foobar",
      question: "question",
      answer: "answer",
      watch_model: "",
      watch_button: "hello world"
    }
  },
  watch: {
    question(newQuestion, oldQuestion) {
      this.getAnswer()
    },
    watch_model: debounce((function() {
      this.watch_button = `hello world ${this.watch_model}`
    }), 250),
  },
  methods: {
    doHover() {
      this.isHovered = true;
    },
    increment() {
      this.wasClicked = true;
      this.count++;
    },
    async getAnswer() {
      this.answer = 'Thinking...'
      try {
        const res = await fetch('https://yesno.wtf/api')
        console.log(res)
        this.answer = (await res.json()).answer
      } catch (error) {
        this.answer = 'Error! Could not reach the API. ' + error
      }
    },
    mounted: function() {
      console.log("mounted!")
    }
  }
}
</script>

<style scoped>
.clicked {
  color: blue;
}

.hovered {
  background-color: grey;
}

#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
