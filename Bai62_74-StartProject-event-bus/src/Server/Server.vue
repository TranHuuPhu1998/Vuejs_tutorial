<template>
  <div id="app">
    <h1> Server component </h1>
    <ul>
        <li v-for="(todo,index) in todos" :key="index" >
			{{index}}
        	{{todo.name}}
			<hr/>
			{{todo.done}}
        </li>
    </ul>
  </div>
</template>

<script>
    	let todos = [
		{
			id: "1",
			name: "Record Video",
			done: false
		},
		{
			id: "2",
			name: "Upload Video",
			done: false
		},
		{
			id: "3",
			name: "partayy",
			done: false
		},
		{
			id: "4",
			name: "Debug",
			done: false
		},
		{
			id: "5",
			name: "More Debug",
			done: false
		}
	];

    export default {

        data : function(){
            return {
                todos : todos
            }
        }
    }
</script>
<style scoped>
  div{
    border: 1px solid #302414;
  }
</style>

