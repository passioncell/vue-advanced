<template>
  <user-profile>
    <div slot="username">{{ userInfo.id }}</div>
    <span slot="time">{{ 'Joined ' + userInfo.created }}, </span>
    <span slot="karma">{{ userInfo.karma }}</span>
  </user-profile>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';

export default {
  components: {
    UserProfile
  },
  created() {
    const userId = this.$route.params.id;
    this.$store.dispatch("FETCH_USER", userId);
  },
  computed: {
      userInfo() {
          return this.$store.state.userInfo;
      }
  }
}
</script>

<style>

</style>