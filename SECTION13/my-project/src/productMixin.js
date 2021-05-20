export const productsMixin = {
    data : function(){
      return {
        products : ["Iphone","SamSung","HTC","Nokia","Noway","Bphone"],
        filterProduct : ''
      }
    },
    computed:{
      filteredProducts(){
        return this.products.filter((element)=>{
          return element.match(this.filterProduct)
        })
      }
    },
    created(){
        console.log('created from products')
    }
}