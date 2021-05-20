<template>
          <form class="row NewItem-from">
              <div class="form-group row">
                  <label 
                  for="inputName" 
                  class="col-sm-1-12 col-form-label">

                  </label>
                  <div class="newinput">
                      <input 
                      type="text" 
                      class="form-control input" 
                      name="inputName" 
                      id="inputName" 
                      placeholder="create new "
                      v-model="items"
                      >
                  </div>
              </div>
              <button 
              type="button" 
              class="btn btn-primary btnCreated"
              @click.prevent="CreateNew"
              >
                  Create new 
              </button>
          </form>
</template>

<script>
export default {
    props:["ItemApp"],
    data : function(){
        return {
            items : ''
        }
    },
    methods : {
        CreateNew(){
            let ListItem = [ ];
            this.ItemApp.map(x => ListItem.push(x.toLowerCase()));
            if(this.items == ''){
                return false;
            }else if(ListItem.includes(this.items.toLowerCase())){
                return alert("Item : "+ `${this.items.toLowerCase()}` + " đã được khởi tạo")
            }
            else{
                this.$emit('itemNew' , this.items);
                this.items=''
            }

        }
    }
}
</script>

<style scoped>

    .input{
        height: 50px;
        width: 500px;
    }
    .btnCreated{
       height: 50px;
               margin-top: 20px;
    }
    .newinput{
        padding-left: 28px;
        margin-top: 20px;
    }
    .NewItem-from{
        display: flex;
        justify-content: center;
    }
</style>