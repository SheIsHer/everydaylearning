<template>
  <div id="app">
    <a-input placeholder="请输入任务" class="my_ipt" style="width: 500px"
    :value="inputValue" @change="handleInputChange"></a-input>
    <a-button type="primary" @click="addItemToList">添加事项</a-button>
    <a-list bordered :dataSource="infolist" class="dt_list">
      <a-list-item slot="renderItem" slot-scope="item">
        <!-- 复选框 -->
        <a-checkbox :checked="item.done" @change="e => cbStatusChanged(e, item.id)">{{item.info}}</a-checkbox>
        <!-- 删除链接 -->
        <a slot="actions" @click="removeItemById(item.id)">删除</a>
      </a-list-item>
      <div slot="footer" class="footer">
        <span>{{unDoneLength}}条剩余</span>
        <a-button-group>
          <a-button :type="viewKey==='all' ? 'primary' : 'default'" @click="changeList('all')">全部</a-button>
          <a-button :type="viewKey==='undone' ? 'primary' : 'default'" @click="changeList('undone')">未完成</a-button>
          <a-button :type="viewKey==='done' ? 'primary' : 'default'" @click="changeList('done')">已完成</a-button>
        </a-button-group>
        <a @click="clean">清除已完成</a>
      </div>
    </a-list>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'app',
  data() {
    return {
    }
  },
  computed: {
    ...mapState(['inputValue', 'viewKey']),
    ...mapGetters(['unDoneLength', 'infolist'])
  },
  created() {
    this.$store.dispatch('getList')
  },
  methods: {
    handleInputChange(e) {
      this.$store.commit('setInputValue', e.target.value)
    },
    addItemToList() {
      if (this.inputValue.trim().length <= 0) {
        return this.$message.warning('文本框内容不能为空!')
      }
      this.$store.commit('addItem')
    },
    removeItemById(id) {
      console.log(id);
      this.$store.commit('removeItem', id);
    },
    // 监听复选框选中状态变化的事件
    cbStatusChanged(e, id) {
      const param = { id: id, status: e.target.checked }
      this.$store.commit('changeStatus', param)
    },
    // 清除已完成的任务
    clean() {
      this.$store.commit('cleanDone')
    },
    changeList(key) {
      console.log(key)
      this.$store.commit('changeViewKey', key)
    }
  }
}
</script>

<style>
#app {
  padding: 10px;
}
.my_ipt {
  width: 500px;
  margin-right: 10px;
}

.dt_list {
  width: 500px;
  margin-top: 10px;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
