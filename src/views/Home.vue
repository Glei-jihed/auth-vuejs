<template>
 {{ message }}
</template>

<script lang="ts">
import {onMounted, ref} from "vue";
import {useStore} from "vuex";

export default {
  name: "Home",
  setup() {
      const message = ref('Connection Deined please login ! ');
      const store = useStore()
      onMounted(async () => {
        try {
          const response =  await fetch('http://localhost:3005/api/user', {
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',

          });
          const content = await response.json();
          message.value = `Hi ${content.name}`;
          await store.dispatch('setAuth', true);
        } catch (e){
          await store.dispatch('setAuth', false);

        }

      });
      return {
        message
      }
    }

}
</script>

<style scoped>

</style>