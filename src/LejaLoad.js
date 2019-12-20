    const empty = s =>((s==undefined)||(s==null)||(s.trim()===''))
    const loadText = async path =>{
        try{
            let ret = {}
            ret.posts=[]
            ret.singleText=true
            ret.allowComments = true
            const resCont = await fetch(path);
            const txtCont = await resCont.text();
            if(resCont.ok){        
                if(empty(txtCont)){
                    return loadError(404)
                }else{
                    ret.text = txtCont
                }
            }else{
                return loadError(500)
            }
            return ret
        }catch(ex){
            console.error(ex)
            return loadError(500)
        }
    }
    const loadError = async errorCode =>{
        let err = await loadText(`../data/error/${errorCode}.md`)
        err.allowComments = false
        return err
    }
    const loadOne = async (type, name)=>{
        let ret = await loadText(`../data/${type}/${name}.md`);
        ret.titleText = name
        return ret    
    }
    const loadOneWithDate = async (type, date, name)=>{    
        let ret = await loadOne(type,`${date}-${name}`)    
        ret.titleText = name
        return ret
    }

    export  {
            loadError,
            loadOne,
            loadOneWithDate
        }