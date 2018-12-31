<template>
    <div>
        <h1>{{title}}</h1>
        <table>
            <tr>
                <th>GuardId</th>
                <th v-for="i in range">{{i}}</th>
            </tr>
            <tr v-for="guardSleep in guardSleeps">
                <td>{{guardSleep.guardId}}</td>
                <td v-for="sleep in guardSleep.sleepInfos" :class="{'max': sleep.max}">{{sleep.count}}</td>
            </tr>
        </table>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    class GuardSleepInfo {
        public minute: number = 0;
        public sleepTotal: number = 0;
        public count: number = 0;
        public max: Boolean = false;
    }

    class GuardSleeps {
        public guardId: number = 0;
        public sleepInfos: GuardSleepInfo[] = [];
    }

    @Component({})
    export default class Day4 extends Vue {
        public title: string = 'DAY4 part 2';
        public guardSleeps: GuardSleeps[] = [];
        public range:number[] = [...Array(60).keys()];

        getSleeps() {
            return this.$axios.get<GuardSleeps[]>('//localhost:8080/day4/sleeps')
                .then((response) => response.data);
        }

        mounted() {
            this.getSleeps()
                .then((guardSleeps) => {
                    this.guardSleeps = guardSleeps;
                });
        }
    }

</script>
<style lang="scss" scoped>
    .max{
        background-color: red;
        color: white;
        font-weight: bold;
    }
</style>