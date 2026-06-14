class React{
    constructor(){
        this.library = "React"
        this.server = "https://localhost:300"

        //requirement
        document
                .querySelector('button')
                .addEventListener('click',this.handelClick.bind(this))
}
handelClick(){
    console.log("button clicked");
    console.log(this.library);
}
}
const app = new React();