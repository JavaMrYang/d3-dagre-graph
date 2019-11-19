<template>
  <DagreGraph :nodes="nodes" :edges="edges"/>
</template>

<script>
import DagreGraph from '@/components/dagre/DagreGraph'
export default {
  name: 'darge01',
  data () {
    return {
      nodes: [],
      edges: []
    }
  },
  components: {
    DagreGraph
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.nodes = [
        {
          id: 'e1',
          state: '',
          value: {
            label: '开始',
            operator: 'BashOperator'
          }
        },
        {
          id: 'e2',
          state: 'success',
          value: {
            label: '分支一',
            operator: 'BranchPythonMapOperator'
          }
        },
        {
          id: 'e3',
          state: 'success',
          value: {
            label: '分支二',
            operator: 'BranchPythonMapOperator'
          }
        },
        {
          id: 'e4',
          state: 'queued',
          value: {
            label: '节点3',
            operator: 'BashOperator'
          }
        },
        {
          id: 'e5',
          state: 'failed',
          value: {
            label: '节点4',
            operator: 'BashOperator'
          }
        },
        {
          id: 'e7',
          state: 'queued',
          value: {
            label: '节点4',
            operator: 'BashOperator'
          }
        },
        {
          id: 'e8',
          state: 'queued',
          value: {
            label: '节点5',
            operator: 'BashOperator'
          }
        },
        {
          id: 'e9',
          state: 'queued',
          value: {
            label: '节点6',
            operator: 'BashOperator'
          }
        },
        {
          id: 'e10',
          state: 'queued',
          value: {
            label: '节点7',
            operator: 'BashOperator'
          }
        },
        {
          id: 'e6',
          state: 'upstream_failed',
          value: {
            label: '结束',
            operator: 'JoinOperator'
          }
        }
      ]
      this.edges = [
        /* {
          from: 'e1',
          to: 'e2'
        },
        {
          from: 'e1',
          to: 'e3'
        }, */
        {
          from: 'e2',
          to: 'e4',
          label: '条件1'
        },
        {
          from: 'e3',
          to: 'e5',
          label: '条件2'
        },
        {
          from: 'e5',
          to: 'e7',
          label: ''
        },
        {
          from: 'e3',
          to: 'e8',
          label: '连接线'
        },
        {
          from: 'e7',
          to: 'e9'
        },
        {
          from: 'e8',
          to: 'e10'
        },
        {
          from: 'e9',
          to: 'e6'
        },
        {
          from: 'e10',
          to: 'e6'
        }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
   .dagre-graph-container {
     width: 100%;
     height: 800px;
     margin: 0 auto;
     text-align: center;
   }
</style>
