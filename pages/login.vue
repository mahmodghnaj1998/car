<template>
  <v-container>
    <v-row>
      <v-col cols="12" offset-sm="3" sm="6" xs="12" class="mt-4">
        <!-- <alert v-if="error" :message="error" /> -->
        <v-card class="grey lighten-4">
          <v-card-text class="text-center text-overline">
            <p class="font-weight-bold text-h6">Sign in</p>
            <v-layout row wrap class="mt-2">
              <v-col xs="12" offset-sm="2" sm="8">
                <form @submit.prevent="login()">
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.min]"
                    :type="show1 ? 'text' : 'password'"
                    name="input-10-1"
                    label="Password"
                    hint="At least 8 characters"
                    counter
                    @click:append="show1 = !show1"
                  ></v-text-field>
                  <v-btn
                    @click="login()"
                    block
                    class="mt-4 mb-4"
                    color="success"
                    :disabled="!validate"
                    :loading="islogin"
                    >Sign in</v-btn
                  >
                </form>
              </v-col>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>

export default {
  name:"login",

  data() {
    return {
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      show1: false,
      password: "",
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
      },
    };
  },
  computed: {
    validate() {
      return (
        this.email !== "" &&
        this.password !== "" &&
        /.+@.+\..+/.test(this.email) &&
        this.password.length >= 8
      );
    },
    islogin() {
      return this.$store.getters.islogin;
    },
    error(){
      return this.$store.getters.error
    },
    user(){
      return this.$store.getters.user
    }
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
    },
  },
   watch: {
      user(value){
       if(value.id == 1){
         this.$router.push("/admin")
       }
      }
    },
};
</script>
