<template>
  <v-app>
    <v-main>
      <pizza-maker/>
    </v-main>
  </v-app>
</template>

<script>
import PizzaMaker from './components/PizzaMaker';

export default {
  name: 'App',

  components: {
    PizzaMaker,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
#app {		
	background-image: url('./assets/img/repeat_bg.jpg');
	background-position: center top;
	background-repeat: repeat-y;
	background-color: #2d1917;
}
</style>