<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  // components: {
  //   HelloWorld,
  // },

  data: () => ({
    //
  }),
};
</script>

<style>
#app {
  padding: 0px;
  /* this makes padding included inside height/width */
  box-sizing: border-box;
  margin: 0px;
  height: 100%;
}
.v-main, .v-main__wrap {
  padding: 0px;
  margin: 0px;
  height: 100%;
}
</style>
