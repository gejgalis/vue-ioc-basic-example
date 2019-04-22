<template>
  <div>
    <h2 v-if="user">Hello {{user.firstName}} {{user.lastName}}!</h2>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Inject } from "@vue-ioc/core";
import { HttpService } from "../services/HttpService";

@Component()
export default class HelloWorld extends Vue {
  @Inject()
  public httpService: HttpService;

  public user = null;

  public async created() {
    this.user = await this.httpService.get("hello.json");
  }
}
</script>