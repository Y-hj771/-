<template>
  <el-card>
    <!-- 弹窗添加用户 -->
    <el-dialog
      :title="operateType === 'add' ? '新增用户' : '编辑用户'"
      :visible.sync="isShow"
    >
      <common-form
        :formLabel="operateFormLabel"
        :form="operateForm"
        :inline="true"
        ref="form"
      ></common-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="confirm">确定</el-button>
        <el-button @click="isShow = false">取消</el-button>

      </div>
    </el-dialog>

    <el-row :gutter="20">
      <!-- <el-col :span="8">
         @click="search" 
        <el-input placeholder="请输入内容" v-model="ipt">
          <el-button slot="append" icon="el-icon-search" @click="getInfo(ipt)"></el-button>
        </el-input>
      </el-col> -->
      
        <!--  @click="drawer = true" -->
        <div class="manger-header">
          <el-button type="primary" @click="addUser">+新增</el-button>
        
        
      <common-form
        :formLabel="formLabel"
        :form="searchFrom"
        :inline="true"
        ref="form"
      >
        <el-button type="primary" @click="getInfo(searchFrom.keyword)">搜索</el-button>
      </common-form>
        </div> 
    </el-row>
    <!-- 表格模块 -->
    <div class="table">
      <common-table
      :tableData="tableData"
      :tableLabel="tableLabel"
      :config="config"
      @changePage="getInfo()"
      @edit="editUser"
      @del="delUser"
    >
    </common-table>
    </div>
  
  </el-card>
  
</template>

<script>
import { getUsers } from '../../../api/data'
import CommonForm from './CommonForm.vue'
import CommonTable from './CommonTable.vue'
export default {
  name: 'UserInfo',
  components:{
    CommonForm,
    CommonTable
  },
  data() {
    return {
      operateType:'add',
      isShow:false,
      operateFormLabel:[
        {
          model:'name',
          label:'姓名',
          type:'input'
        },
        {
          model:'gen',
          label:'性别',
          type:'select',
          opts:[{
            label:'男',
            value:1
          },
          {
            label:'女',
            value:0
          }
          ]
        },
        {
          model:'addr',
          label:'地址',
          type:'input'
        },
        {
          model:'tel',
          label:'手机号',
          type:'input'
        }
      ],
      operateForm:{
        name:'',
        gen:'',
        addr:'',
        tel:''
      },
      formLabel:[
        {
          model:'keyword',
          label:'',
          type:'input'
        }
      ],
      searchFrom:{
        keyword:''
      },
      // 表格部分
      tableData:[],
      tableLabel:[
        {
          prop:'name',
          label:'姓名'
        },
        {
          prop:'gen',
          label:'性别'
        },
        {
          prop:'addr',
          label:'地址'
        },
        {
          prop:'tel',
          label:'电话'
        }
      ],
      config:{
        page:1,
        total:0
      },
    }
  },
  created() {
    this.getInfo()
  },
  methods: {
    getInfo(name = '') {
      name ? (this.config.page = 1) : ''
      getUsers({
        page:this.config.page,
        name
      }).then(res => {
        console.log(res)
        this.tableData = res.data.data.map(item => {
          item.gen = item.gen === 0 ? '女': '男'
          return item
        })
        this.config.total = res.data.count
       
      })
    },
    // 子组件传到父组件删除函数
    delUser(row) {
      // console.log(row.index);
        this.$confirm("此操作将永久删除该文件，是否继续？","提示",{
          confirmButtonText:'确认',
          cancelButtonText:'取消',
          type:'warning'
        }).then(() => {
          const id = row.id
        
          this.$http.get('/user/del',{
          params:{ id }
          }).then(() => {
          this.$message({
          type:'success',
          message:'删除成功'
        })
          this.getInfo()
        })
      })
      },
    
      
     
    
    // 子组件传到父组件编辑函数
    editUser(row) {
      this.operateType = 'edit'
      this.isShow = true
      this.operateForm = row
    },
    // 添加用户确定按钮事件
    confirm() {
      if(this.operateType === 'edit'){
        this.$http.post('/user/edit',this.operateForm).then(res => {
          console.log(res);
          this.isShow = false
          this.getInfo()
        })
      }else {
        this.$http.post('/user/add',this.operateForm).then(res => {
          console.log(res);
          this.isShow = false
          this.getInfo()
        })
      }
    },
    // 点击添加户主
    addUser() {
      this.isShow = true
      this.operateType = 'add'
      this.operateForm = {
        name:'',
        gen:'',
        addr:'',
        tel:''
      }
    }
    // // 监听pagesize 改变的事件
    // handleSizeChange(newSize) {
    //   console.log(newSize);
    //   this.queryInfo.pagesize = newSize
    //   this.getInfo()
    // },
    // // 监听页码值 改变事件
    //  handleCurrentChange(newPage) {
    //    console.log(newPage);
    //   //  this.queryInfo.pagenum = newPage
    //    this.getInfo()
    //  },
   
  },
}
</script>

<style lang="less" scoped>
.table {
  margin-top: 20px;
  width: 1681px;
  height: 700px;
}
.common-table {
  
  text-align: center;
}
.manger-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>
