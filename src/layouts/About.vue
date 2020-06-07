<template>
  <page-layout :name="$options.name">
    <b-card>
      Welcome, my name is Rodrigo Oshiro.
      <br />
      <br />This page is made with
      <a target="_blank" href="https://nodejs.org/">Node.js</a> /
      <a target="_blank" href="https://vuejs.org/">Vue.js</a>, hosted in
      <a target="_blank" href="http://github.io/">GitHub Pages</a> and
      the source code of this project is in my
      <a
        target="_blank"
        href="https://github.com/rodrigooshiro/blog"
      >blog</a> repository.
      <br />I'll be posting my dreams journal mostly and eventually import my blogspot over here.
    </b-card>
  </page-layout>
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
import PageLayout from './PageLayout'

export default {
  name: 'About',
  props: [],
  components: {
    PageLayout
  }
}
</script>

<style scoped>
</style>
