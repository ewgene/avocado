<template>
    <div id="Carousel">
        <h2>{{ title }}</h2>
        <div class="carousel-container">
            <transition-group class='carousel'
                id="container"
                name="transitionName"
                tag="div">
                <div v-for="slide in answers"
                    :id="slide.index"
                    class='slide' 
                    :key="slide.id"
                    @click="check(slide.index)">
                    <p> {{ slide.content }} </p>
                </div>
            </transition-group>
            <div class='carousel-controls'>
            <button class='carousel-controls__button' @click="previous">&#60;</button>
            <button class='carousel-controls__button' @click="next">&#62;</button>
            </div>
        </div>
    </div>
</template>

/* eslint-disable */
<script>
import { defineComponent, toRef, reactive, ref } from 'vue';

export default defineComponent({
  name: "CarouselComponent",
  props: [
    'title',
    'answers'
  ],
  

      
  setup(props) {
    const transitionName = ref()
    let res = reactive([])
    let answers = toRef(props.answers)
    return [
        answers,
        res,
        transitionName
    ]
  },
  
  methods: {
    check(i) {
        console.log(i)
        let ans = Object.assign({}, this.answers[i])
        console.log(ans)
        let target = document.getElementById(i)
        console.log(target)

        if(ans.is_correct === true) {
            target.classList.add('true') 
        } else {
            target.classList.add('false')
        }

        let result = {
            "question_id": ans.id,
            "user_answers": ans.content
        }
        
        console.log(typeof(result))
        console.log(result)
        this.res = result
        console.log(this.res)
    },
    next() {
        let element = document.getElementById('container')
        let scroll = element.scrollLeft
        let offset = element.getBoundingClientRect().width

        element.scrollTo({
            left: scroll+offset,
            behavior: 'smooth'
        })

        console.log(element)
        console.log(scroll)
        console.log(offset)
    },
    previous() {
        let element = document.getElementById('container')
        let scroll = element.scrollLeft
        let offset = element.getBoundingClientRect().width

        element.scrollTo({
            left: scroll-offset,
            behavior: 'smooth'
        })

        console.log(element)
        console.log(scroll)
        console.log(offset)

    }
  }
})

</script>

<style>

#Carousel {
    font-family: 'Raleway', sans-serif;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    transition: all 0.2s;
    text-align: center;
    width: 800px;
    margin: 0 auto;
}

.carousel {
    display: flex;
    flex-direction: row;
    position: relative;
    justify-content: left;
    align-items: center;
    overflow: hidden;
}

.slide {
    cursor: pointer;
    width: 100%;
    top: 0;
    left: 0;
    flex: 0 0 100%;
    display: flex;
    justify-content: center;
    padding: 50px 0;
    transition: all .3s;
    background: #ddd;
    margin: 20px 0;
}

.slide.false {
    background: #fdd;
}

.slide.true {
    background: #dff;
}

.fade-enter-active {
  transition: opacity 1s;
}
.fade-enter {
  opacity: 0;
}


.slide-next-enter-active,
.slide-next-leave-active {
  transition: transform 0.5s ease-in-out;
}
.slide-next-enter {
  transform: translate(100%);
}
.slide-next-leave-to {
  transform: translate(-100%);
}

.carousel-controls__button {
    cursor: pointer;
    background: rgb(71, 114, 255);
    border: 0;
    color: #fff;
    border-radius: 3px;
    padding: 5px 10px;
    margin: 0 2px;
    font-size: 18px;
}

</style>