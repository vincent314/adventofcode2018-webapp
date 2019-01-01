<template>
    <GridViz></GridViz>
</template>
<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import GridViz from "@/components/day6/GridViz.vue";

    @Component({
        components: { GridViz },
    })
    export default class Day6 extends Vue {

    }
</script>
<style lang="scss">
</style>