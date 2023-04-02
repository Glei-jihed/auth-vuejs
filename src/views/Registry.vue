<template>
  <form @submit.prevent="submit">
    <h1 class="h3 mb-3 fw-normal">Please Register</h1>

      <input v-model="data.email" type="email" class="form-control"  placeholder="email" required>


      <input v-model="data.name" type="text" class="form-control"  placeholder="name" required>


      <input v-model="data.age" type="number" class="form-control"  placeholder="age" required>


      <input v-model="data.password" type="password" class="form-control"  placeholder="password" required>

    <button class="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
  </form>
</template>

<script lang="ts">
import {reactive} from "vue";
import {useRouter} from "vue-router";
import * as http from "http";

export default {
  name: "Registry",
  setup(){
    const data = reactive({
      email:'',
      name:'',
      age:'',
      password:''
    });
    const router = useRouter();
    const submit = async ()=>{
      await fetch('http://localhost:3005/api/registre', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      });


      await router.push('/login');
    };
    return {
      data,
      submit
    }

  }
}
</script>

<style scoped>

</style>