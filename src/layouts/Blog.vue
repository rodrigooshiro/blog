<template>
  <page-layout ref="layout" :name="$options.name">
    <template v-for="entry in entries">
      <b-card v-bind:key="entry.index">
        <b-card-title>{{ formatDate(entry.date) }}</b-card-title>
        <b-card-body>
          <template v-for="i in entry.id">
            <div v-bind:key="i" style="text-align: justify">
              <b-badge variant="secondary">{{ formatCategory(entry.category[i]) }}</b-badge>
              <vue-markdown :anchorAttributes="anchor" :source="entry.body[i]"></vue-markdown>
            </div>
          </template>
        </b-card-body>
      </b-card>
    </template>
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
import VueMarkdown from 'vue-markdown'
import PageLayout from './PageLayout'
import path from 'path'

export default {
  name: 'Blog',
  props: [],
  components: {
    VueMarkdown,
    PageLayout
  },
  created() {
    if (this.$route.query.action !== undefined) {
      let query = Object.assign({}, this.$route.query)
      delete query.action
      this.$router.replace({ query })
    }
  },
  mounted() {
    let entries = require.context('../entries/', true, /\.md$/)
    entries.keys().forEach(filename => this.parseFile(path.basename(filename)))
  },
  data() {
    return {
      anchor: {
        target: '_blank',
        rel: 'noopener noreferrer nofollow'
      },
      entries: []
    }
  },
  computed: {},
  watch: {
    '$route.query.action'(next, prev) {
      if (next !== undefined) {
        let query = Object.assign({}, this.$route.query)
        delete query.action
        this.$router.replace({ query })
      }
    }
  },
  methods: {
    formatDate(date) {
      return date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: '2-digit',
        timeZone: 'UTC'
      })
    },
    formatCategory(category) {
      return category.split('.')[0]
    },
    parseBody(category, body) {
      let entries = [...body.matchAll(/\[(\d{4}-\d{2}-\d{2})\]\n(.*)/g)]
      for (let i = 0; i < entries.length; i++) {
        let entry = entries[i]
        let prev = entry.index + entry[1].length + 2
        let next = i === entries.length - 1 ? body.length : entries[i + 1].index
        let date = new Date(entry[1])
        let item = this.entries.filter(x => x.date.getTime() === date.getTime())
        if (item.length > 0) {
          item[0].id.push(item[0].id.length)
          item[0].category.push(category)
          item[0].body.push(body.substring(prev, next))
        } else {
          this.entries.push({
            index: this.entries.length,
            id: [0],
            category: [category],
            date: new Date(entry[1]),
            body: [body.substring(prev, next)]
          })
        }
      }
    },
    parseFile(filename) {
      let category = filename.split('-')[2]
      let module = () => import('../entries/' + filename)
      module().then(data => this.parseBody(category, data.default))
    }
  }
}
</script>

<style scoped>
</style>
