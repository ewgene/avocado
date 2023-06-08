<template>
  <div class="quiz-container" 
    id="Quiz">
    <CarouselComponent
      :title="title"
      :answers="answers" />
  </div>
</template>

/* eslint-disable */
<script>
import { defineComponent } from 'vue';
import CarouselComponent from '@/components/Carousel.vue'
{
/*const standartQuiz = [ 
  {
    type: "standart",
    title: "Какого цвета авокадо?",
    answers: [
      {
        "index": 0,
        "id": 19,
        "image": null,
        "content": "<p>Желтый</p>",
        "is_correct": false
      },
      {
        "index": 1,
        "id": 20,
        "image": null,
        "content": "<p>Зеленый</p>",
        "is_correct": true
      },
      {
        "index": 2,
        "id": 21,
        "image": null,
        "content": "Красный",
        "is_correct": false
      },
      {
        "index": 3,
        "id": 22,
        "image": null,
        "content": "Черный",
        "is_correct": false
      },
      {
        "index": 4,
        "id": 23,
        "image": null,
        "content": "Белый",
        "is_correct": false
      }
    ]
  },
  {
    title: "Чем полезен авокадо?",
    answers: [
      {
        "index": 0,
        "id": 24,
        "image": null,
        "content": "Своим видом",
        "is_correct": false
      },
      {
        "index": 1,
        "id": 25,
        "image": null,
        "content": "Вкусом",
        "is_correct": false
      },
      {
        "index": 2,
        "id": 26,
        "image": null,
        "content": "Полезными жирами",
        "is_correct": true
      },
      {
        "index": 3,
        "id": 27,
        "image": null,
        "content": "Запахом",
        "is_correct": false
      }
    ]
  },
]

const orderQuiz = {
  type: "drag-and-drop",
  title: "Расставьте цифры в порядке возрастания 3 1 2 4",
  answers: [
    {
      "index": 0,
      "id": 28,
      "image": null,
      "content": "4",
      "is_correct": true
    },
    {
      "index": 1,
      "id": 29,
      "image": null,
      "content": "3",
      "is_correct": false
    },
    {
      "index": 2,
      "id": 30,
      "image": null,
      "content": "2",
      "is_correct": false
    },
    {
      "index": 3,
      "id": 31,
      "image": null,
      "content": "1",
      "is_correct": false
    }
  ]
}

const carousellQuiz = {
  type: "carousel",
  title: "2  + 2 = ?",
  answers: [
    {
      "index": 0,
      "id": 32,
      "image": null,
      "content": "2",
      "is_correct": false
    },
    {
      "index": 1,
      "id": 33,
      "image": null,
      "content": "4",
      "is_correct": true
    },
    {
      "index": 2,
      "id": 34,
      "image": null,
      "content": "6",
      "is_correct": false
    },
    {
      "index": 3,
      "id": 35,
      "image": null,
      "content": "8",
      "is_correct": false
    }
  ]
}*/}
export default defineComponent({
  name: "QuizComponent",
  components: {
    CarouselComponent
  },
  props: [
    'type',
    'title',
    'answers'
  ],

  setup(props) {
    let isCarousel = false

    if(props.type === "carousel") {
      isCarousel = true    }

    return {
      isCarousel
    }
  }

})


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
