import { defaultFormDataObj } from "./log_SLICE";
import validate from './validate.js'
    function validateInput(state, {payload:{type, value}}){
        const isValid = validate(type,value)
        state.inputsValidation[type] = isValid
        this.isValid()
    }
   function isValid(state){
        const arrOfValues = Object.values(state.inputsValidation);
        const boolean = arrOfValues.any((item)=>(item));
        console.log(arrOfValues, boolean)
        state.isValid = boolean
    }
    function toggleReductStatus(state){
        state.isRedacting = !state.isRedacting
    }
  function  enterData(state, {payload:{value, typeOfInput, typeOfData}}){
        state[typeOfData][typeOfInput] = value;
        this.validateInput({type: typeOfInput, value});
        // validate inputs
    }
   function compareDatas(state, {toggleStatus}){
        const userDataJSON = JSON.stringify(state.userData)
        const formDataJson = JSON.stringify(state.formData)
        if(userDataJSON == formDataJson && state.formData.isValid){
            toggleStatus();
            this.deleteData();
        }else{

        }
    }
    function deleteData(state){
        state.formData = defaultFormDataObj;
    }
    const logReducers = {

    }
export {logReducers}