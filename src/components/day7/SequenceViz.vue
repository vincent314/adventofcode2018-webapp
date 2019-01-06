<template>
    <div>
        <div id="viz"></div>
    </div>
</template>
<script lang="ts">
    import { Component, Prop, Vue, Watch } from "vue-property-decorator";
    import Vertex from '@/model/day7/Vertex';
    import * as Dracula from 'graphdracula';

    @Component({})
    export default class SequenceViz extends Vue {
        @Prop() vertices: Vertex[];

        @Watch('vertices')
        onVerticesChange() {
            const graph = new Dracula.Graph();
            console.log(this.vertices);
            this.vertices.forEach((vertex) => {
                if(!vertex.next){
                    return;
                }
                vertex.next.forEach((next) => {
                    graph.addEdge(vertex.value, next, { directed: true })
                });
            });

            const layout = new Dracula.Layout.Spring(graph);
            const renderer = new Dracula.Renderer.Raphael('#viz', graph, 1200, 1000);
            renderer.draw();
        }
    }
</script>