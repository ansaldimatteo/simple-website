//import {URL} from './constants.js'

function addValue(){
    let key = document.getElementById("add-key").value
    let value = document.getElementById("add-value").value

    if(key == "" || value == ""){
        return
    }

    axios.put(`http://${URL}/${key}`, { value: value })
    .then(response => {
        console.log(response.data)
        document.getElementById("outputs").innerHTML = "Added " + response.data
    })
    .catch(error => console.error('On get values error', error))
}

function getValue(){
    let key = document.getElementById("get-key").value

    if(key == ""){
        return
    }

    axios.get(`http://${URL}/${key}`)
    .then(response => {
        console.log(response.data)
        document.getElementById("outputs").innerHTML = response.data
    })
    .catch(error => console.error('On get values error', error))
}

function deleteValue(){
    let key = document.getElementById("delete-key").value

    if(key == ""){
        return
    }

    axios.delete(`http://${URL}/${key}`)
    .then(response => {
        console.log(response.data)
        document.getElementById("outputs").innerHTML = "Deleted " + key
    })
    .catch(error => console.error('On get values error', error))
}

function getValues(){
    axios.get(`http://${URL}`)
    .then(response => {
        console.log(response.data)
        let output = ""
        for(let i = 0; i < response.data.length; i++){
            console.log(response.data[i])
            output = output + response.data[i]+"<br>"
        }
        document.getElementById("outputs").innerHTML = output
    })
    .catch(error => console.error('On get values error', error))
}