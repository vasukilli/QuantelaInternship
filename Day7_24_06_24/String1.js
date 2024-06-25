function text_truncate(str,length,ending='...'){
    let str_len = str.length;
    if(str_len > length){
        return str.substring(0,length-ending.length) + ending;
    }
    return str;
}
console.log(text_truncate('We are doing JS string exercises.'))
console.log(text_truncate('We are doing JS string exercises.',19))
console.log(text_truncate('We are doing JS string exercises.',15,'!!'))