<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <span>{{ user }}</span>
  </div>
</template>

<script>
// import firebase from '../utils/FirebaseConfig';
import { mapState } from 'vuex';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  computed: {
    ...mapState({
      user: state => state.user,
    }),
  },
  created() {
    this.$store.dispatch('Authentication/login');
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
