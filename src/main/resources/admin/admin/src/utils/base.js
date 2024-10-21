const base = {
    get() {
                return {
            url : "http://localhost:8080/springboott01gx/",
            name: "springboott01gx",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboott01gx/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "网上点餐系统"
        } 
    }
}
export default base
