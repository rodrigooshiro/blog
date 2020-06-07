<template>
  <b-navbar toggleable="lg" type="dark" variant="secondary">
    <b-navbar-brand href="/" style="padding: 0px !important;">
      <b-icon icon="eye-fill" style="width: 32px; height: 32px;"></b-icon>
    </b-navbar-brand>
    <router-link to="/" v-slot="{ href }">
      <b-navbar-brand :href="href + '?action=home'">Home</b-navbar-brand>
    </router-link>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <router-link to="/about" v-slot="{ href }">
          <b-nav-item :href="href">About</b-nav-item>
        </router-link>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
/**
 * @license
 * Copyright 2020 Rodrigo Oshiro. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
export default {
  name: 'PageHeader',
  props: ['name'],
  data() {
    return {
    }
  }
}
</script>

<style scoped>
</style>
