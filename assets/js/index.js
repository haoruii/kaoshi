/**
 * 
 * @authors cherish yii2 (cherish@cherish.pw)
 * @date    2020-12-10 16:48:28
 * @version v1.0
 * @description the core js of todolist project
 * 
 * ━━━━━━神兽出没━━━━━━
 * 　　   ┏┓　 ┏┓
 * 　┏━━━━┛┻━━━┛┻━━━┓
 * 　┃              ┃
 * 　┃       ━　    ┃
 * 　┃　  ┳┛ 　┗┳   ┃
 * 　┃              ┃
 * 　┃       ┻　    ┃
 * 　┃              ┃
 * 　┗━━━┓      ┏━━━┛ Code is far away from bugs with the animal protecting.
 *       ┃      ┃     神兽保佑,代码无bug。
 *       ┃      ┃
 *       ┃      ┗━━━┓
 *       ┃      　　┣┓
 *       ┃      　　┏┛
 *       ┗━┓┓┏━━┳┓┏━┛
 *     　  ┃┫┫　┃┫┫
 *     　  ┗┻┛　┗┻┛
 *
 * ━━━━━━感觉萌萌哒━━━━━━
 */

// 请根据考试说明文档中列出的需求进行作答
// 预祝各位顺利通过本次考试，see you next week！
// ...


// 存在数据
let todo_data = null
var storage = localStorage.getItem("todolist")

if (storage === null) {
    localStorage.setItem("todolist", "[]")
    storage = "[]"
}
var json_obj = JSON.parse(storage)
todo_data = json_obj
// console.log(todo_data)
render()

let input_ele = document.getElementById("title")
input_ele.onkeydown = function (evt) {
    var e = evt || event
    var code = e.keyCode || e.which
    if (code === 13) {
        todo_data.push({
            content: input_ele.value,
            done: false
        })
        localStorage.setItem("todolist", JSON.stringify(todo_data))
        render()
        input_ele.value = ""
    }
}

function render() {
    let todo_html = ""
    let done_html = ""
    todo_data.forEach(item => {
        if (item.done) {
            done_html += `
                        <li>
                              <input type="checkbox" checked="true">
                              <p>${item.content}</p>
                              <a>-</a>
                        </li>`
        } else {
            todo_html += `
                        <li>
                              <input type="checkbox" >
                              <p>${item.content}</p>
                              <a>-</a>
                        </li>`
        }
    })
    var todo_ele = document.getElementById("todolist")
    var done_ele = document.getElementById("donelist")
    
    todo_ele.innerHTML = todo_html
    done_ele.innerHTML = done_html

    
}




