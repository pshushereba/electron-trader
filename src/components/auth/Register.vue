<template>
  <div>
    <div>
      <form>
        <div>
          <div>
            <label>First Name</label>
            <input type="text" v-model="form.firstName" />
          </div>
          <div>
            <label>Last Name</label>
            <input type="text" v-model="form.lastName" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" v-model="form.email" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" v-model="form.password" />
          </div>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
