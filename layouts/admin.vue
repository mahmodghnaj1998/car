<template>
  <div>
    <v-app>
      <v-card v-if="show">
        <v-navigation-drawer dark app permanent>
          <v-list dense>
            <v-list-item
              v-for="item in items"
              :key="item.title"
              link
              :to="item.path"
              :exact="item.title === 'Photo home'"
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-card>
      <v-app-bar-nav-icon
        @click="drawer_app = true"
        class="hidden-md-and-up"
      ></v-app-bar-nav-icon>
      <v-navigation-drawer
        v-model="drawer_app"
        color="transparent"
        bottom
        fixed
        height="auto"
        overlay-color="secondary"
        overlay-opacity=".8"
        temporary
        v-bind="$attrs"
        v-on="$listeners"
      >
        <v-list color="white" shaped>
          <v-list-item
            v-for="name in items"
            :key="name.path"
            :to="name.path"
            :exact="name.title === 'Photo home'"
            color="primary"
          >
           <v-list-item-icon>
                <v-icon>{{ name.icon }}</v-icon>
              </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                {{ $t(name.title) }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main>
        <nuxt />
      </v-main>
    </v-app>
  </div>
</template>
<script>
import cookie from "js-cookie";
export default {
  data() {
    return {
      items: [
        { title: "Photo home", icon: "mdi-home-city", path: "/admin" },
        { title: "Add car", icon: "mdi-car", path: "/admin/addcar" },
        { title: "Edit car", icon: "mdi-car", path: "/admin/editcar" },
      ],
      drawer_app: false,
    };
  },
  computed: {
    show() {
      return this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm
        ? false
        : true;
    },
  },

  middleware({ redirect, store, app: { $axios } }) {
    // If the user is not authenticated
    if (!store.getters.user) {
      redirect("/login");
    } else {
      $axios.setToken(cookie.get("token"), "Bearer");
    }
  },
};
</script>
