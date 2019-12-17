    import navaid 	from 'navaid'    
    const empty = s =>((s==undefined)||(s==null)||(s.trim()===''))
    const loadText = async path =>{
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
    }
    const loadError = async errorCode =>{
        let err = await loadText(`./data/error/${errorCode}.md`)
        err.allowComments = false
        return err
    }
    const loadOne = async (type, name)=>{
        let ret = await loadText(`./data/${type}/${name}.md`);
        ret.titleText = name
        return ret    
    }
    const loadOneWithDate = async (type, date, name)=>{    
        let ret = await loadOne(type,`${date}-${name}`)    
        ret.titleText = name
        return ret
    }
    let dataRoute={}
    export default async function dataRouted(){
        await initRoute()
        return dataRoute
    }
    const initRoute = async ()=>{
        dataRoute = await loadOne('pages','Sobre')
        dataRoute.allowComments=false;
    }
    export async function _init(){
        console.log('starting route')
        let router = navaid()
        router.on('/',async ()=>{
            console.log('going to roots!')
            const res = await fetch('./data/blog-data.json');
            const text = await res.text()	
            if (res.ok) {
                dataRoute = JSON.parse(text)
                dataRoute.singleText=false    
            }else{
                dataRoute = loadError(500)
            }        
        })
        .on('/pages/:title',async (p)=>{
            console.log('going to pages!')
            dataRoute = await loadOne('pages',p.title)
        })
        .on('/posts/:date-:title',async (p)=>{
            console.log('going to posts!')
            dataRoute = await loadOneWithDate('pages',p.date,p.title)
        })
        

    }

