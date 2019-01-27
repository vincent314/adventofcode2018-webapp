<template>
    <div class="circle-list">
        <circle-viz :circle="circle" v-for="circle in circles"></circle-viz>
        <button @click="onStep()">step</button>
        <button @click="onReset()">reset</button>
    </div>
</template>
<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import Circle from '@/model/day9/Circle';
    import CircleViz from '@/components/day9/CircleViz.vue';

    @Component({
        components: { CircleViz },
    })
    export default class Day9 extends Vue {
        public circles: Circle[] = [];

        public onStep() {
            this.$axios.get<Circle>("http://localhost:9000/day9/step")
                .then(response => response.data)
                .then(circle => {
                    this.circles.push(circle)
                })
        }

        public onReset() {
            this.$axios.get<Circle>("http://localhost:9000/day9/reset")
                .then(response => this.circles = [])
        }
    }
</script>
<style lang="scss">
    .circle-list {
        text-align: left;
    }
</style>