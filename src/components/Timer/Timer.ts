import { Component, Vue } from 'vue-property-decorator';
import Settings from '../Settings/Settings.vue';

@Component({
  components: {
    Settings,
  },
})

export default class Timer extends Vue {
}