<template>
    <div>
        <span class="counter-clockwise">
            <span v-for="(value,idx) in circle.counterClockWise" :class="{nextStep: idx === circle.newIndex}">{{value}}&nbsp;</span>
        </span>
        <span class="clockwise">
            <span v-for="(value,idx) in circle.clockWise" :class="{nextStep: idx + circle.counterClockWise.length === circle.newIndex}">{{value}}&nbsp;</span>
        </span>
    </div>
</template>
<script lang="ts">
    import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
    import Circle from '@/model/day9/Circle';

    @Component({})
    export default class CircleViz extends Vue {
        @Prop() circle: Circle

    }
</script>
<style>
    .counter-clockwise {
        color: red;
    }

    .clockwise {
        color: blue;
    }

    .nextStep {
        font-weight: bold;
    }
</style>