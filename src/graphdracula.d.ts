declare module 'graphdracula' {
    export class Graph {
        addEdge(from: any, to: any, options: any): void;
    }

    export namespace Layout {
        export class Spring {
            constructor(g: Graph);
        }
    }

    export namespace Renderer {
        export class Raphael {
            constructor(e: string, g: Graph, w: number, h: number)

            draw(): void;
        }
    }
}