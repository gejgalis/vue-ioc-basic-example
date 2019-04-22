<template>
  <HelloWorld/>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Module } from "@vue-ioc/core";
import { HttpService } from "./services/HttpService";
import * as HelloWorld from "./components/HelloWorld.vue";

@Module({
  providers: [HttpService]
})
@Component({
  components: { HelloWorld }
})
export default class App extends Vue {}
</script>