<template>
  <svg class="dagre">
    <g class="container"></g>
  </svg>
</template>

<script>
import dagreD3 from 'dagre-d3'
import $ from 'jquery'
export default {
  name: 'darge02',
  data () {
    return {
      graph: null,
      render: null,
      graphMargin: 5
    }
  },
  created () {

  },
  mounted () {
    this.graphMargin = this.graphMargin ? this.graphMargin : 25
    this.svgns = 'http://www.w3.org/2000/svg'
    this.xlinksn = 'http://www.w3.org/1999/xlink'

    let graphDiv = this.el[0]
    let svg = $(this.el).find('svg')[0]
    if (!svg) {
      svg = this.el
    }

    this.svgGraph = svg
    $(this.svgGraph).svg()
    this.svg = $(svg).svg('get')

    $(this.svgGraph).empty()

    // Create mainG node
    let gNode = document.createElementNS(this.svgns, 'g')
    gNode.setAttribute('class', 'main graph')
    svg.appendChild(gNode)
    this.mainG = gNode

    if (settings.rightClick) {
      this.rightClick = this.rightClick
    }

    $(svg).svgNavigate()

    let self = this
    if (self.rightClick && self.rightClick.graph) {
      $(svg).on('contextmenu', function (evt) {
        console.log('graph click')
        let currentTarget = evt.currentTarget

        self.rightClick.graph(evt, self.model, currentTarget.data)
        return false
      })
    }

    this.tooltipcontainer = this.tooltipcontainer
      ? this.tooltipcontainer : 'body'
    if (this.render) {
      this.render()
    }
  },
  methods: {

  },
  watch: {

  }
}
</script>

<style scoped>

</style>
