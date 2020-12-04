import { Component, Vue } from 'vue-property-decorator';
import Timer from './components/Timer/Timer.vue';

@Component({
  components: {
    Timer,
  },
})

export default class App extends Vue {
}