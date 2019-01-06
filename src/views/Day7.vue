<template>
    <SequenceViz :vertices="vertices"></SequenceViz>
</template>
<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";
    import SequenceViz from '@/components/day7/SequenceViz.vue'
    import Vertex from '@/model/day7/Vertex';

    @Component({
        components: { SequenceViz },
    })
    export default class Day7 extends Vue {
        public vertices: Vertex[] = [];

        mounted(){
            this.$axios.get<Vertex[]>("http://localhost:9000/day7/vertices")
                .then(response => response.data)
                .then(vertices => this.vertices = vertices);
        }
    }
</script>
<style lang="scss">
</style>