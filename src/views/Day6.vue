<template>
    <GridViz :part="part" :threshold="threshold"></GridViz>
</template>
<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";
    import GridViz from "@/components/day6/GridViz.vue";

    @Component({
        components: { GridViz },
    })
    export default class Day6 extends Vue {
        @Prop() part:number;
        @Prop() threshold: number;
    }
</script>
<style lang="scss">
</style>