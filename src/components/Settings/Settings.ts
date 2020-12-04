import { Component, Vue } from 'vue-property-decorator';
import Timeselector from 'vue-timeselector';

@Component({
  components: {
    Timeselector,
  },
})

export default class Settings extends Vue {
  protected rounds = new Date();
}