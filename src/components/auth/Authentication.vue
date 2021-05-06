<template>
  <div>
    <div>
      <form>
        <div>
          <div>
            <label>First Name</label>
            <input type="text" />
          </div>
          <div>
            <label>Last Name</label>
            <input type="text" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mode: ["register", "login"],
      activeMode: "",
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
