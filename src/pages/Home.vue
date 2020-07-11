
<template>
  <layout>
    <p ref="doc" class="home" v-html="this.currentDoc"></p>
  </layout>
</template>

<script>
  import Layout from '../Layout.vue'
  export default {
    name: 'Home',
    components: {
      Layout
    },
    data: function () {
      return {
        currentDoc: this.$root.docReadMe
      }
    },
    mounted () {
      let links = this.$refs.doc.getElementsByTagName('a')
      links.forEach(link => {
        if (link.href.indexOf('LICENSE.md') > -1) {
          link.addEventListener('click', event => {
            event.preventDefault();
            this.currentDoc = this.$root.docLicense
          }, false)
        }
      })
    }
  }
</script>

<style>
  p.home {
    padding: 1.5rem;
    background-color: white;
    width: 100%;
    margin: 1rem;
  }

  p.home > h1,
  p.home > h2,
  p.home > h3,
  p.home > h4,
  p.home > h5,
  p.home > h6 {
    padding-bottom: .3rem;
    border-bottom: 1px solid #eee;
  }
  p.home > h1 {
    display: none;
  }
  p.home > h2 {
    margin: 1rem 0 .8rem 0;
  }

  p.home > blockquote {
    border-left: 5px lightgray solid;
    padding-left: 0.5rem;
  }

  p.home > pre {
    padding: 16px;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    background-color: #f6f8fa;
    border-radius: 6px;
  }
  p.home > h1 > code,
  p.home > h2 > code,
  p.home > h3 > code,
  p.home > h4 > code,
  p.home > h5 > code,
  p.home > h6 > code,
  p.home > code {
    border: 1px lightgray solid;
    background-color: #eee;
    padding: 0.2rem;
  }

  p.home > table {
    border-spacing: 0;
    border-collapse: collapse;
    display: block;
    width: 100%;
    overflow: auto;
  }
  p.home > table tr {
    background-color: #fff;
    border-top: 1px solid #c6cbd1;
  }
  p.home > table th {
    padding: 6px 13px;
    border: 1px solid #dfe2e5;
    font-weight: 600;
  }
  p.home > table td {
    padding: 6px 13px;
    border: 1px solid #dfe2e5;
  }
</style>